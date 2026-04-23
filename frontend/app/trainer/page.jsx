export default function Trainer() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-8">
        🤸 AI Pose Trainer
      </h1>
      <div className="bg-gray-800 rounded-2xl p-6 border border-green-500 text-center">
        <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center mb-6">
          <p className="text-gray-400 text-xl">📷 Camera Feed Here</p>
        </div>
        <button className="bg-green-500 text-black font-bold py-3 px-8 rounded-full text-xl hover:bg-green-400">
          Start Pose Detection
        </button>
      </div>
    </main>
  )
}