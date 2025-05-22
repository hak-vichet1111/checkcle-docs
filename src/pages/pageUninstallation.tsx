import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

const Uninstall = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Uninstall CheckCle</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Follow these steps to completely remove CheckCle from your system.
        </p>

        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            This process will remove CheckCle and all its data. Make sure to backup any important information before proceeding.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          {/* <section>
                    <h2 className="text-2xl font-semibold mb-4">NPM Installation</h2>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
                      <p className="text-muted-foreground"># Remove the package</p>
                      <p>npm uninstall CheckCle</p>
                      <p className="text-muted-foreground"># Remove global installation (if installed globally)</p>
                      <p>npm uninstall -g CheckCle</p>
                    </div>
                  </section> */}

          <section>
            <h2 className="text-2xl font-semibold mb-4">Docker Installation</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-muted-foreground"># Stop and remove the container</p>
                <p>docker stop CheckCle</p>
                <p>docker rm CheckCle</p>
              </div>
              <div>
                <p className="text-muted-foreground"># Remove the image</p>
                <p>docker rmi CheckCle/CheckCle:latest</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Docker Compose Installation</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-muted-foreground"># Stop and remove containers</p>
                <p>docker-compose down</p>
              </div>
              <div>
                <p className="text-muted-foreground"># Remove volumes (optional)</p>
                <p>docker-compose down -v</p>
              </div>
            </div>
          </section>

          {/* <section>
                    <h2 className="text-2xl font-semibold mb-4">Cleanup Steps</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Remove configuration files from <code>/etc/CheckCle</code></li>
                      <li>Remove data directory at <code>/var/lib/CheckCle</code></li>
                      <li>Remove log files from <code>/var/log/CheckCle</code></li>
                      <li>Remove environment files <code>.env</code> and <code>.env.local</code></li>
                    </ul>
                  </section> */}
        </div>
      </div>
    </AppLayout>
  );
};

export default Uninstall;