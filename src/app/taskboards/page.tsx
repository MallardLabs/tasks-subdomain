import { Header } from "@/components/header"
import { TaskboardCard } from "@/components/taskboard-card"

// This could come from an API or database
const taskboards = [
  {
    id: 1,
    title: "matsCraft",
    imageUrl: "/placeholder.svg?height=400&width=640",
    href: "/taskboards/matscraft"
  },
  // Add more taskboards here
]

export default function TaskboardsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {taskboards.map((taskboard) => (
            <TaskboardCard
              key={taskboard.id}
              title={taskboard.title}
              imageUrl={taskboard.imageUrl}
              href={taskboard.href}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

