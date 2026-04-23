export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          💪 AI Gym Assistant
        </h1>
        <p className="text-gray-400 text-xl">
          Your Personal AI Powered Fitness Trainer
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Pose Detection */}
        <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 cursor-pointer border border-green-500">
          <div className="text-4xl mb-4">🤸</div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            Pose Detection
          </h2>
          <p className="text-gray-400">
            AI analyzes your workout form in real time using camera
          </p>
          <a href="/trainer">
            <button className="mt-4 bg-green-500 text-black font-bold py-2 px-6 rounded-full hover:bg-green-400">
              Start Training →
            </button>
          </a>
        </div>

        {/* Diet Advisor */}
        <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 cursor-pointer border border-blue-500">
          <div className="text-4xl mb-4">🥗</div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            Diet Advisor
          </h2>
          <p className="text-gray-400">
            Get personalized diet plans powered by Gemini AI
          </p>
          <a href="/diet">
            <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-400">
              Get Diet Plan →
            </button>
          </a>
        </div>

        {/* Habit Tracker */}
        <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 cursor-pointer border border-purple-500">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-2xl font-bold text-purple-400 mb-2">
            Habit Tracker
          </h2>
          <p className="text-gray-400">
            AI predicts if you will skip workout and nudges you
          </p>
          <a href="/habit">
            <button className="mt-4 bg-purple-500 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-400">
              Track Habits →
            </button>
          </a>
        </div>

        {/* Progress */}
        <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 cursor-pointer border border-yellow-500">
          <div className="text-4xl mb-4">📈</div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            Progress Charts
          </h2>
          <p className="text-gray-400">
            Visualize your fitness journey with detailed charts
          </p>
          <a href="/dashboard">
            <button className="mt-4 bg-yellow-500 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-400">
              View Progress →
            </button>
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-600">
        Backend: localhost:8000 | Frontend: localhost:3000
      </div>

    </main>
  )
}