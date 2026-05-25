import IssueCard from "./IssueCard"

interface Issue {
  id: string
  title: string
  priority: string
  assignee: string
}

interface Props {
  title: string
  issues: Issue[]
}

export default function BoardColumn({
  title,
  issues,
}: Props) {
  return (
    <div
      className="
        w-80 shrink-0 rounded-2xl
        border border-zinc-800
        bg-zinc-950/70 p-4
      "
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-zinc-200">
          {title}
        </h2>

        <span
          className="
            rounded-full bg-zinc-800
            px-2 py-1 text-xs text-zinc-400
          "
        >
          {issues.length}
        </span>
      </div>

      <div className="space-y-3">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            title={issue.title}
            priority={issue.priority}
            assignee={issue.assignee}
          />
        ))}
      </div>
    </div>
  )
}