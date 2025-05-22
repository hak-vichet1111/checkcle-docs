import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

const BuildProcess = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Build Process</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Understanding the build process and deployment workflow for your CheckCle application.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Development Build</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-4">
              <p>npm run dev</p>
            </div>
            <p className="text-muted-foreground">
              Starts the development server with hot module replacement (HMR) enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Production Build</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-4">
              <p>npm run build</p>
            </div>
            <p className="text-muted-foreground mb-4">
              Creates an optimized production build in the dist/ directory.
            </p>

            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Build Output</AlertTitle>
              <AlertDescription>
                The production build process:
                <ul className="list-disc list-inside mt-2">
                  <li>Minifies JavaScript and CSS</li>
                  <li>Optimizes images and assets</li>
                  <li>Generates source maps</li>
                  <li>Creates a dist/ directory with deployable files</li>
                </ul>
              </AlertDescription>
            </Alert>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Environment Configuration</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">Uses .env.development for local development variables</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">Production</h3>
                <p className="text-muted-foreground">Uses .env.production for deployment variables</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Build Scripts</h2>
            <div className="space-y-4">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">npm run build:dev</h3>
                <p className="text-muted-foreground">Creates a development build with source maps</p>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-lg font-semibold mb-2">npm run preview</h3>
                <p className="text-muted-foreground">Previews the production build locally</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
};

export default BuildProcess;