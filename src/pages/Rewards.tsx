import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Crown, Flame, Award } from "lucide-react";

const Rewards = () => {
  const [points, setPoints] = useState(85);
  const [level, setLevel] = useState("Choma Beginner");
  const [badges, setBadges] = useState([
    { id: 1, name: "First Bite", description: "Your first visit!", icon: Star, earned: true },
    { id: 2, name: "Nyama Lover", description: "5 nyama choma visits", icon: Flame, earned: true },
    { id: 3, name: "Explorer", description: "Visit 3 different eateries", icon: Award, earned: true },
    { id: 4, name: "Choma King", description: "Reach 100 points", icon: Crown, earned: false },
  ]);

  const leaderboard = [
    { rank: 1, name: "Juma K.", points: 250, avatar: "👑" },
    { rank: 2, name: "Amina M.", points: 180, avatar: "🔥" },
    { rank: 3, name: "Peter N.", points: 165, avatar: "⭐" },
    { rank: 4, name: "Grace W.", points: 140, avatar: "🏆" },
    { rank: 5, name: "You!", points: points, avatar: "🚀" },
  ];

  const rewards = [
    { 
      id: 1, 
      title: "Free Nyama Choma Meal", 
      points: 50, 
      description: "Full plate of grilled meat at any participating joint",
      available: points >= 50 
    },
    { 
      id: 2, 
      title: "Ugali & Sukuma Special", 
      points: 30, 
      description: "Traditional ugali with sukuma wiki combo",
      available: points >= 30 
    },
    { 
      id: 3, 
      title: "Pilau & Kachumbari", 
      points: 40, 
      description: "Coastal pilau with fresh kachumbari salad",
      available: points >= 40 
    },
    { 
      id: 4, 
      title: "Free Drink", 
      points: 20, 
      description: "Cold soda or fresh juice of your choice",
      available: points >= 20 
    },
  ];

  const progressToNext = ((points % 100) / 100) * 100;

  useEffect(() => {
    if (points >= 100) {
      setLevel("Choma Master");
    } else if (points >= 50) {
      setLevel("Choma Regular");
    }
  }, [points]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-kenyan-black via-kenyan-green to-kenyan-red">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-kenyan-red to-kenyan-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-white font-ubuntu font-bold text-xl">VibeLoyalty</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/track" className="text-white hover:text-kenyan-green transition-colors">Track Visits</Link>
            <Link to="/analytics" className="text-white hover:text-kenyan-green transition-colors">Analytics</Link>
          </div>
        </div>
      </nav>

      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white mb-4">
              Your <span className="text-kenyan-green">Choma Rewards</span>
            </h1>
            <p className="text-xl text-white/90">
              Hongera! You're crushing it, mtu wangu! 🔥
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-kenyan-green mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">{points}</p>
                <p className="text-white/80">Choma Points</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 text-kenyan-red mx-auto mb-4" />
                <p className="text-xl font-bold text-white">{level}</p>
                <p className="text-white/80">Current Level</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">{badges.filter(b => b.earned).length}</p>
                <p className="text-white/80">Badges Earned</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 text-center">
              <CardContent className="p-6">
                <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">5th</p>
                <p className="text-white/80">Leaderboard</p>
              </CardContent>
            </Card>
          </div>

          {/* Progress to Next Level */}
          <Card className="glass-effect border-white/20 mb-12">
            <CardHeader>
              <CardTitle className="text-white font-ubuntu text-xl">Progress to Choma Master</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progressToNext} className="h-3" />
                <p className="text-white/80">{100 - (points % 100)} more points to reach next level!</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Available Rewards */}
            <div>
              <h2 className="text-2xl font-ubuntu font-bold text-white mb-6">Available Rewards</h2>
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <Card key={reward.id} className={`glass-effect border-white/20 ${reward.available ? 'choma-glow' : 'opacity-50'}`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-white">{reward.title}</h3>
                        <Badge 
                          variant={reward.available ? "default" : "secondary"}
                          className={reward.available ? "bg-kenyan-green" : "bg-gray-600"}
                        >
                          {reward.points} pts
                        </Badge>
                      </div>
                      <p className="text-white/80 mb-4">{reward.description}</p>
                      {reward.available ? (
                        <button className="w-full bg-kenyan-red hover:bg-red-700 text-white py-2 px-4 rounded font-semibold">
                          Redeem Now! 🎉
                        </button>
                      ) : (
                        <p className="text-white/60">Need {reward.points - points} more points</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Badges & Leaderboard */}
            <div className="space-y-8">
              {/* Badges */}
              <div>
                <h2 className="text-2xl font-ubuntu font-bold text-white mb-6">Your Badges</h2>
                <div className="grid grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <Card key={badge.id} className={`glass-effect border-white/20 ${badge.earned ? 'choma-glow' : 'opacity-50'}`}>
                      <CardContent className="p-4 text-center">
                        <badge.icon className={`w-8 h-8 mx-auto mb-2 ${badge.earned ? 'text-kenyan-green' : 'text-gray-400'}`} />
                        <h3 className="font-semibold text-white text-sm">{badge.name}</h3>
                        <p className="text-white/70 text-xs">{badge.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div>
                <h2 className="text-2xl font-ubuntu font-bold text-white mb-6">Choma Champions</h2>
                <Card className="glass-effect border-white/20">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {leaderboard.map((player) => (
                        <div key={player.rank} className={`flex items-center justify-between p-3 rounded ${player.name === 'You!' ? 'bg-kenyan-green/20' : ''}`}>
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{player.avatar}</span>
                            <div>
                              <p className="text-white font-medium">{player.name}</p>
                              <p className="text-white/70 text-sm">#{player.rank}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-kenyan-green font-bold">{player.points}</p>
                            <p className="text-white/70 text-sm">points</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
