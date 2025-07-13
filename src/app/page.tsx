import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen p-8" style={{
      backgroundColor: 'rgb(var(--color-background))',
      color: 'rgb(var(--color-foreground))'
    }}>
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-4">
          Theme Testing
        </h1>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded border" style={{
            backgroundColor: 'rgb(var(--color-card))',
            color: 'rgb(var(--color-card-foreground))',
            borderColor: 'rgb(var(--color-border))'
          }}>
            <h3 className="font-semibold mb-2">Card</h3>
            <div className="text-sm">Light: Orange → Dark: Red</div>
          </div>
          
          <div className="p-6 rounded" style={{
            backgroundColor: 'rgb(var(--color-secondary))',
            color: 'rgb(var(--color-secondary-foreground))'
          }}>
            <h3 className="font-semibold mb-2">Secondary</h3>
            <div className="text-sm">Light: Yellow → Dark: Orange</div>
          </div>
        </div>
        
        <div className="bg-red-500 p-4 rounded text-white">
          <div className="font-medium">Fixed Red (Never changes)</div>
        </div>
        
        <p>Toggle themes - boxes should change dramatically!</p>
      </div>
    </main>
  )
}
