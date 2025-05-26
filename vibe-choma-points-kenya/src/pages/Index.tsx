import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, BarChart3, Shield, Music, Volume2, VolumeX, Sparkles } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    // In a real app, this would control actual audio playback
    console.log(musicPlaying ? "Music paused" : "Playing Kenyan vibes! 🎵");
  };

  return (
    <div className="min-h-screen bg-vibe-gradient relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-girlish-pink rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-girlish-coral rounded-full animate-float delay-300 opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-girlish-lavender rounded-full animate-float delay-500 opacity-60"></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-girlish-mint rounded-full animate-float delay-700 opacity-60"></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-gold rounded-full animate-float delay-1000 opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-girlish-pink via-girlish-coral to-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-ubuntu font-bold text-xl">V</span>
            </div>
            <div>
              <span className="text-white font-ubuntu font-bold text-xl">VibeLoyalty</span>
              <p className="text-girlish-mint text-xs font-poppins">Vibe na Choma! ✨</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-mint transition-colors font-poppins">Track Visits</Link>
            <Link to="/rewards" className="text-white hover:text-girlish-coral transition-colors font-poppins">Rewards</Link>
            <Link to="/leaderboard" className="text-white hover:text-gold transition-colors font-poppins">Leaderboard</Link>
            <Link to="/challenges" className="text-white hover:text-girlish-lavender transition-colors font-poppins">Challenges</Link>
            <Link to="/social" className="text-white hover:text-girlish-mint transition-colors font-poppins">Social</Link>
            <Link to="/pitch" className="text-white hover:text-gold transition-colors font-poppins">Pitch</Link>
            
            {/* Music Toggle */}
            <button
              onClick={toggleMusic}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 animate-sparkle"
              title={musicPlaying ? "Pause Music" : "Play Kenyan Vibes"}
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

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-6 space-x-2">
              <Sparkles className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-5xl md:text-7xl font-ubuntu font-bold text-white">
                Vibe na <span className="text-transparent bg-clip-text bg-gradient-to-r from-girlish-coral via-girlish-pink to-gold animate-glow">Choma!</span>
              </h1>
              <Sparkles className="w-8 h-8 text-girlish-mint animate-sparkle delay-300" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto font-poppins">
              Earn Choma Points at your favorite Kenyan eateries - from sizzling nyama choma joints to cozy Swahili cafes! 
            </p>
            <p className="text-lg text-girlish-coral font-semibold mb-8 font-ubuntu">
              Sawa, mtu wangu! Every bite counts, every vibe matters! ✨🔥
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/track">
                <Button className="bg-gradient-to-r from-girlish-coral to-kenyan-red hover:from-kenyan-red hover:to-girlish-coral text-white px-8 py-4 text-lg font-semibold font-ubuntu animate-glow hover:animate-sparkle transition-all duration-300 shadow-lg">
                  Start Earning Points ✨
                </Button>
              </Link>
              <Link to="/pitch">
                <Button variant="outline" className="border-2 border-girlish-mint text-girlish-mint hover:bg-girlish-mint hover:text-kenyan-black px-8 py-4 text-lg font-semibold font-ubuntu backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-lg">
                  View Demo 🎯
                </Button>
              </Link>
            </div>

            {/* Music Player Info */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 max-w-md mx-auto border border-white/20">
              <div className="flex items-center justify-center space-x-3">
                <Music className="w-5 h-5 text-girlish-coral animate-pulse" />
                <span className="text-white font-poppins text-sm">
                  {musicPlaying ? "🎵 Kenyan Vibes Playing!" : "Click music icon to vibe!"}
                </span>
                <div className="w-2 h-2 bg-girlish-mint rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-ubuntu font-bold text-white text-center mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-girlish-gradient">VibeLoyalty?</span>
          </h2>
          <p className="text-center text-girlish-mint mb-16 font-poppins">
            Sawa, mtu wangu! Here's why we're the best loyalty platform in Kenya! 🇰🇪
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Earn Choma Points",
                description: "Get 10 points for every visit! That's KSh 100 value, mtu wangu! 💰",
                gradient: "from-girlish-pink to-girlish-coral",
                link: "/track"
              },
              {
                icon: Users,
                title: "Community Vibes",
                description: "Join thousands of Kenyan food lovers sharing the choma experience! 🤝",
                gradient: "from-girlish-coral to-girlish-lavender",
                link: "/social"
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track your eating habits and discover trending spots instantly! 📊",
                gradient: "from-girlish-lavender to-girlish-mint",
                link: "/analytics"
              },
              {
                icon: Shield,
                title: "Secure & Simple",
                description: "Just your phone number needed. No stress, pure vibes! 🔒",
                gradient: "from-girlish-mint to-gold",
                link: "/faq"
              }
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:animate-sparkle`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-ubuntu">{feature.title}</h3>
                    <p className="text-white/80 font-poppins text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-ubuntu font-bold text-white text-center mb-4">
            Explore <span className="text-transparent bg-clip-text bg-girlish-gradient">All Features</span>
          </h2>
          <p className="text-center text-girlish-mint mb-16 font-poppins">
            Discover everything VibeLoyalty has to offer! 🚀
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Track Visits", desc: "Log visits & earn points", link: "/track", icon: "📱", color: "girlish-coral" },
              { title: "View Rewards", desc: "See your earnings & balance", link: "/rewards", icon: "🎁", color: "girlish-mint" },
              { title: "Your Profile", desc: "Personal dashboard & stats", link: "/profile", icon: "👤", color: "girlish-pink" },
              { title: "Leaderboard", desc: "Top customers & eateries", link: "/leaderboard", icon: "🏆", color: "gold" },
              { title: "Daily Challenges", desc: "Complete tasks for bonuses", link: "/challenges", icon: "🎯", color: "girlish-lavender" },
              { title: "Social Hub", desc: "Share your choma journey", link: "/social", icon: "💬", color: "girlish-coral" },
              { title: "Analytics", desc: "Deep insights & trends", link: "/analytics", icon: "📊", color: "girlish-mint" },
              { title: "FAQ & Help", desc: "Get answers & support", link: "/faq", icon: "❓", color: "girlish-pink" },
              { title: "Pitch Deck", desc: "See our vision & demo", link: "/pitch", icon: "🚀", color: "gold" }
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white font-ubuntu">{feature.title}</h3>
                        <p className="text-white/70 text-sm font-poppins">{feature.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-4">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-girlish-coral to-gold">Choma Journey?</span>
          </h2>
          <p className="text-xl text-white/90 mb-2 font-poppins">
            Join thousands of Kenyans already earning rewards at their favorite eateries!
          </p>
          <p className="text-girlish-mint font-ubuntu font-semibold mb-8">
            Hongera! Let's vibe together, mtu wangu! 🎉
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/track">
              <Button className="bg-gradient-to-r from-kenyan-green to-girlish-mint hover:from-girlish-mint hover:to-kenyan-green text-kenyan-black px-8 py-4 text-lg font-semibold font-ubuntu animate-glow transition-all duration-300 shadow-lg">
                Track Your First Visit 🚀
              </Button>
            </Link>
            <Link to="/rewards">
              <Button variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-kenyan-black px-8 py-4 text-lg font-semibold font-ubuntu backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-lg">
                See Rewards 🏆
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kenyan-black/80 backdrop-blur-md px-6 py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-girlish-pink to-gold rounded-full flex items-center justify-center">
                <span className="text-white font-ubuntu font-bold">V</span>
              </div>
              <div>
                <span className="text-white font-ubuntu font-bold">VibeLoyalty</span>
                <p className="text-girlish-mint text-xs">Made with ❤️ in Kenya</p>
              </div>
            </div>
            <div className="text-white/60 text-center md:text-right font-poppins">
              <p>© 2024 VibeLoyalty. Proudly Kenyan! 🇰🇪</p>
              <p className="text-girlish-coral font-ubuntu">Vibe na Choma, Mtu Wangu! ✨</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
