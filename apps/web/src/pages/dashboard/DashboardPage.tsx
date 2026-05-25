export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-zinc-400">
        Welcome to FluxForge AI
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">
            Open Issues
          </h2>

          <p className="mt-4 text-5xl font-bold">
            24
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">
            Active Projects
          </h2>

          <p className="mt-4 text-5xl font-bold">
            8
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">
            Contributors
          </h2>

          <p className="mt-4 text-5xl font-bold">
            12
          </p>
        </div>
      </div>
    </div>
  )
}
