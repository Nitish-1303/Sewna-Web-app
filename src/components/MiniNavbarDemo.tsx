import { Navbar } from "./ui/mini-navbar";

export default function MiniNavbarDemo() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover grayscale"
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2160&q=80"
          alt="Background Stars"
        />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-24">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
          MINI NAVBAR
        </h1>
        <div className="flex flex-col sm:flex-row items-center text-xl text-gray-300 mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
          <span>Elegant floating navigation component</span>
          <button className="px-4 py-1 border border-[#333] bg-[rgba(31,31,31,0.62)] rounded-full text-white transition-colors duration-200 cursor-pointer text-base inline-flex items-center justify-center hover:border-white/50">
            <span>View Demo</span>
          </button>
        </div>
      </main>
    </div>
  );
}
