
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, CheckCircle, Phone, Sparkles, Music, Volume2, VolumeX, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TrackVisits = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedEatery, setSelectedEatery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStats, setCurrentStats] = useState({
    chomaPoints: 0,
    balanceKsh: 0,
    visits: 0
  });
  const [eateries, setEateries] = useState<any[]>([]);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchEateries();
    const cleanup = setupRealtimeSubscription();
    return cleanup;
  }, []);

  const fetchEateries = async () => {
    try {
      const { data, error } = await supabase
        .from('eateries')
        .select('*')
        .order('visit_count', { ascending: false });
      
      if (error) {
        console.error('Error fetching eateries:', error);
        return;
      }
      
      if (data) setEateries(data);
    } catch (err) {
      console.error('Error in fetchEateries:', err);
    }
  };

  const setupRealtimeSubscription = () => {
    const channel = supabase
      .channel('visits-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'visits'
        },
        (payload) => {
          console.log('Real-time update:', payload);
          if (payload.new && typeof payload.new === 'object' && 'phone' in payload.new) {
            const newData = payload.new as any;
            if (newData.phone === phoneNumber) {
              updateStatsFromPayload(newData);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const updateStatsFromPayload = (data: any) => {
    setCurrentStats({
      chomaPoints: data.choma_points || 0,
      balanceKsh: data.balance_ksh || 0,
      visits: data.visit_count || 0
    });
  };

  const fetchUserStats = async (phone: string) => {
    try {
      const { data, error } = await supabase
        .from('visits')
        .select('*')
        .eq('phone', phone)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching user stats:', error);
        return;
      }
      
      if (data) {
        updateStatsFromPayload(data);
      } else {
        // Reset stats if no user found
        setCurrentStats({
          chomaPoints: 0,
          balanceKsh: 0,
          visits: 0
        });
      }
    } catch (err) {
      console.error('Error in fetchUserStats:', err);
    }
  };

  const validatePhoneNumber = (phone: string) => {
    const kenyanPhoneRegex = /^(0[17][0-9]{8}|254[17][0-9]{8})$/;
    return kenyanPhoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim() || !selectedEatery) {
      toast({
        title: "Oops! Missing info, mtu wangu! 💭",
        description: "Please enter your phone number and select an eatery.",
        variant: "destructive"
      });
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      toast({
        title: "Invalid phone number! 📱",
        description: "Please enter a valid Kenyan phone number (e.g., 0712345678)",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Check if user exists
      const { data: existingUser, error: fetchError } = await supabase
        .from('visits')
        .select('*')
        .eq('phone', phoneNumber)
        .maybeSingle();

      if (fetchError) {
        console.error('Error fetching existing user:', fetchError);
        throw fetchError;
      }

      let newStats;
      
      if (existingUser) {
        // Update existing user
        const newVisitCount = existingUser.visit_count + 1;
        const newChomaPoints = existingUser.choma_points + 10;
        const newBalanceKsh = existingUser.balance_ksh + 100; // 10 points = KSh 100
        
        const { data, error } = await supabase
          .from('visits')
          .update({
            visit_count: newVisitCount,
            choma_points: newChomaPoints,
            balance_ksh: newBalanceKsh,
            updated_at: new Date().toISOString()
          })
          .eq('phone', phoneNumber)
          .select()
          .single();
        
        if (error) throw error;
        newStats = data;
      } else {
        // Create new user
        const { data, error } = await supabase
          .from('visits')
          .insert({
            phone: phoneNumber,
            visit_count: 1,
            choma_points: 10,
            balance_ksh: 100
          })
          .select()
          .single();
        
        if (error) throw error;
        newStats = data;
      }

      if (newStats) {
        updateStatsFromPayload(newStats);
        
        // Update eatery visit count
        const selectedEateryData = eateries.find(e => e.name === selectedEatery);
        if (selectedEateryData) {
          await supabase
            .from('eateries')
            .update({ visit_count: selectedEateryData.visit_count + 1 })
            .eq('id', selectedEateryData.id);
        }

        // Check for milestone rewards
        if (newStats.visit_count % 5 === 0) {
          toast({
            title: "🎉 Poa! Free meal unlocked!",
            description: `Hongera, mtu wangu! You've earned a free meal at ${selectedEatery}! Keep vibing! ✨`,
          });
          
          // Add badge for milestone
          await supabase
            .from('user_badges')
            .insert({
              phone: phoneNumber,
              badge_name: "Choma Champion",
              badge_description: `Earned after ${newStats.visit_count} visits`
            });
        } else {
          toast({
            title: "Hongera! Visit recorded! 🔥",
            description: `+10 Choma Points earned at ${selectedEatery}. Balance: KSh ${newStats.balance_ksh}! Sawa!`,
          });
        }
      }
      
    } catch (error) {
      console.error('Error recording visit:', error);
      toast({
        title: "Oops! Something went wrong 😔",
        description: "Please try again, mtu wangu!",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch stats when phone number changes
  useEffect(() => {
    if (phoneNumber && validatePhoneNumber(phoneNumber)) {
      fetchUserStats(phoneNumber);
    } else if (phoneNumber === "") {
      // Reset stats when phone number is cleared
      setCurrentStats({
        chomaPoints: 0,
        balanceKsh: 0,
        visits: 0
      });
    }
  }, [phoneNumber]);

  return (
    <div className="min-h-screen bg-vibe-gradient relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-girlish-pink rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-girlish-coral rounded-full animate-float delay-300 opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-girlish-lavender rounded-full animate-float delay-500 opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-girlish-coral to-gold rounded-full flex items-center justify-center">
              <span className="text-white font-ubuntu font-bold text-xl">V</span>
            </div>
            <div>
              <span className="text-white font-ubuntu font-bold text-xl">VibeLoyalty</span>
              <p className="text-girlish-mint text-xs">Track & Earn! ✨</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/rewards" className="text-white hover:text-girlish-coral transition-colors font-poppins">Rewards</Link>
            <Link to="/analytics" className="text-white hover:text-girlish-mint transition-colors font-poppins">Analytics</Link>
            <button
              onClick={toggleMusic}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
            >
              {musicPlaying ? (
                <Volume2 className="w-5 h-5 text-girlish-coral" />
              ) : (
                <VolumeX className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <Sparkles className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                Track Your <span className="text-transparent bg-clip-text bg-girlish-gradient">Choma Visit</span>
              </h1>
              <Zap className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Enter your phone and earn 10 Choma Points instantly! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Sawa, mtu wangu! Every bite counts! 🔥✨
            </p>
          </div>

          {/* Real-time Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-gold mx-auto mb-2 animate-sparkle" />
                <p className="text-2xl font-bold text-white font-ubuntu">{currentStats.chomaPoints}</p>
                <p className="text-girlish-mint font-poppins text-sm">Choma Points</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <CheckCircle className="w-8 h-8 text-girlish-coral mx-auto mb-2 animate-pulse" />
                <p className="text-2xl font-bold text-white font-ubuntu">KSh {currentStats.balanceKsh}</p>
                <p className="text-girlish-coral font-poppins text-sm">Real Balance</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-girlish-mint mx-auto mb-2 animate-bounce" />
                <p className="text-2xl font-bold text-white font-ubuntu">{5 - (currentStats.visits % 5)}</p>
                <p className="text-girlish-lavender font-poppins text-sm">To Free Meal</p>
              </CardContent>
            </Card>
          </div>

          {/* Visit Form */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 animate-glow">
            <CardHeader>
              <CardTitle className="text-white font-ubuntu text-2xl text-center flex items-center justify-center space-x-2">
                <Music className="w-6 h-6 text-girlish-coral" />
                <span>Log Your Visit</span>
                <Sparkles className="w-6 h-6 text-gold" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2 font-poppins">
                    <Phone className="w-4 h-4 text-girlish-coral" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="0712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-girlish-coral focus:ring-girlish-coral"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium font-poppins">Select Eatery</label>
                  <Select value={selectedEatery} onValueChange={setSelectedEatery}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-girlish-mint">
                      <SelectValue placeholder="Choose your favorite spot..." />
                    </SelectTrigger>
                    <SelectContent className="bg-kenyan-black/90 backdrop-blur-md border-girlish-mint">
                      {eateries.map((eatery) => (
                        <SelectItem 
                          key={eatery.id} 
                          value={eatery.name}
                          className="text-white hover:bg-girlish-coral/20 focus:bg-girlish-coral/20"
                        >
                          <div className="flex justify-between items-center w-full">
                            <span>{eatery.name}</span>
                            <span className="text-girlish-mint text-xs ml-2">({eatery.visit_count} visits)</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-girlish-coral to-kenyan-red hover:from-kenyan-red hover:to-girlish-coral text-white py-4 text-lg font-semibold font-ubuntu animate-glow hover:animate-sparkle transition-all duration-300 shadow-lg"
                >
                  {isLoading ? "Recording Visit..." : "Earn 10 Choma Points! 🔥✨"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 font-ubuntu flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-gold" />
                <span>Quick Tips:</span>
              </h3>
              <ul className="space-y-2 text-white/90 font-poppins">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-girlish-coral rounded-full"></div>
                  <span>Earn 10 Choma Points per visit = KSh 100 value!</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-girlish-mint rounded-full"></div>
                  <span>Unlock free meals every 5 visits (50 points)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-girlish-lavender rounded-full"></div>
                  <span>Visit different spots to discover new flavors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Real-time balance updates - sawa, mtu wangu! ✨</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackVisits;
