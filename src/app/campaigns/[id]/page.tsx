"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, Upload, Video, Play, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock campaign data (in real app, this would come from API)
const campaign = {
  id: 1,
  title: "Clean Ocean Initiative",
  organization: "Ocean Care Foundation",
  organizationType: "nonprofit",
  description: "Help us create awareness about ocean pollution and promote sustainable practices through engaging social media content.",
  requirements: "Passionate about environment, creative video skills, willingness to travel for content creation",
  reward: "Recognition + $500 prize pool",
  deadline: "Mar 15, 2025",
  avatar: "OC"
}

export default function ApplyPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              Your creative application has been sent to {campaign.organization}.
              You'll hear back within 48 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h4 className="font-medium text-emerald-900 mb-2">What's Next?</h4>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• We'll review your application</li>
                <li>• You'll get notified of the decision</li>
                <li>• If selected, collaboration details will be shared</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1" asChild>
                <Link href="/campaigns">Browse More</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/profile">View Profile</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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
          <Button variant="ghost" asChild>
            <Link href="/campaigns" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Campaigns
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaign Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white font-semibold">
                      {campaign.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <p className="text-sm text-gray-600">{campaign.organization}</p>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700 w-fit">
                  {campaign.organizationType === 'nonprofit' ? 'Nonprofit' : 'Startup'}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Campaign Description</h4>
                  <p className="text-sm text-gray-600">{campaign.description}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Requirements</h4>
                  <p className="text-sm text-gray-600">{campaign.requirements}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Reward</h4>
                  <p className="text-sm text-gray-600">{campaign.reward}</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-900">Deadline: {campaign.deadline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Submit Your Creative Application</CardTitle>
                <CardDescription>
                  Show your passion and creativity through a compelling video application.
                  This is your chance to stand out beyond just follower counts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Your full name" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>
                      <div>
                        <Label htmlFor="experience">Experience Level</Label>
                        <select id="experience" className="w-full px-3 py-2 border rounded-lg">
                          <option>Beginner (0-1 years)</option>
                          <option>Intermediate (2-4 years)</option>
                          <option>Advanced (5+ years)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Social Media Presence</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="instagram">Instagram Handle (optional)</Label>
                        <Input id="instagram" placeholder="@yourusername" />
                      </div>
                      <div>
                        <Label htmlFor="tiktok">TikTok Handle (optional)</Label>
                        <Input id="tiktok" placeholder="@yourusername" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="youtube">YouTube Channel (optional)</Label>
                        <Input id="youtube" placeholder="Channel URL" />
                      </div>
                      <div>
                        <Label htmlFor="website">Personal Website/Portfolio (optional)</Label>
                        <Input id="website" placeholder="https://yourwebsite.com" />
                      </div>
                    </div>
                  </div>

                  {/* Video Application */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Video Application</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                      {!videoFile ? (
                        <div className="text-center">
                          <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h4 className="text-lg font-medium mb-2">Upload Your Application Video</h4>
                          <p className="text-gray-600 mb-4">
                            Create a 60-90 second video explaining why you're passionate about this cause
                            and your creative ideas for the campaign.
                          </p>
                          <label htmlFor="video-upload" className="cursor-pointer">
                            <Button type="button" className="pointer-events-none">
                              <Upload className="h-4 w-4 mr-2" />
                              Choose Video File
                            </Button>
                          </label>
                          <input
                            id="video-upload"
                            type="file"
                            accept="video/*"
                            className="hidden"
                            onChange={handleVideoUpload}
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            Max file size: 100MB. Supported formats: MP4, MOV, AVI
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="bg-emerald-100 rounded-lg p-4 mb-4">
                            <Play className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                            <p className="font-medium text-emerald-900">{videoFile.name}</p>
                            <p className="text-sm text-emerald-700">
                              {(videoFile.size / (1024 * 1024)).toFixed(1)} MB
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setVideoFile(null)}
                          >
                            Change Video
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Written Motivation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Written Statement</h3>
                    <div>
                      <Label htmlFor="motivation">Why are you passionate about this cause?</Label>
                      <Textarea
                        id="motivation"
                        placeholder="Share your personal connection to this cause and what motivates you to create content around it..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ideas">What creative ideas do you have for this campaign?</Label>
                      <Textarea
                        id="ideas"
                        placeholder="Describe your content strategy, creative concepts, and how you plan to engage your audience..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Previous Work */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Previous Work (Optional)</h3>
                    <div>
                      <Label htmlFor="portfolio">Share links to your best content</Label>
                      <Textarea
                        id="portfolio"
                        placeholder="Include links to videos, posts, or campaigns you've worked on that showcase your skills..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="border-t pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
                      disabled={!videoFile || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting Application...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By submitting, you agree to our terms and conditions
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
