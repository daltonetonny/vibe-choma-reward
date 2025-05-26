
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Calendar, Share2, Music, Volume2, VolumeX, Sparkles, User, Award, Target, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userStats, setUserStats] = useState({
    chomaPoints: 0,
    balanceKsh: 0,
    visits: 0
  });
  const [badges, setBadges] = useState<any[]>([]);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const { toast } = useToast();

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const fetchUserData = async (phone: string) => {
    if (!phone) return;
    
    try {
      // Fetch user stats
      const { data: statsData } = await supabase
        .from('visits')
        .select('*')
        .eq('phone', phone)
        .maybeSingle();
      
      if (statsData) {
        setUserStats({
          chomaPoints: statsData.choma_points || 0,
          balanceKsh: statsData.balance_ksh || 0,
          visits: statsData.visit_count || 0
        });
      }

      // Fetch user badges
      const { data: badgesData } = await supabase
        .from('user_badges')
        .select('*')
        .eq('phone', phone)
        .order('earned_at', { ascending: false });
      
      if (badgesData) {
        setBadges(badgesData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const shareReward = (platform: string) => {
    toast({
      title: "Shared! 📱",
      description: `Your Choma Points shared on ${platform}! Keep vibing, mtu wangu!`,
    });
  };

  useEffect(() => {
    if (phoneNumber) {
      fetchUserData(phoneNumber);
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
              <p className="text-girlish-mint text-xs">Your Profile ✨</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/rewards" className="text-white hover:text-girlish-mint transition-colors font-poppins">Rewards</Link>
            <Link to="/leaderboard" className="text-white hover:text-gold transition-colors font-poppins">Leaderboard</Link>
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <User className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                Your <span className="text-transparent bg-clip-text bg-girlish-gradient">Choma Profile</span>
              </h1>
              <Sparkles className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Track your journey, mtu wangu! 
            </p>
          </div>

          {/* Phone Input */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="max-w-md mx-auto">
                <label className="text-white font-medium block mb-2 font-poppins">
                  Enter Your Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="0712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-girlish-coral focus:ring-girlish-coral"
                />
              </div>
            </CardContent>
          </Card>

          {phoneNumber && (
            <>
              {/* Stats Overview */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Star className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
                    <p className="text-3xl font-bold text-white font-ubuntu">{userStats.chomaPoints}</p>
                    <p className="text-girlish-mint font-poppins">Choma Points</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-pulse" />
                    <p className="text-3xl font-bold text-white font-ubuntu">KSh {userStats.balanceKsh}</p>
                    <p className="text-girlish-coral font-poppins">Balance</p>
                  </CardContent>
                </Card>
                <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-girlish-mint mx-auto mb-4 animate-bounce" />
                    <p className="text-3xl font-bold text-white font-ubuntu">{userStats.visits}</p>
                    <p className="text-girlish-lavender font-poppins">Total Visits</p>
                  </CardContent>
                </Card>
              </div>

              {/* Badges Section */}
              <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                    <Award className="w-6 h-6 text-gold" />
                    <span>Your Badges</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {badges.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {badges.map((badge, index) => (
                        <div key={index} className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                          <Trophy className="w-8 h-8 text-gold mx-auto mb-2 animate-sparkle" />
                          <p className="text-white font-semibold font-ubuntu">{badge.badge_name}</p>
                          <p className="text-girlish-mint text-sm font-poppins">{badge.badge_description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Target className="w-16 h-16 text-white/50 mx-auto mb-4" />
                      <p className="text-white/70 font-poppins">No badges yet! Keep visiting to earn your first badge, mtu wangu!</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Social Sharing */}
              <Card className="backdrop-blur-md bg-white/10 border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                    <Share2 className="w-6 h-6 text-girlish-coral" />
                    <span>Share Your Success</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['WhatsApp', 'Instagram', 'Twitter', 'Facebook'].map((platform) => (
                      <Button
                        key={platform}
                        onClick={() => shareReward(platform)}
                        className="bg-gradient-to-r from-girlish-coral to-girlish-pink hover:from-girlish-pink hover:to-girlish-coral text-white font-ubuntu"
                      >
                        Share on {platform}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white font-poppins text-center">
                      "Just earned {userStats.chomaPoints} Choma Points worth KSh {userStats.balanceKsh} at my favorite eatery! 
                      Join VibeLoyalty and vibe na choma! 🔥✨ #ChomaPoints #VibeLoyalty"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
