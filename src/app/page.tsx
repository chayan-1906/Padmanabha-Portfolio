import {ThemeToggle} from "@/components/theme-toggle"

export default function Home() {
  return (
      <main className="min-h-screen bg-background text-foreground p-8">
        <ThemeToggle/>

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-primary">
            Dark Mode Testing
          </h1>

          <div className="space-y-4">
            <div className="bg-red-400 dark:bg-yellow-400 p-4 rounded text-white dark:text-black">
              bg-red-400 dark:bg-yellow-400 (manual toggle only)
            </div>

            <div className="bg-card border border-border p-4 rounded">
              bg-card (works with system theme)
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Switch to "System" mode and change macOS appearance - only the card adapts, not the red/yellow box.
          </p>
        </div>
      </main>
  )
}
