export default function Habit() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400 mb-8">
        📅 Habit Tracker
      </h1>
      <div className="bg-gray-800 rounded-2xl p-6 border border-purple-500 max-w-xl">
        <div className="bg-gray-700 rounded-xl p-4 mb-6">
          <p className="text-gray-400 mb-2">Skip Risk Today</p>
          <p className="text-5xl font-bold text-yellow-400">45%</p>
        </div>
        <div className="bg-purple-900 rounded-xl p-4 border border-purple-500">
          <p className="text-purple-300 text-lg">
            💬 You usually workout at 6PM. Time to go!
          </p>
        </div>
      </div>
    </main>
  )
}