
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Star, Phone, Gift, Trophy, Music, Volume2, VolumeX, Sparkles, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const faqs = [
    {
      id: "1",
      question: "What are Choma Points and how do I earn them?",
      answer: "Choma Points are our loyalty currency! Earn 10 points for every visit to a partner eatery. Just enter your phone number when you arrive. Sawa, mtu wangu - it's that simple! 🔥"
    },
    {
      id: "2", 
      question: "How much are my Choma Points worth?",
      answer: "Each Choma Point equals KSh 10! So 10 points = KSh 100, 50 points = KSh 500, and so on. Your balance grows with every visit - vibe na choma! ✨"
    },
    {
      id: "3",
      question: "When do I get free meals?",
      answer: "Hongera! You unlock a free meal every 5 visits (50 Choma Points). We'll notify you with confetti and celebration sounds. Keep vibing, the rewards keep coming! 🎉"
    },
    {
      id: "4",
      question: "Which eateries are part of VibeLoyalty?",
      answer: "We partner with the best spots in Kenya - from nyama choma joints in Westlands to Swahili cafes in Lamu! Check our eatery list in the app. More joining every week, mtu wangu! 🍛"
    },
    {
      id: "5",
      question: "Do I need to create an account?",
      answer: "No stress! Just your phone number is needed. We keep it simple - track visits, earn points, get rewards. No complicated signup, sawa! 📱"
    },
    {
      id: "6",
      question: "How do I redeem my rewards?",
      answer: "Show your phone number and point balance to any partner eatery. They'll verify in real-time and apply your reward. Easy as ugali and sukuma wiki! 🥬"
    },
    {
      id: "7",
      question: "What are badges and challenges?",
      answer: "Badges are special achievements for milestones (like 'Choma Champion' for 5 visits). Challenges give bonus points for specific tasks. Gamification makes eating more fun, mtu wangu! 🏆"
    },
    {
      id: "8",
      question: "Can I share my achievements?",
      answer: "Absolutely! Share your Choma Points, badges, and milestones on social media. Spread the vibe and invite friends to join the community! 📱✨"
    },
    {
      id: "9",
      question: "Is my data safe?",
      answer: "Your privacy is our priority! We only store your phone number and visit data. No personal info shared. Secure as a Maasai warrior's spear! 🛡️"
    },
    {
      id: "10",
      question: "How do I contact support?",
      answer: "Having issues? Use our in-app chat, visit our social pages, or find us at partner eateries. We're here to help, sawa mtu wangu! 💬"
    }
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
              <p className="text-girlish-mint text-xs">FAQ & Help ❓</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/track" className="text-white hover:text-girlish-coral transition-colors font-poppins">Track</Link>
            <Link to="/social" className="text-white hover:text-girlish-mint transition-colors font-poppins">Social</Link>
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
              <HelpCircle className="w-8 h-8 text-gold animate-sparkle" />
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white">
                <span className="text-transparent bg-clip-text bg-girlish-gradient">Frequently Asked</span> Questions
              </h1>
              <MessageCircle className="w-8 h-8 text-girlish-coral animate-pulse" />
            </div>
            <p className="text-xl text-white/90 font-poppins">
              Got questions? We've got answers! 
            </p>
            <p className="text-girlish-mint font-ubuntu font-semibold">
              Everything you need to know about VibeLoyalty, mtu wangu! 💡✨
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20 mb-8">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-white/20 rounded-lg px-4 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-white font-ubuntu text-lg hover:text-girlish-coral transition-colors hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/90 font-poppins leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Quick Help Icons */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-gold mx-auto mb-4 animate-sparkle" />
                <p className="text-white font-ubuntu font-semibold">Earning Points</p>
                <p className="text-girlish-mint text-sm font-poppins">Learn how to earn</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-girlish-coral mx-auto mb-4 animate-pulse" />
                <p className="text-white font-ubuntu font-semibold">Redeeming Rewards</p>
                <p className="text-girlish-mint text-sm font-poppins">Use your points</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-girlish-mint mx-auto mb-4 animate-bounce" />
                <p className="text-white font-ubuntu font-semibold">Account Setup</p>
                <p className="text-girlish-mint text-sm font-poppins">Getting started</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 text-girlish-lavender mx-auto mb-4 animate-sparkle" />
                <p className="text-white font-ubuntu font-semibold">Badges & Challenges</p>
                <p className="text-girlish-mint text-sm font-poppins">Unlock achievements</p>
              </CardContent>
            </Card>
          </div>

          {/* Still Need Help */}
          <Card className="backdrop-blur-md bg-white/10 border border-white/20">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 text-girlish-coral mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-ubuntu font-bold text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-white/90 font-poppins mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our friendly support team is here to help! 
                Reach out through any of these channels and we'll get back to you faster than you can say "choma"!
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <h4 className="text-white font-ubuntu font-semibold mb-2">Live Chat</h4>
                  <p className="text-girlish-mint text-sm font-poppins">Available 24/7 in-app</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <h4 className="text-white font-ubuntu font-semibold mb-2">WhatsApp</h4>
                  <p className="text-girlish-mint text-sm font-poppins">+254 700 123 456</p>
                </div>
                <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                  <h4 className="text-white font-ubuntu font-semibold mb-2">Social Media</h4>
                  <p className="text-girlish-mint text-sm font-poppins">@VibeLoyalty on all platforms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
