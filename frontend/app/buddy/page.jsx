export default function Buddy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        🤝 Virtual Gym Buddy
      </h1>
      <div className="bg-gray-800 rounded-2xl p-6 border border-yellow-500 max-w-xl">
        <div className="h-64 bg-gray-700 rounded-xl p-4 mb-4 overflow-y-auto">
          <div className="bg-yellow-900 rounded-lg p-3 mb-3 max-w-xs">
            <p className="text-yellow-300">Hey! Ready for today's workout? 💪</p>
          </div>
        </div>
        <div className="flex gap-3">
          <input className="flex-1 bg-gray-700 rounded-full px-4 text-white" 
            placeholder="Type a message..." />
          <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-400">
            Send
          </button>
        </div>
      </div>
    </main>
  )
}