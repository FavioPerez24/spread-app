import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, Trophy, Video, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Spread
            </h1>
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
            <Button variant="ghost" asChild>
              <Link href="/auth">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth?type=register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            🚀 Connecting Impact with Creativity
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Spread Ideas That Matter
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The platform where startups and nonprofits connect with passionate creators.
            Share your cause, spread your message, and build a community of change-makers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700" asChild>
              <Link href="/campaigns">
                Explore Campaigns <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/auth?type=organization">
                Post a Campaign
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Spread?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Shield className="h-10 w-10 text-emerald-600 mb-2" />
                <CardTitle>Verified Organizations</CardTitle>
                <CardDescription>
                  All startups and nonprofits are authenticated and verified for trust and transparency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Video className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Creative Applications</CardTitle>
                <CardDescription>
                  Submit video applications showcasing your creativity, not just follower counts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <Trophy className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Community & Recognition</CardTitle>
                <CardDescription>
                  Earn badges, climb rankings, and connect with like-minded change-makers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-emerald-600" />
                  For Organizations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-emerald-600">1</span>
                  </div>
                  <p className="text-gray-600">Verify your startup or nonprofit status</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-emerald-600">2</span>
                  </div>
                  <p className="text-gray-600">Create compelling campaigns with clear goals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-emerald-600">3</span>
                  </div>
                  <p className="text-gray-600">Review creative video applications from passionate creators</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-emerald-600">4</span>
                  </div>
                  <p className="text-gray-600">Collaborate and track campaign impact</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-blue-600" />
                  For Creators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-blue-600">1</span>
                  </div>
                  <p className="text-gray-600">Browse verified campaigns that align with your values</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-blue-600">2</span>
                  </div>
                  <p className="text-gray-600">Submit creative video applications showcasing your ideas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-blue-600">3</span>
                  </div>
                  <p className="text-gray-600">Get selected based on creativity, not just follower count</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-semibold text-blue-600">4</span>
                  </div>
                  <p className="text-gray-600">Earn badges, build your reputation, and make impact</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Spread Your Impact?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of creators and organizations making a difference together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth?type=creator">
                Join as Creator
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600" asChild>
              <Link href="/auth?type=organization">
                Post Campaign
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-600 rounded flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold">Spread</span>
          </div>
          <p className="text-sm">
            © 2025 Spread. Connecting impact with creativity.
          </p>
        </div>
      </footer>
    </div>
  )
}
