export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8">
        📊 Dashboard
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-2xl p-6 border border-green-500">
          <p className="text-gray-400">Calories Burned</p>
          <p className="text-4xl font-bold text-green-400">450</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 border border-blue-500">
          <p className="text-gray-400">Workout Streak</p>
          <p className="text-4xl font-bold text-blue-400">7 days</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 border border-purple-500">
          <p className="text-gray-400">Workouts Done</p>
          <p className="text-4xl font-bold text-purple-400">24</p>
        </div>
      </div>
    </main>
  )
}