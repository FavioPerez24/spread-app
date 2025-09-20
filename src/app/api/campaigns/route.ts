// app/api/campaigns/route.ts
import { NextRequest, NextResponse } from "next/server";

// Mock campaign data
const campaigns = [
  {
    id: 1,
    title: "Sustainable Water Bottles Launch",
    description: "Help spread awareness of our eco-friendly bottles and earn rewards.",
    reward: "Free bottle + referral credits",
  },
  {
    id: 2,
    title: "Campus Blood Drive",
    description: "Support your community by sharing this nonprofit campaign.",
    reward: "Badge + community recognition",
  },
  {
    id: 3,
    title: "Tech Startup Beta Test",
    description: "Invite your friends to test our new productivity app.",
    reward: "$10 gift card per 5 signups",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(campaigns);
}
