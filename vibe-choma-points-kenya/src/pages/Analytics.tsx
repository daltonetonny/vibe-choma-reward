
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, MapPin, Clock, BarChart } from "lucide-react";

const Analytics = () => {
  const [visitData, setVisitData] = useState({
    totalVisits: 127,
    thisWeek: 8,
    thisMonth: 23,
    favoriteEatery: "Mama Njeri's Nyama Choma",
    avgPerWeek: 6.2
  });

  const weeklyData = [
    { day: "Mon", visits: 12, points: 120 },
    { day: "Tue", visits: 8, points: 80 },
    { day: "Wed", visits: 15, points: 150 },
    { day: "Thu", visits: 18, points: 180 },
    { day: "Fri", visits: 22, points: 220 },
    { day: "Sat", visits: 25, points: 250 },
    { day: "Sun", visits: 20, points: 200 }
  ];

  const topEateries = [
    { name: "Mama Njeri's Nyama Choma", visits: 45, percentage: 85 },
    { name: "Kibanda Express", visits: 32, percentage: 70 },
    { name: "Coastal Pilau Palace", visits: 28, percentage: 60 },
    { name: "Ugali Kingdom", visits: 22, percentage: 50 },
    { name: "Swahili Spice House", visits: 18, percentage: 40 }
  ];

  const visitTimes = [
    { time: "12:00 PM", visits: 35, label: "Lunch Rush" },
    { time: "7:00 PM", visits: 42, label: "Dinner Time" },
    { time: "2:00 PM", visits: 28, label: "Afternoon Bite" },
    { time: "9:00 PM", visits: 20, label: "Late Night" }
  ];

  const maxVisits = Math.max(...weeklyData.map(d => d.visits));

  return (
    <div className="min-h-screen bg-gradient-to-br from-kenyan-red via-kenyan-black to-kenyan-green">
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
            <Link to="/rewards" className="text-white hover:text-kenyan-green transition-colors">Rewards</Link>
          </div>
        </div>
      </nav>

      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-white mb-4">
              <span className="text-kenyan-green">Choma</span> Analytics
            </h1>
            <p className="text-xl text-white/90">
              Your eating patterns and favorite spots, visualized!
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-effect border-white/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-kenyan-green mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">{visitData.totalVisits}</p>
                <p className="text-white/80">Total Visits</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6 text-center">
                <BarChart className="w-12 h-12 text-kenyan-red mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">{visitData.thisWeek}</p>
                <p className="text-white/80">This Week</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <p className="text-3xl font-bold text-white">{visitData.avgPerWeek.toFixed(1)}</p>
                <p className="text-white/80">Avg/Week</p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-lg font-bold text-white">5</p>
                <p className="text-white/80">Eateries Visited</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="trends" className="space-y-8">
            <TabsList className="bg-black/20 border border-white/20">
              <TabsTrigger value="trends" className="text-white data-[state=active]:bg-kenyan-green">Visit Trends</TabsTrigger>
              <TabsTrigger value="locations" className="text-white data-[state=active]:bg-kenyan-green">Top Spots</TabsTrigger>
              <TabsTrigger value="timing" className="text-white data-[state=active]:bg-kenyan-green">Peak Times</TabsTrigger>
            </TabsList>

            <TabsContent value="trends">
              <Card className="glass-effect border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl">Weekly Visit Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Custom Bar Chart */}
                    <div className="grid grid-cols-7 gap-4 h-64">
                      {weeklyData.map((day, index) => (
                        <div key={day.day} className="flex flex-col items-center justify-end space-y-2">
                          <div className="text-white text-sm font-medium">{day.visits}</div>
                          <div 
                            className="w-full bg-gradient-to-t from-kenyan-red to-kenyan-green rounded-t-lg transition-all duration-500 hover:scale-105"
                            style={{ 
                              height: `${(day.visits / maxVisits) * 100}%`,
                              minHeight: '10px'
                            }}
                          ></div>
                          <div className="text-white/80 text-sm">{day.day}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-white/80">Highest activity on weekends - perfect for choma time! 🔥</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locations">
              <Card className="glass-effect border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl">Your Favorite Choma Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {topEateries.map((eatery, index) => (
                      <div key={eatery.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">
                              {index === 0 ? "🏆" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🍽️"}
                            </span>
                            <div>
                              <h3 className="text-white font-semibold">{eatery.name}</h3>
                              <p className="text-white/70 text-sm">{eatery.visits} visits</p>
                            </div>
                          </div>
                          <div className="text-kenyan-green font-bold">{eatery.percentage}%</div>
                        </div>
                        <Progress value={eatery.percentage} className="h-3" />
                      </div>
                    ))}
                    <div className="text-center mt-6">
                      <p className="text-white/80">Mama Njeri knows how to make that choma! 🥩</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timing">
              <Card className="glass-effect border-white/20">
                <CardHeader>
                  <CardTitle className="text-white font-ubuntu text-2xl">Peak Dining Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {visitTimes.map((timeSlot, index) => (
                      <div key={timeSlot.time} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-6 h-6 text-kenyan-green" />
                            <div>
                              <h3 className="text-white font-semibold">{timeSlot.time}</h3>
                              <p className="text-white/70 text-sm">{timeSlot.label}</p>
                            </div>
                          </div>
                          <div className="text-kenyan-red font-bold">{timeSlot.visits} visits</div>
                        </div>
                        <Progress value={(timeSlot.visits / 42) * 100} className="h-3" />
                      </div>
                    ))}
                    <div className="text-center mt-6">
                      <p className="text-white/80">You're a dinner time choma enthusiast! 🌙</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Insights */}
          <Card className="glass-effect border-white/20 mt-8">
            <CardHeader>
              <CardTitle className="text-white font-ubuntu text-2xl">Choma Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-kenyan-green font-semibold text-lg">Your Food Personality:</h3>
                  <div className="space-y-2">
                    <p className="text-white">🔥 <strong>Choma Enthusiast</strong> - You love your grilled meats!</p>
                    <p className="text-white">📍 <strong>Loyal Customer</strong> - You stick to your favorites</p>
                    <p className="text-white">🌙 <strong>Evening Diner</strong> - Dinner time is your prime time</p>
                    <p className="text-white">📈 <strong>Consistent Visitor</strong> - Regular eating habits</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-kenyan-green font-semibold text-lg">Recommendations:</h3>
                  <div className="space-y-2">
                    <p className="text-white">• Try visiting during lunch for special weekday deals</p>
                    <p className="text-white">• Explore new eateries to earn discovery badges</p>
                    <p className="text-white">• Bring friends for group rewards</p>
                    <p className="text-white">• Visit on Sundays for family feast specials</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
