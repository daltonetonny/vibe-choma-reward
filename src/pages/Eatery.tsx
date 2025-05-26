
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, TrendingUp, Clock, Star, MapPin, Calendar, Volume2, VolumeX, Sparkles, Store } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Eatery = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const { toast } = useToast();

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  // Mock eatery data
  const eateryStats = {
    name: "Mama Njeri's Choma Palace",
    location: "Westlands, Nairobi",
    totalCustomers: 248,
    todayVisits: 32,
    weeklyRevenue: 45600,
    averageRating: 4.8,
    peakHours: "12PM - 2PM, 6PM - 9PM"
  };

  const recentCustomers = [
    { name: "John Mwangi", visits: 15, lastVisit: "Today", points: 150 },
    { name: "Grace Wanjiku", visits: 22, lastVisit: "Yesterday", points: 220 },
    { name: "Peter Kimani", visits: 8, lastVisit: "2 days ago", points: 80 },
    { name: "Faith Akinyi", visits: 31, lastVisit: "Today", points: 310 }
  ];

  const weeklyTrends = [
    { day: "Mon", visits: 28 },
    { day: "Tue", visits: 35 },
    { day: "Wed", visits: 42 },
    { day: "Thu", visits: 38 },
    { day: "Fri", visits: 55 },
    { day: "Sat", visits: 67 },
    { day: "Sun", visits: 45 }
  ];

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
              <p className="text-girlish-mint text-xs">Eatery Dashboard 🍽️</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/analytics" className="text-white hover:text-girlish-mint transition-colors font-poppins">Analytics</Link>
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <Store className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                Eatery <span className="text-transparent bg-clip-text bg-girlish-gradient">Dashboard</span>
              </h1>
              <Sparkles className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              {eateryStats.name} - Your business insights, mtu wangu! 
            </p>
          </div>

          {/* Eatery Info Card */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-ubuntu font-bold text-white mb-2">{eateryStats.name}</h2>
                  <div className="flex items-center space-x-2 text-girlish-mint">
                    <MapPin className="w-4 h-4" />
                    <span className="font-poppins">{eateryStats.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-gold animate-sparkle" />
                  <span className="text-2xl font-bold text-white font-ubuntu">{eateryStats.averageRating}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-pulse" />
                <p className="text-3xl font-bold text-white font-ubuntu">{eateryStats.totalCustomers}</p>
                <p className="text-girlish-mint font-poppins">Total Customers</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-bounce" />
                <p className="text-3xl font-bold text-white font-ubuntu">{eateryStats.todayVisits}</p>
                <p className="text-girlish-lavender font-poppins">Today's Visits</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
                <p className="text-3xl font-bold text-white font-ubuntu">KSh {eateryStats.weeklyRevenue.toLocaleString()}</p>
                <p className="text-girlish-mint font-poppins">Weekly Revenue</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-girlish-lavender mx-auto mb-4 animate-pulse" />
                <p className="text-lg font-bold text-white font-ubuntu">{eateryStats.peakHours}</p>
                <p className="text-girlish-coral font-poppins">Peak Hours</p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Trends Chart */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-girlish-coral" />
                <span>Weekly Visit Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-48 space-x-2">
                {weeklyTrends.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-gradient-to-t from-girlish-coral to-girlish-pink rounded-t transition-all duration-500 hover:from-girlish-pink hover:to-gold"
                      style={{ height: `${(item.visits / 70) * 100}%`, minHeight: '20px' }}
                    ></div>
                    <p className="text-white font-poppins text-sm mt-2">{item.day}</p>
                    <p className="text-girlish-mint font-ubuntu text-xs">{item.visits}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Customers */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20">
            <CardHeader>
              <CardTitle className="text-white font-ubuntu text-2xl flex items-center space-x-2">
                <Users className="w-6 h-6 text-gold" />
                <span>Recent Customers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-girlish-coral to-girlish-pink rounded-full flex items-center justify-center">
                        <span className="text-white font-ubuntu font-bold">{customer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-ubuntu font-semibold">{customer.name}</p>
                        <p className="text-girlish-mint text-sm font-poppins">{customer.visits} visits • Last: {customer.lastVisit}</p>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-gold to-girlish-coral text-white font-ubuntu">
                      {customer.points} points
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Eatery;
