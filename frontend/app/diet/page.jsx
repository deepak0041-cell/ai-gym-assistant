export default function Diet() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">
        🥗 AI Diet Advisor
      </h1>
      <div className="bg-gray-800 rounded-2xl p-6 border border-blue-500 max-w-xl">
        <div className="mb-4">
          <label className="text-gray-400">Your BMI</label>
          <input className="w-full bg-gray-700 rounded-lg p-3 mt-1 text-white" 
            placeholder="Enter your BMI" />
        </div>
        <div className="mb-4">
          <label className="text-gray-400">Your Goal</label>
          <input className="w-full bg-gray-700 rounded-lg p-3 mt-1 text-white" 
            placeholder="Lose weight / Gain muscle" />
        </div>
        <div className="mb-6">
          <label className="text-gray-400">Food Preferences</label>
          <input className="w-full bg-gray-700 rounded-lg p-3 mt-1 text-white" 
            placeholder="Veg / Non-veg" />
        </div>
        <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-full hover:bg-blue-400">
          Get My Diet Plan 🥗
        </button>
      </div>
    </main>
  )
}