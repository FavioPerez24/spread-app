import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Trophy, Star, Zap, Shield, Target, Users, Calendar, MapPin, ExternalLink, Edit } from "lucide-react"
import Link from "next/link"

// Mock user data
const user = {
  name: "Alex Thompson",
  username: "@alexthompson",
  avatar: "AT",
  bio: "Passionate about climate action and sustainable living. Creating content that inspires positive change.",
  location: "San Francisco, CA",
  joinDate: "January 2024",
  verified: true,
  stats: {
    impactPoints: 2420,
    rank: 247,
    campaignsCompleted: 14,
    successRate: 92,
    totalViews: "2.4M",
    engagement: "8.7%"
  },
  socialMedia: {
    instagram: "@alex.eco",
    tiktok: "@alexthompson",
    youtube: "AlexEcoLife"
  }
}

const userBadges = [
  { name: "First Campaign", earned: true, date: "Jan 15, 2024" },
  { name: "Verified Creator", earned: true, date: "Jan 20, 2024" },
  { name: "Rising Star", earned: true, date: "Feb 12, 2024" },
  { name: "Impact Champion", earned: false },
  { name: "Creative Visionary", earned: false },
  { name: "Community Builder", earned: false }
]

const campaignHistory = [
  {
    id: 1,
    title: "Clean Ocean Initiative",
    organization: "Ocean Care Foundation",
    status: "completed",
    date: "Jan 2025",
    impact: "+350 points",
    views: "45K",
    engagement: "9.2%"
  },
  {
    id: 2,
    title: "Sustainable Fashion Week",
    organization: "EcoWear",
    status: "in-progress",
    date: "Jan 2025",
    impact: "TBD",
    views: "12K",
    engagement: "11.4%"
  },
  {
    id: 3,
    title: "Mental Health Awareness",
    organization: "MindWell Startup",
    status: "completed",
    date: "Dec 2024",
    impact: "+280 points",
    views: "32K",
    engagement: "7.8%"
  },
  {
    id: 4,
    title: "Tech Education for All",
    organization: "CodeBridge",
    status: "completed",
    date: "Nov 2024",
    impact: "+420 points",
    views: "67K",
    engagement: "12.1%"
  }
]

export default function ProfilePage() {
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
            <Link href="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign Out</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-bold text-2xl">
                    {user.avatar}
                  </AvatarFallback>
                </Avatar>
                {user.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <Badge className="bg-emerald-100 text-emerald-700">
                    Rank #{user.stats.rank}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-2">{user.username}</p>
                <p className="text-gray-700 mb-4 max-w-2xl">{user.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Instagram:</span>
                    <a href="#" className="text-emerald-600 hover:underline flex items-center">
                      {user.socialMedia.instagram}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">{user.stats.impactPoints.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Impact Points</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{user.stats.campaignsCompleted}</div>
              <div className="text-sm text-gray-600">Campaigns</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">{user.stats.successRate}%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{user.stats.totalViews}</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{user.stats.engagement}</div>
              <div className="text-sm text-gray-600">Avg Engagement</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">#{user.stats.rank}</div>
              <div className="text-sm text-gray-600">Global Rank</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="campaigns" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign History</CardTitle>
                <CardDescription>Your participation in impact campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaignHistory.map((campaign) => (
                    <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{campaign.title}</h3>
                          <Badge className={
                            campaign.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                            campaign.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }>
                            {campaign.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{campaign.organization}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{campaign.date}</span>
                          <span>{campaign.views} views</span>
                          <span>{campaign.engagement} engagement</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-emerald-600">{campaign.impact}</div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/campaigns/${campaign.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievement Badges</CardTitle>
                <CardDescription>Your progress and milestones on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userBadges.map((badge, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${
                      badge.earned
                        ? 'border-emerald-200 bg-emerald-50'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        badge.earned ? 'bg-emerald-100' : 'bg-gray-100'
                      }`}>
                        {badge.earned ? (
                          <Trophy className="h-6 w-6 text-emerald-600" />
                        ) : (
                          <Trophy className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <h3 className="font-semibold mb-1">{badge.name}</h3>
                      {badge.earned ? (
                        <p className="text-xs text-emerald-600">Earned {badge.date}</p>
                      ) : (
                        <p className="text-xs text-gray-500">Not yet earned</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Campaign Success Rate</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 rounded-full h-2 w-[92%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Average Engagement</span>
                        <span className="text-sm font-medium">8.7%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 rounded-full h-2 w-[87%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Content Quality Score</span>
                        <span className="text-sm font-medium">94%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 rounded-full h-2 w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Growth Trajectory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="text-emerald-600 font-semibold">+420 points</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Month</span>
                      <span className="text-gray-600 font-semibold">+380 points</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Best Month</span>
                      <span className="text-blue-600 font-semibold">+520 points</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">+11%</div>
                        <div className="text-sm text-gray-600">Month-over-month growth</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
