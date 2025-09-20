// app/page.tsx
import Link from "next/link"

const campaigns = [
  {
    id: 1,
    title: "Sustainable Water Bottles Launch",
    description:
      "Help spread awareness of our eco-friendly bottles and earn rewards.",
    reward: "Free bottle + referral credits",
  },
  {
    id: 2,
    title: "Campus Blood Drive",
    description:
      "Support your community by sharing this nonprofit campaign.",
    reward: "Badge + community recognition",
  },
  {
    id: 3,
    title: "Tech Startup Beta Test",
    description: "Invite your friends to test our new productivity app.",
    reward: "$10 gift card per 5 signups",
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Spread</h1>
          <div className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/users/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
        <h2 className="text-4xl font-extrabold">
          Anyone Can Be an Influencer 🌍
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join campaigns from startups, nonprofits, and brands. Share with
          friends, earn rewards, and build your influence.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Campaign Feed */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Active Campaigns
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h4 className="text-lg font-bold text-blue-600">
                {campaign.title}
              </h4>
              <p className="text-gray-600 mt-2">{campaign.description}</p>
              <p className="mt-3 text-sm text-green-600 font-medium">
                🎁 Reward: {campaign.reward}
              </p>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Join Campaign
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
