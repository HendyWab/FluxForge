import BoardColumn from "../../components/board/BoardColumn"
import { columns, issues } from "../../data/boardData"

export default function BoardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Sprint Board
        </h1>

        <p className="mt-2 text-zinc-400">
          Realtime collaborative workflow management
        </p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {columns.map((column) => {
          const filteredIssues = issues.filter(
            (issue) => issue.columnId === column.id
          )

          return (
            <BoardColumn
              key={column.id}
              title={column.title}
              issues={filteredIssues}
            />
          )
        })}
      </div>
    </div>
  )
}