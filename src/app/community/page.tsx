import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Trophy, Star, Zap, Shield, Target, Users, TrendingUp, Medal, Crown, Award } from "lucide-react"
import Link from "next/link"

// Mock data
const topCreators = [
  {
    id: 1,
    name: "Sarah Chen",
    username: "@sarahcreates",
    avatar: "SC",
    points: 2850,
    rank: 1,
    badge: "Impact Champion",
    campaigns: 12,
    successRate: 94,
    specialty: "Environmental Advocacy"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    username: "@marcusj",
    avatar: "MJ",
    points: 2720,
    rank: 2,
    badge: "Creative Visionary",
    campaigns: 15,
    successRate: 87,
    specialty: "Social Justice"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    username: "@elenarod",
    avatar: "ER",
    points: 2650,
    rank: 3,
    badge: "Community Builder",
    campaigns: 18,
    successRate: 91,
    specialty: "Education"
  },
  {
    id: 4,
    name: "Alex Kim",
    username: "@alexkimco",
    avatar: "AK",
    points: 2580,
    rank: 4,
    badge: "Tech Innovator",
    campaigns: 9,
    successRate: 96,
    specialty: "Technology"
  },
  {
    id: 5,
    name: "Maya Patel",
    username: "@mayap",
    avatar: "MP",
    points: 2420,
    rank: 5,
    badge: "Health Advocate",
    campaigns: 14,
    successRate: 89,
    specialty: "Healthcare"
  }
]

const badges = [
  { name: "First Campaign", icon: Star, description: "Complete your first campaign", rarity: "common" },
  { name: "Impact Champion", icon: Trophy, description: "Generate 10K+ engagement", rarity: "rare" },
  { name: "Creative Visionary", icon: Zap, description: "Win 3 creative challenges", rarity: "epic" },
  { name: "Community Builder", icon: Users, description: "Mentor 5+ new creators", rarity: "legendary" },
  { name: "Verified Creator", icon: Shield, description: "Complete verification process", rarity: "common" },
  { name: "Rising Star", icon: TrendingUp, description: "Top 10% growth this month", rarity: "rare" },
  { name: "Perfect Record", icon: Target, description: "100% campaign success rate", rarity: "epic" },
  { name: "Global Impact", icon: Award, description: "Campaigns in 5+ countries", rarity: "legendary" }
]

