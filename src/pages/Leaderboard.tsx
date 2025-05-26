
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Crown, Star, TrendingUp, Music, Volume2, VolumeX, Sparkles, Medal, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Leaderboard = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [topCustomers, setTopCustomers] = useState<any[]>([]);
  const [topEateries, setTopEateries] = useState<any[]>([]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const fetchLeaderboardData = async () => {
    try {
      // Fetch top customers
      const { data: customersData } = await supabase
        .from('visits')
        .select('*')
        .order('choma_points', { ascending: false })
        .limit(10);

      if (customersData) {
        const formattedCustomers = customersData.map((customer, index) => ({
          rank: index + 1,
          name: `Customer ${customer.phone.slice(-4)}`,
          phone: customer.phone,
          points: customer.choma_points,
          balance: customer.balance_ksh,
          visits: customer.visit_count
        }));
        setTopCustomers(formattedCustomers);
      }

      // Fetch top eateries
      const { data: eateriesData } = await supabase
        .from('eateries')
        .select('*')
        .order('visit_count', { ascending: false })
        .limit(10);

      if (eateriesData) {
        const formattedEateries = eateriesData.map((eatery, index) => ({
          rank: index + 1,
          name: eatery.name,
          location: eatery.location,
          visits: eatery.visit_count
        }));
        setTopEateries(formattedEateries);
      }
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-gold animate-sparkle" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400 animate-pulse" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600 animate-bounce" />;
      default:
        return <Star className="w-5 h-5 text-girlish-coral" />;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-gold/20 to-yellow-500/20 border-gold";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-amber-700/20 border-amber-600";
      default:
        return "bg-white/10 border-white/20";
    }
  };

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
              <p className="text-girlish-mint text-xs">Leaderboard 🏆</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/challenges" className="text-white hover:text-girlish-mint transition-colors font-poppins">Challenges</Link>
            <Link to="/profile" className="text-white hover:text-gold transition-colors font-poppins">Profile</Link>
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
              <Trophy className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                <span className="text-transparent bg-clip-text bg-girlish-gradient">Choma Champions</span>
              </h1>
              <Crown className="w-8 h-8 text-gold animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              See who's leading the choma game! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Hongera to our top performers, mtu wangu! 🎉✨
            </p>
          </div>

          {/* Leaderboard Tabs */}
          <Tabs defaultValue="customers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-md border border-white/20">
              <TabsTrigger value="customers" className="text-white data-[state=active]:bg-girlish-coral data-[state=active]:text-white font-ubuntu">
                Top Customers
              </TabsTrigger>
              <TabsTrigger value="eateries" className="text-white data-[state=active]:bg-girlish-mint data-[state=active]:text-kenyan-black font-ubuntu">
                Top Eateries
              </TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="mt-8">
              <Card className="backdrop-blur-md bg-white/10 border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                    <Star className="w-6 h-6 text-girlish-coral" />
                    <span>Top Choma Point Earners</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topCustomers.map((customer) => (
                      <div
                        key={customer.rank}
                        className={`flex items-center justify-between p-4 rounded-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 ${getRankStyle(customer.rank)}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getRankIcon(customer.rank)}
                            <span className="text-2xl font-bold text-white font-ubuntu">#{customer.rank}</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold font-ubuntu">{customer.name}</p>
                            <p className="text-girlish-mint text-sm font-poppins">{customer.visits} visits</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white font-ubuntu">{customer.points}</p>
                          <p className="text-girlish-coral text-sm font-poppins">Choma Points</p>
                          <Badge className="bg-gold text-kenyan-black mt-1 font-ubuntu">
                            KSh {customer.balance}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="eateries" className="mt-8">
              <Card className="backdrop-blur-md bg-white/10 border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-girlish-mint" />
                    <span>Most Popular Eateries</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topEateries.map((eatery) => (
                      <div
                        key={eatery.rank}
                        className={`flex items-center justify-between p-4 rounded-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 ${getRankStyle(eatery.rank)}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {getRankIcon(eatery.rank)}
                            <span className="text-2xl font-bold text-white font-ubuntu">#{eatery.rank}</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold font-ubuntu">{eatery.name}</p>
                            <p className="text-girlish-mint text-sm font-poppins">{eatery.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white font-ubuntu">{eatery.visits}</p>
                          <p className="text-girlish-coral text-sm font-poppins">Total Visits</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Achievement Showcase */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Crown className="w-16 h-16 text-gold mx-auto mb-4 animate-sparkle" />
                <p className="text-white font-ubuntu text-lg font-semibold">Choma King/Queen</p>
                <p className="text-girlish-mint font-poppins text-sm">Highest points this month</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-16 h-16 text-girlish-coral mx-auto mb-4 animate-pulse" />
                <p className="text-white font-ubuntu text-lg font-semibold">Rising Star</p>
                <p className="text-girlish-mint font-poppins text-sm">Fastest growing customer</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Sparkles className="w-16 h-16 text-girlish-lavender mx-auto mb-4 animate-bounce" />
                <p className="text-white font-ubuntu text-lg font-semibold">Explorer</p>
                <p className="text-girlish-mint font-poppins text-sm">Visited most eateries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
