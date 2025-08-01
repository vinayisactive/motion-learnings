const Dashboard = () => {
  return (
 <div className="bg-gray-100 flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between min-h-[250px]"
            >
              <h2 className="text-lg font-medium mb-2">Card {i + 1}</h2>
              <p className="text-gray-500 text-sm">Some brief data or widget here.</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Dashboard; 