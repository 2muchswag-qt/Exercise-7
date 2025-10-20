import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
      <div className="bg-gradient-to-b from-purple-700 to-violet-900 w-64 min-h-screen p-4
                      transition-all duration-300 peer-checked:w-16 relative">
        {/* Toggle Button */}
        <label htmlFor="sidebar-toggle" className="absolute top-4 right-[-12px] bg-white text-violet-900 p-2 rounded-full cursor-pointer shadow-lg">
          &#9776;
        </label>

        {/* Menu */}
        <div className="mt-50 flex flex-col gap-4">
          <Link href="/dashboard">
            <div className="flex items-center gap-4 p-3 rounded-md hover:bg-purple-800 relative text font-bold">
         
              <span className="peer-checked:hidden">Home</span>
            </div>
          </Link>
          <Link href="/dashboard/settings">
            <div className="flex items-center gap-4 p-3 rounded-md hover:bg-purple-800 relative text font-bold">
          
              <span className="peer-checked:hidden">Settings</span>
            </div>
          </Link>
          <Link href="/dashboard/analytics">
            <div className="flex items-center gap-4 p-3 rounded-md hover:bg-purple-800 relative text font-bold">
          
              <span className="peer-checked:hidden">About Us</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold mb-6 text-violet-500">Dashboard Main Area</h1>
        <p className="text-gray-300 mb-6">This is ADV101 Exercise 7. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">Card 1</div>
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">Card 2</div>
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">Card 3</div>
          <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition-shadow">Card 4</div>
        </div>
      </main>
    </div>
  );
}
