
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Share2, Heart, MessageCircle, Trophy, Star, Music, Volume2, VolumeX, Sparkles, Users, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Social = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const socialPosts = [
    {
      id: 1,
      user: "Wanjiku K.",
      avatar: "WK",
      time: "2 hours ago",
      content: "Just earned my 5th free meal at Mama Njeri's! The nyama choma was incredible! 🔥 #ChomaPoints #VibeLoyalty",
      points: 50,
      location: "Mama Njeri's Nyama Choma",
      likes: 23,
      comments: 8,
      badge: "Choma Champion"
    },
    {
      id: 2,
      user: "David M.",
      avatar: "DM",
      time: "4 hours ago",
      content: "3-day streak at different eateries! Loving the variety and earning points while exploring Nairobi's food scene! ✨",
      points: 30,
      location: "Multiple Locations",
      likes: 15,
      comments: 5,
      badge: "Explorer"
    },
    {
      id: 3,
      user: "Grace N.",
      avatar: "GN",
      time: "6 hours ago",
      content: "First time at Coastal Pilau Palace and wow! The pilau was amazing. Already planning my next visit! 🍛",
      points: 10,
      location: "Coastal Pilau Palace",
      likes: 31,
      comments: 12,
      badge: null
    },
    {
      id: 4,
      user: "James O.",
      avatar: "JO",
      time: "1 day ago",
      content: "Hit 100 Choma Points today! KSh 1000 in rewards earned just by eating at my favorite spots. Sawa, mtu wangu! 🎉",
      points: 100,
      location: "VibeLoyalty Network",
      likes: 45,
      comments: 18,
      badge: "Loyalty Legend"
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
    
    toast({
      title: "Post liked! ❤️",
      description: "Show some love for your fellow choma enthusiasts!",
    });
  };

  const sharePost = (postId: number) => {
    toast({
      title: "Post shared! 📱",
      description: "Spread the choma vibes, mtu wangu!",
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
              <p className="text-girlish-mint text-xs">Social Hub 💬</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/leaderboard" className="text-white hover:text-girlish-mint transition-colors font-poppins">Leaderboard</Link>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <Users className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                <span className="text-transparent bg-clip-text bg-girlish-gradient">Choma Community</span>
              </h1>
              <Share2 className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Share your choma journey and connect with fellow food lovers! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Vibe together, mtu wangu! 🔥✨
            </p>
          </div>

          {/* Create Post Card */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-girlish-coral text-white font-ubuntu">You</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <p className="text-white/70 font-poppins">Share your choma experience...</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-girlish-mint text-girlish-mint hover:bg-girlish-mint hover:text-kenyan-black font-ubuntu">
                    <Camera className="w-4 h-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="outline" className="border-girlish-coral text-girlish-coral hover:bg-girlish-coral hover:text-white font-ubuntu">
                    <Star className="w-4 h-4 mr-2" />
                    Points
                  </Button>
                </div>
                <Button className="bg-gradient-to-r from-girlish-coral to-kenyan-red hover:from-kenyan-red hover:to-girlish-coral text-white font-ubuntu">
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Feed */}
          <div className="space-y-6">
            {socialPosts.map((post) => (
              <Card key={post.id} className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-girlish-coral text-white font-ubuntu font-bold">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-white font-semibold font-ubuntu">{post.user}</p>
                          {post.badge && (
                            <Badge className="bg-gold text-kenyan-black text-xs font-ubuntu">
                              {post.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-girlish-mint text-sm font-poppins">{post.time} • {post.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gold font-bold font-ubuntu">+{post.points}</p>
                      <p className="text-girlish-mint text-xs font-poppins">Points</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-white font-poppins mb-4 leading-relaxed">{post.content}</p>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          likedPosts.includes(post.id) 
                            ? 'text-girlish-coral' 
                            : 'text-white/70 hover:text-girlish-coral'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        <span className="font-poppins">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-white/70 hover:text-girlish-mint transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-poppins">{post.comments}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => sharePost(post.id)}
                      className="flex items-center space-x-2 text-white/70 hover:text-gold transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span className="font-poppins">Share</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-pulse" />
                <p className="text-2xl font-bold text-white font-ubuntu">2,547</p>
                <p className="text-girlish-mint font-poppins">Active Members</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Share2 className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
                <p className="text-2xl font-bold text-white font-ubuntu">1,834</p>
                <p className="text-girlish-mint font-poppins">Posts Shared</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-center">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 text-girlish-lavender mx-auto mb-4 animate-bounce" />
                <p className="text-2xl font-bold text-white font-ubuntu">456</p>
                <p className="text-girlish-mint font-poppins">Badges Earned</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
