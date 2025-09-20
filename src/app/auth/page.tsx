"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Building, Shield } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [userType, setUserType] = useState<"creator" | "organization">("creator")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Spread
            </h1>
          </Link>
          <p className="text-gray-600">Join the community of change-makers</p>
        </div>

        <Tabs value={userType} onValueChange={(value) => setUserType(value as "creator" | "organization")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="creator" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Creator</span>
            </TabsTrigger>
            <TabsTrigger value="organization" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Organization</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="creator">
            <Card>
              <CardHeader>
                <CardTitle>Join as a Creator</CardTitle>
                <CardDescription>
                  Apply to campaigns and build your impact through creative content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="creator-email">Email</Label>
                  <Input id="creator-email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="creator-password">Password</Label>
                  <Input id="creator-password" type="password" placeholder="Create a password" />
                </div>
                <div>
                  <Label htmlFor="creator-name">Full Name</Label>
                  <Input id="creator-name" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="creator-username">Username</Label>
                  <Input id="creator-username" placeholder="@yourusername" />
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
                  Create Creator Account
                </Button>
                <div className="text-center">
                  <Button variant="link" asChild>
                    <Link href="/auth?signin=true">Already have an account? Sign in</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organization">
            <Card>
              <CardHeader>
                <CardTitle>Join as an Organization</CardTitle>
                <CardDescription>
                  Post campaigns and connect with passionate creators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="org-email">Organization Email</Label>
                  <Input id="org-email" type="email" placeholder="contact@yourorg.com" />
                </div>
                <div>
                  <Label htmlFor="org-password">Password</Label>
                  <Input id="org-password" type="password" placeholder="Create a password" />
                </div>
                <div>
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" placeholder="Your organization name" />
                </div>
                <div>
                  <Label htmlFor="org-type">Organization Type</Label>
                  <select id="org-type" className="w-full px-3 py-2 border rounded-lg">
                    <option value="">Select type</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="startup">Startup</option>
                    <option value="social-enterprise">Social Enterprise</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="org-website">Website</Label>
                  <Input id="org-website" placeholder="https://yourorganization.com" />
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-900">Verification Required</span>
                  </div>
                  <p className="text-xs text-yellow-800">
                    Organizations undergo a verification process to ensure trust and authenticity.
                    You'll need to provide documentation after registration.
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700">
                  Create Organization Account
                </Button>
                <div className="text-center">
                  <Button variant="link" asChild>
                    <Link href="/auth?signin=true">Already have an account? Sign in</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Sign In Form (would be shown based on URL parameter) */}
        <div className="mt-8">
          <Card className="opacity-50">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Welcome back to Spread</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="signin-email">Email</Label>
                <Input id="signin-email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="signin-password">Password</Label>
                <Input id="signin-password" type="password" placeholder="Your password" />
              </div>
              <Button className="w-full">Sign In</Button>
              <div className="text-center">
                <Button variant="link">Forgot your password?</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-6">
          <Button variant="ghost" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