const recentActivity = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "completed",
    target: "Clean Ocean Initiative",
    time: "2 hours ago",
    avatar: "SC"
  },
  {
    id: 2,
    user: "Marcus Johnson",
    action: "earned badge",
    target: "Creative Visionary",
    time: "4 hours ago",
    avatar: "MJ"
  },
  {
    id: 3,
    user: "Elena Rodriguez",
    action: "joined",
    target: "Mental Health Awareness Campaign",
    time: "6 hours ago",
    avatar: "ER"
  },
  {
    id: 4,
    user: "Alex Kim",
    action: "reached milestone",
    target: "1000 Impact Points",
    time: "8 hours ago",
    avatar: "AK"
  }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Spread
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/campaigns" className="text-gray-600 hover:text-gray-900 transition-colors">
              Campaigns
            </Link>
            <Link href="/community" className="text-emerald-600 font-medium">
              Community
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Community Hub
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with fellow change-makers, earn recognition for your impact, and celebrate collective achievements.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">12,847</div>
                  <div className="text-sm text-gray-600">Active Creators</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Trophy className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">3,429</div>
                  <div className="text-sm text-gray-600">Campaigns Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">94.7%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2.4M</div>
                  <div className="text-sm text-gray-600">Total Impact Points</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="badges">Badge System</TabsTrigger>
            <TabsTrigger value="activity">Community Feed</TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Leaderboard */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                      Top Impact Creators
                    </CardTitle>
                    <CardDescription>
                      Rankings based on campaign success, community engagement, and impact metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCreators.map((creator, index) => (
                        <div key={creator.id} className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-blue-50 transition-colors">
                          <div className="flex items-center space-x-3">
                            {index === 0 && <Crown className="h-6 w-6 text-yellow-500" />}
                            {index === 1 && <Medal className="h-6 w-6 text-gray-400" />}
                            {index === 2 && <Award className="h-6 w-6 text-amber-600" />}
                            {index > 2 && (
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-gray-600">{creator.rank}</span>
                              </div>
                            )}
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold">
                                {creator.avatar}
                              </AvatarFallback>
                            </Avatar>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{creator.name}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {creator.badge}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{creator.username}</p>
                            <p className="text-xs text-gray-500">{creator.specialty}</p>
                          </div>

                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-600">{creator.points.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">Impact Points</div>
                            <div className="text-xs text-gray-400">{creator.campaigns} campaigns • {creator.successRate}% success</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Side Panel */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-3">
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold text-lg">
                          YU
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Your Username</div>
                        <div className="text-2xl font-bold text-emerald-600">1,245</div>
                        <div className="text-sm text-gray-600">Impact Points</div>
                        <div className="text-lg font-semibold text-gray-700">#247</div>
                        <div className="text-xs text-gray-500">Current Rank</div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/profile">View Full Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Monthly Challenge</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium">Climate Action Sprint</h4>
                      <p className="text-sm text-gray-600">Complete 3 environmental campaigns this month</p>
                      <div className="bg-emerald-100 rounded-full h-2">
                        <div className="bg-emerald-600 rounded-full h-2 w-1/3"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1 of 3 completed</span>
                        <span>12 days left</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700">
                        +500 bonus points
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievement Badges</CardTitle>
                <CardDescription>
                  Earn badges by completing campaigns, reaching milestones, and contributing to the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {badges.map((badge, index) => {
                    const IconComponent = badge.icon
                    return (
                      <div key={index} className={`p-4 rounded-lg border-2 ${
                        badge.rarity === 'legendary' ? 'border-purple-200 bg-purple-50' :
                        badge.rarity === 'epic' ? 'border-blue-200 bg-blue-50' :
                        badge.rarity === 'rare' ? 'border-emerald-200 bg-emerald-50' :
                        'border-gray-200 bg-gray-50'
                      }`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                          badge.rarity === 'legendary' ? 'bg-purple-100' :
                          badge.rarity === 'epic' ? 'bg-blue-100' :
                          badge.rarity === 'rare' ? 'bg-emerald-100' :
                          'bg-gray-100'
                        }`}>
                          <IconComponent className={`h-6 w-6 ${
                            badge.rarity === 'legendary' ? 'text-purple-600' :
                            badge.rarity === 'epic' ? 'text-blue-600' :
                            badge.rarity === 'rare' ? 'text-emerald-600' :
                            'text-gray-600'
                          }`} />
                        </div>
                        <h3 className="font-semibold mb-1">{badge.name}</h3>
                        <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
                        <Badge variant="outline" className={`text-xs ${
                          badge.rarity === 'legendary' ? 'border-purple-300 text-purple-700' :
                          badge.rarity === 'epic' ? 'border-blue-300 text-blue-700' :
                          badge.rarity === 'rare' ? 'border-emerald-300 text-emerald-700' :
                          'border-gray-300 text-gray-700'
                        }`}>
                          {badge.rarity}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Activity</CardTitle>
                    <CardDescription>Latest achievements and milestones from our community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold">
                              {activity.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm">
                              <span className="font-semibold">{activity.user}</span>
                              <span className="text-gray-600"> {activity.action} </span>
                              <span className="font-medium">{activity.target}</span>
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">#ClimateAction</span>
                        <Badge variant="secondary">142 posts</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">#MentalHealthMatters</span>
                        <Badge variant="secondary">89 posts</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">#TechForGood</span>
                        <Badge variant="secondary">67 posts</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">#EducationForAll</span>
                        <Badge variant="secondary">45 posts</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
