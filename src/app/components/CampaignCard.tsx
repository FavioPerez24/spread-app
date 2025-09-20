interface CampaignCardProps {
  title: string
  description: string
  reward: string
}

export default function CampaignCard({ title, description, reward }: CampaignCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-4 font-medium text-green-600">Reward: {reward}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Share Now
      </button>
    </div>
  )
}
