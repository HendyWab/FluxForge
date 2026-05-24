import { Bell, Search } from "lucide-react"

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6">
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
        <Search size={18} className="text-zinc-500" />

        <input
          type="text"
          placeholder="Search issues, discussions..."
          className="
            bg-transparent outline-none
            placeholder:text-zinc-500
          "
        />
      </div>

      <button
        className="
          rounded-xl border border-zinc-800
          bg-zinc-900 p-3 transition-all
          hover:bg-zinc-800
        "
      >
        <Bell size={20} />
      </button>
    </header>
  )
}
