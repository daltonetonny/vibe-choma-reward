
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Music, Volume2, VolumeX, Star, Trophy, Gift, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EasterEgg = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const { toast } = useToast();

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const startDancingUgali = () => {
    setAnimationActive(true);
    setConfettiActive(true);
    
    toast({
      title: "🎉 Easter Egg Found!",
      description: "You discovered the dancing ugali! Bonus 25 Choma Points earned, mtu wangu!",
    });

    // Reset animation after 5 seconds
    setTimeout(() => {
      setAnimationActive(false);
      setConfettiActive(false);
    }, 5000);
  };

  const unlockSecret = () => {
    setSecretUnlocked(true);
    toast({
      title: "🔓 Secret Unlocked!",
      description: "You found the ultimate Easter egg! Special VIP badge earned!",
    });
  };

  useEffect(() => {
    // Add keyboard listener for secret codes
    const handleKeyPress = (event: KeyboardEvent) => {
      const sequence = event.key.toLowerCase();
      if (sequence === 'c' || sequence === 'h' || sequence === 'o' || sequence === 'm' || sequence === 'a') {
        // Simple trigger for demo - in real app would track full sequence
        if (Math.random() > 0.7) {
          startDancingUgali();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-vibe-gradient relative overflow-hidden">
      {/* Confetti Effect */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                ['bg-gold', 'bg-girlish-coral', 'bg-girlish-mint', 'bg-girlish-pink', 'bg-girlish-lavender'][
                  Math.floor(Math.random() * 5)
                ]
              }`} />
            </div>
          ))}
        </div>
      )}

      {/* Enhanced floating particles */}
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
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-girlish-coral to-gold rounded-full flex items-center justify-center animate-sparkle">
              <span className="text-white font-ubuntu font-bold text-xl">V</span>
            </div>
            <div>
              <span className="text-white font-ubuntu font-bold text-xl">VibeLoyalty</span>
              <p className="text-girlish-mint text-xs">Easter Egg! 🥚✨</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/social" className="text-white hover:text-girlish-mint transition-colors font-poppins">Social</Link>
            <Link to="/faq" className="text-white hover:text-gold transition-colors font-poppins">FAQ</Link>
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
              <Sparkles className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                Secret <span className="text-transparent bg-clip-text bg-girlish-gradient">Easter Egg!</span>
              </h1>
              <Gift className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Hongera! You found the hidden choma treasure! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Welcome to the secret ugali dance party, mtu wangu! 🎉🕺
            </p>
          </div>

          {/* Dancing Ugali Center Stage */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8 animate-glow">
            <CardContent className="p-12 text-center">
              <div className="relative">
                {/* Ugali Bowl - CSS Art */}
                <div className={`mx-auto transition-all duration-1000 ${
                  animationActive ? 'animate-bounce' : 'animate-pulse'
                }`}>
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Bowl */}
                    <div className="w-32 h-20 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full border-4 border-amber-800 absolute bottom-0"></div>
                    {/* Ugali */}
                    <div className={`w-28 h-28 bg-gradient-to-br from-white to-gray-100 rounded-full border-2 border-gray-300 absolute top-0 left-2 transition-transform duration-300 ${
                      animationActive ? 'animate-spin' : ''
                    }`}>
                      {/* Ugali texture */}
                      <div className="w-4 h-4 bg-gray-200 rounded-full absolute top-4 left-6 opacity-60"></div>
                      <div className="w-3 h-3 bg-gray-200 rounded-full absolute top-8 right-8 opacity-60"></div>
                      <div className="w-2 h-2 bg-gray-200 rounded-full absolute bottom-6 left-10 opacity-60"></div>
                      
                      {/* Dancing arms (when active) */}
                      {animationActive && (
                        <>
                          <div className="absolute -left-8 top-6 w-2 h-8 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="absolute -right-8 top-6 w-2 h-8 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                        </>
                      )}
                    </div>
                    
                    {/* Dancing sparkles */}
                    {animationActive && (
                      <>
                        <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-gold animate-sparkle" />
                        <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-girlish-coral animate-sparkle" style={{animationDelay: '0.5s'}} />
                        <Star className="absolute -bottom-2 -left-6 w-5 h-5 text-girlish-mint animate-pulse" />
                        <Star className="absolute -bottom-2 -right-6 w-5 h-5 text-girlish-lavender animate-pulse" style={{animationDelay: '0.7s'}} />
                      </>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl font-ubuntu font-bold text-white mb-4">
                  🕺 Dancing Ugali Disco! 🕺
                </h2>
                <p className="text-girlish-mint font-poppins mb-6 max-w-md mx-auto">
                  This magical ugali has been infused with the power of Kenyan music and choma vibes! 
                  Watch it dance to the rhythm of your heart, mtu wangu!
                </p>

                <div className="flex justify-center space-x-4">
                  <Button
                    onClick={startDancingUgali}
                    className="bg-gradient-to-r from-girlish-coral to-kenyan-red hover:from-kenyan-red hover:to-girlish-coral text-white font-ubuntu animate-glow"
                  >
                    Make Ugali Dance! 🕺
                  </Button>
                  {!secretUnlocked && (
                    <Button
                      onClick={unlockSecret}
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-kenyan-black font-ubuntu"
                    >
                      Unlock Secret 🔓
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Easter Egg Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
                <p className="text-white font-ubuntu font-semibold">Easter Egg Hunter</p>
                <p className="text-girlish-mint text-sm font-poppins">Found the secret page!</p>
                <div className="mt-3">
                  <span className="text-gold font-ubuntu text-lg">+25 Points</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-pulse" />
                <p className="text-white font-ubuntu font-semibold">Dance Master</p>
                <p className="text-girlish-mint text-sm font-poppins">Made ugali dance!</p>
                <div className="mt-3">
                  <span className="text-girlish-coral font-ubuntu text-lg">Special Badge</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`backdrop-blur-md border transition-all duration-300 ${
              secretUnlocked 
                ? 'bg-gold/20 border-gold hover:bg-gold/30' 
                : 'bg-white/10 border-white/20 hover:bg-white/15'
            }`}>
              <CardContent className="p-6 text-center">
                <Heart className={`w-12 h-12 mx-auto mb-4 ${
                  secretUnlocked ? 'text-gold animate-sparkle' : 'text-white/50'
                }`} />
                <p className="text-white font-ubuntu font-semibold">VIP Explorer</p>
                <p className="text-girlish-mint text-sm font-poppins">
                  {secretUnlocked ? 'Secret unlocked!' : 'Hidden achievement'}
                </p>
                <div className="mt-3">
                  <span className={`font-ubuntu text-lg ${
                    secretUnlocked ? 'text-gold' : 'text-white/30'
                  }`}>
                    {secretUnlocked ? 'VIP Status' : '???'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secret Instructions */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20">
            <CardContent className="p-8 text-center">
              <Music className="w-16 h-16 text-girlish-coral mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-ubuntu font-bold text-white mb-4">
                More Easter Eggs?
              </h3>
              <p className="text-white/90 font-poppins mb-6 max-w-2xl mx-auto">
                This is just the beginning, mtu wangu! VibeLoyalty is full of hidden surprises. 
                Try typing secret words, exploring different pages, or completing special challenges 
                to unlock more amazing rewards and animations!
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <p className="text-girlish-mint font-ubuntu font-semibold">Secret Words</p>
                  <p className="text-white text-sm font-poppins">Try typing "choma" or "ugali"</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <p className="text-girlish-coral font-ubuntu font-semibold">Hidden Features</p>
                  <p className="text-white text-sm font-poppins">Explore every corner!</p>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-girlish-mint to-kenyan-green hover:from-kenyan-green hover:to-girlish-mint text-kenyan-black font-ubuntu">
                    Back to Adventure! 🚀
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
