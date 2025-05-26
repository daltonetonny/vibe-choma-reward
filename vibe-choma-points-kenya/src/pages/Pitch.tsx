
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Star, TrendingUp, Users, DollarSign } from "lucide-react";

const Pitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "The Problem",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
            Kenyan Eateries Are <span className="text-kenyan-red">Struggling</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl text-kenyan-green font-semibold">Customer Challenges:</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>• No rewards for loyalty to favorite spots</li>
                <li>• Hard to discover new authentic eateries</li>
                <li>• Limited incentives for repeat visits</li>
                <li>• Missing sense of community</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-kenyan-green font-semibold">Business Challenges:</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>• Low customer retention rates</li>
                <li>• Limited customer data insights</li>
                <li>• Competing with chain restaurants</li>
                <li>• No digital loyalty programs</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Our Solution",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
            VibeLoyalty: <span className="text-kenyan-green">Choma Points</span> Revolution
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-effect border-kenyan-green/50">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-kenyan-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Simple Rewards</h3>
                <p className="text-white/80">Earn 10 points per visit, unlock free meals every 5 visits</p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-kenyan-green/50">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-kenyan-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
                <p className="text-white/80">Connect food lovers, share experiences, build loyalty</p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-kenyan-green/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Analytics</h3>
                <p className="text-white/80">Real-time insights for customers and businesses</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/track">
              <Button className="bg-kenyan-red hover:bg-red-700 text-white px-8 py-4 text-xl font-semibold animate-glow">
                <Play className="w-6 h-6 mr-2" />
                Try Live Demo
              </Button>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Market Opportunity",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
            Massive <span className="text-kenyan-green">Kenyan Market</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="glass-effect border-kenyan-red/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-kenyan-red mb-2">54M+</h3>
                  <p className="text-white">Kenyan Population</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-kenyan-green/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-kenyan-green mb-2">80%+</h3>
                  <p className="text-white">Mobile Phone Penetration</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="glass-effect border-yellow-400/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-2">$2.1B</h3>
                  <p className="text-white">Food Service Market</p>
                </CardContent>
              </Card>
              <Card className="glass-effect border-purple-400/50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">50K+</h3>
                  <p className="text-white">Local Eateries</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl text-white/90">
              Perfect timing as Kenya embraces digital payments and loyalty programs!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Business Model",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
            <span className="text-kenyan-green">Sustainable</span> Revenue Streams
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="glass-effect border-kenyan-green/50">
                <CardHeader>
                  <CardTitle className="text-kenyan-green flex items-center">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Commission Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white">
                    <li>• 5% commission on redeemed rewards</li>
                    <li>• Volume discounts for large eateries</li>
                    <li>• Performance-based pricing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="glass-effect border-kenyan-red/50">
                <CardHeader>
                  <CardTitle className="text-kenyan-red flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Premium Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-white">
                    <li>• Advanced analytics dashboard</li>
                    <li>• Marketing campaign tools</li>
                    <li>• Custom branding options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl text-kenyan-green font-semibold">Projected Revenue (Year 1):</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-white text-lg">
                  <span>Commission Revenue:</span>
                  <span className="text-kenyan-green font-bold">$180K</span>
                </div>
                <div className="flex justify-between text-white text-lg">
                  <span>Premium Subscriptions:</span>
                  <span className="text-kenyan-green font-bold">$72K</span>
                </div>
                <div className="flex justify-between text-white text-lg border-t border-white/20 pt-4">
                  <span className="font-semibold">Total Revenue:</span>
                  <span className="text-kenyan-red font-bold text-xl">$252K</span>
                </div>
              </div>
              <Badge className="bg-kenyan-green text-white">
                Break-even by Month 8
              </Badge>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Call to Action",
      content: (
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-ubuntu font-bold text-white mb-6">
            Ready to <span className="text-kenyan-green">Vibe na Choma?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            Join the revolution in Kenyan food loyalty programs!
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-effect border-kenyan-red/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Customers</h3>
                <p className="text-white/80 mb-4">Start earning Choma Points today!</p>
                <Link to="/track">
                  <Button className="bg-kenyan-red hover:bg-red-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="glass-effect border-kenyan-green/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Eateries</h3>
                <p className="text-white/80 mb-4">Boost customer loyalty now!</p>
                <Button className="bg-kenyan-green hover:bg-green-700 text-white">
                  Partner With Us
                </Button>
              </CardContent>
            </Card>
            <Card className="glass-effect border-yellow-400/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Investors</h3>
                <p className="text-white/80 mb-4">Join our growth journey!</p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  Invest Now
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <p className="text-xl text-kenyan-green font-semibold">
              Mtu wangu, let's build the future of Kenyan food culture together! 🇰🇪
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kenyan-black via-kenyan-red to-kenyan-green">
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
            <Link to="/track" className="text-white hover:text-kenyan-green transition-colors">Live Demo</Link>
            <Link to="/rewards" className="text-white hover:text-kenyan-green transition-colors">Rewards</Link>
          </div>
        </div>
      </nav>

      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white mb-4">
              VibeLoyalty <span className="text-kenyan-green">Pitch Deck</span>
            </h1>
            <p className="text-xl text-white/90">
              Revolutionizing loyalty rewards for Kenyan eateries
            </p>
          </div>

          {/* Slide Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-kenyan-green' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Slide */}
          <Card className="glass-effect border-white/20 min-h-[600px] relative">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-kenyan-green font-ubuntu text-2xl">
                  {slides[currentSlide].title}
                </CardTitle>
                <Badge variant="outline" className="border-kenyan-green text-kenyan-green">
                  {currentSlide + 1} / {slides.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="animate-fade-in">
                {slides[currentSlide].content}
              </div>
            </CardContent>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between">
              <Button
                onClick={prevSlide}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextSlide}
                className="bg-kenyan-green hover:bg-green-700 text-white"
                disabled={currentSlide === slides.length - 1}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-white/80">
              Ready to experience VibeLoyalty in action?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/track">
                <Button className="bg-kenyan-red hover:bg-red-700 text-white px-6 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Try Live Demo
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="outline" className="border-kenyan-green text-kenyan-green hover:bg-kenyan-green hover:text-white px-6 py-3">
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
