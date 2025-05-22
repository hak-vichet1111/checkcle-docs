
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { DashboardContainer } from "@/components/DashboardContainer";

const QuickStart = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <DocSidebar />
          <main className="flex-1 p-0">
            {/* DashboardContainer ensures the width tracks sidebar state */}
            <DashboardContainer>
              <DocHeader />
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <section id="quick-start" className="mb-16">
                <h2 className="text-3xl font-semibold mb-6">Quick Start</h2>
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
            </DashboardContainer>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default QuickStart;
