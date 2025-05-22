export function DocContent() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none p-4">
      <section id="introduction" className="mb-8 space-y-6">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
          CheckCle Documentation
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed">
          Welcome to the comprehensive documentation for CheckCle project. This guide will help you understand
          the project structure, available features, and how to get started quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Built with Vite and React
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                TypeScript for type safety
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Tailwind CSS for styling
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                shadcn/ui component library
              </li>
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Modern UI Components
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Dark/Light Mode Support
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Responsive Design
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary"></span>
                Fast Development
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quick-start" className="mb-8">
        <div className="rounded-xl border bg-card/50 p-6 backdrop-blur-sm">
          <p className="text-lg mb-4 text-muted-foreground">
            Get started with development in just a few steps:
          </p>
          <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
            <p className="text-muted-foreground"># Clone the repository</p>
            <p>git clone &lt;your-repo-url&gt;</p>
            <p className="text-muted-foreground"># Install dependencies</p>
            <p>npm install</p>
            <p className="text-muted-foreground"># Start development server</p>
            <p>npm run dev</p>
          </div>
        </div>
      </section>

      <section id="deployment" className="mb-8">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <p className="text-lg mb-4 text-muted-foreground">
            Deploy your project easily with CheckCle or your preferred hosting platform:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["CheckCle Platform", "Netlify", "Vercel", "GitHub Pages"].map((platform) => (
              <div key={platform} className="rounded-lg bg-muted p-4 text-center font-medium">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
