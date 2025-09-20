import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MapPin, Users, Calendar, Search, Filter, Video, Shield, Star } from "lucide-react"
import Link from "next/link"

// Mock campaign data
const campaigns = [
  {
    id: 1,
    title: "Clean Ocean Initiative",
    organization: "Ocean Care Foundation",
    organizationType: "nonprofit",
    verified: true,
    description: "Help us create awareness about ocean pollution and promote sustainable practices through engaging social media content.",
    category: "Environment",
    location: "Global",
    participants: 24,
    deadline: "Mar 15, 2025",
    reward: "Recognition + $500 prize pool",
    requirements: "Passionate about environment, creative video skills",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=200&fit=crop",
    avatar: "OC",
    badges: ["Eco-Friendly", "Global Impact"],
    rating: 4.8,
    applications: 156
  },
  {
    id: 2,
    title: "Mental Health Awareness Campaign",
    organization: "MindWell Startup",
    organizationType: "startup",
    verified: true,
    description: "Join our mission to destigmatize mental health through authentic storytelling and community building.",
    category: "Health",
    location: "USA",
    participants: 12,
    deadline: "Feb 28, 2025",
    reward: "Paid collaboration + equity options",
    requirements: "Personal experience with mental health advocacy preferred",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    avatar: "MW",
    badges: ["Health & Wellness", "Paid"],
    rating: 4.9,
    applications: 89
  },
  {
    id: 3,
    title: "Tech Education for All",
    organization: "CodeBridge",
    organizationType: "nonprofit",
    verified: true,
    description: "Create content that makes coding accessible to underrepresented communities worldwide.",
    category: "Education",
    location: "Remote",
    participants: 30,
    deadline: "Mar 30, 2025",
    reward: "Mentorship + certification",
    requirements: "Coding background, teaching experience a plus",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    avatar: "CB",
    badges: ["Education", "Remote"],
    rating: 4.7,
    applications: 203
  },
  {
    id: 4,
    title: "Sustainable Fashion Revolution",
    organization: "EcoWear",
    organizationType: "startup",
    verified: true,
    description: "Promote ethical fashion choices and showcase sustainable alternatives to fast fashion.",
    category: "Fashion",
    location: "Europe",
    participants: 8,
    deadline: "Apr 10, 2025",
    reward: "$1000 + product collaborations",
    requirements: "Fashion influencer, sustainability advocate",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop",
    avatar: "EW",
    badges: ["Fashion", "Sustainability", "High Reward"],
    rating: 4.6,
    applications: 67
  }
]

export default function CampaignsPage() {
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
            <Link href="/campaigns" className="text-emerald-600 font-medium">
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Active Campaigns
          </h1>
          <p className="text-gray-600 text-lg">
            Discover verified campaigns from startups and nonprofits. Apply with your creative video to make an impact.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 p-6 bg-white rounded-xl border shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <Input
                  placeholder="Search campaigns..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <select className="px-3 py-2 border rounded-lg bg-white">
                <option>All Categories</option>
                <option>Environment</option>
                <option>Health</option>
                <option>Education</option>
                <option>Fashion</option>
              </select>
              <select className="px-3 py-2 border rounded-lg bg-white">
                <option>All Locations</option>
                <option>Global</option>
                <option>USA</option>
                <option>Europe</option>
                <option>Remote</option>
              </select>
              <select className="px-3 py-2 border rounded-lg bg-white">
                <option>All Types</option>
                <option>Nonprofit</option>
                <option>Startup</option>
              </select>
            </div>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-emerald-200">
              <div className="relative">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${campaign.organizationType === 'nonprofit' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                    {campaign.organizationType === 'nonprofit' ? 'Nonprofit' : 'Startup'}
                  </Badge>
                </div>
                {campaign.verified && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold">
                        {campaign.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{campaign.title}</CardTitle>
                      <p className="text-sm text-gray-600">{campaign.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{campaign.rating}</span>
                  </div>
                </div>

                <CardDescription className="mt-2">
                  {campaign.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {campaign.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{campaign.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{campaign.participants} spots</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{campaign.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4" />
                    <span>{campaign.applications} applied</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-sm font-medium text-gray-900 mb-1">Reward</div>
                  <div className="text-sm text-gray-600">{campaign.reward}</div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link href={`/campaigns/${campaign.id}/apply`}>
                      Apply Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/campaigns/${campaign.id}`}>
                      Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Campaigns
          </Button>
        </div>
      </div>
    </div>
  )
}
