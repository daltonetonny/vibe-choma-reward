
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Trophy, Calendar, Zap, Star, Music, Volume2, VolumeX, Sparkles, Gift, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Challenges = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [userProgress, setUserProgress] = useState({
    dailyVisits: 1,
    weeklyVisits: 3,
    streak: 2
  });
  const { toast } = useToast();

  const dailyChallenges = [
    {
      id: 1,
      title: "First Choma of the Day",
      description: "Visit any eatery today",
      reward: "5 Bonus Points",
      progress: 1,
      target: 1,
      completed: true,
      icon: Target
    },
    {
      id: 2,
      title: "Lunch Time Vibes",
      description: "Visit between 12PM - 2PM",
      reward: "10 Bonus Points",
      progress: 0,
      target: 1,
      completed: false,
      icon: Clock
    },
    {
      id: 3,
      title: "Try Something New",
      description: "Visit a new eatery",
      reward: "15 Bonus Points",
      progress: 0,
      target: 1,
      completed: false,
      icon: Sparkles
    }
  ];

  const weeklyChallenges = [
    {
      id: 4,
      title: "Choma Champion",
      description: "Visit 5 different eateries this week",
      reward: "50 Bonus Points + Badge",
      progress: 3,
      target: 5,
      completed: false,
      icon: Trophy
    },
    {
      id: 5,
      title: "Loyalty Legend",
      description: "Maintain a 7-day streak",
      reward: "100 Bonus Points + Special Badge",
      progress: 2,
      target: 7,
      completed: false,
      icon: Star
    }
  ];

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const claimReward = (challengeId: number, reward: string) => {
    toast({
      title: "Hongera! Reward Claimed! 🎉",
      description: `You've earned: ${reward}! Keep vibing, mtu wangu!`,
    });
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
              <p className="text-girlish-mint text-xs">Daily Challenges ✨</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/profile" className="text-white hover:text-girlish-mint transition-colors font-poppins">Profile</Link>
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
              <Target className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                Daily <span className="text-transparent bg-clip-text bg-girlish-gradient">Challenges</span>
              </h1>
              <Zap className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Complete challenges to earn bonus Choma Points! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Sawa, mtu wangu! Level up your choma game! 🔥✨
            </p>
          </div>

          {/* Current Streak */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8 animate-glow">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-4">
                <Star className="w-12 h-12 text-gold animate-sparkle" />
                <div>
                  <p className="text-3xl font-bold text-white font-ubuntu">{userProgress.streak} Days</p>
                  <p className="text-girlish-mint font-poppins">Current Streak</p>
                </div>
                <Star className="w-12 h-12 text-gold animate-sparkle" />
              </div>
            </CardContent>
          </Card>

          {/* Daily Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-ubuntu font-bold text-white mb-6 flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-girlish-coral" />
              <span>Today's Challenges</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dailyChallenges.map((challenge) => (
                <Card key={challenge.id} className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white font-ubuntu text-lg flex items-center space-x-2">
                      <challenge.icon className="w-6 h-6 text-girlish-coral" />
                      <span>{challenge.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 font-poppins">{challenge.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-girlish-mint text-sm font-poppins">Progress</span>
                        <span className="text-white text-sm font-ubuntu">{challenge.progress}/{challenge.target}</span>
                      </div>
                      <Progress 
                        value={(challenge.progress / challenge.target) * 100} 
                        className="h-2"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-gold text-kenyan-black font-ubuntu">
                        {challenge.reward}
                      </Badge>
                      {challenge.completed ? (
                        <Button
                          onClick={() => claimReward(challenge.id, challenge.reward)}
                          className="bg-gradient-to-r from-girlish-coral to-kenyan-red hover:from-kenyan-red hover:to-girlish-coral text-white font-ubuntu"
                        >
                          Claim! 🎉
                        </Button>
                      ) : (
                        <Button variant="outline" disabled className="border-white/20 text-white/50">
                          In Progress
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Weekly Challenges */}
          <div>
            <h2 className="text-3xl font-ubuntu font-bold text-white mb-6 flex items-center space-x-2">
              <Trophy className="w-8 h-8 text-gold" />
              <span>Weekly Challenges</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {weeklyChallenges.map((challenge) => (
                <Card key={challenge.id} className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white font-ubuntu text-xl flex items-center space-x-2">
                      <challenge.icon className="w-6 h-6 text-gold" />
                      <span>{challenge.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 font-poppins">{challenge.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-girlish-mint text-sm font-poppins">Progress</span>
                        <span className="text-white text-sm font-ubuntu">{challenge.progress}/{challenge.target}</span>
                      </div>
                      <Progress 
                        value={(challenge.progress / challenge.target) * 100} 
                        className="h-3"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge className="bg-gradient-to-r from-girlish-coral to-gold text-white font-ubuntu px-3 py-1">
                        {challenge.reward}
                      </Badge>
                      <Button variant="outline" className="border-girlish-mint text-girlish-mint hover:bg-girlish-mint hover:text-kenyan-black font-ubuntu">
                        {Math.round((challenge.progress / challenge.target) * 100)}% Complete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mt-12">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 font-ubuntu flex items-center space-x-2">
                <Gift className="w-5 h-5 text-girlish-coral" />
                <span>Challenge Tips:</span>
              </h3>
              <ul className="space-y-2 text-white/90 font-poppins">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-girlish-coral rounded-full"></div>
                  <span>Complete daily challenges for consistent bonus points!</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-girlish-mint rounded-full"></div>
                  <span>Weekly challenges offer bigger rewards and exclusive badges</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Maintain your streak for daily multiplier bonuses!</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
