import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PackageSearch, RefreshCw, Shield } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

const Dependencies = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Dependencies Management</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to manage and maintain project dependencies effectively.
        </p>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Core Dependencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Frontend Framework</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="default">react</Badge>
                    <span className="text-muted-foreground">^18.3.1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="default">react-dom</Badge>
                    <span className="text-muted-foreground">^18.3.1</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Build Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge variant="default">vite</Badge>
                    <span className="text-muted-foreground">^5.4.1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="default">typescript</Badge>
                    <span className="text-muted-foreground">^5.5.3</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Dependency Management</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Updating Dependencies</h3>
                  <p className="text-muted-foreground">
                    Regularly update dependencies to get the latest features and security patches:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg mt-2">
                    {`npm update        # Update all dependencies
npm outdated     # Check for outdated packages
npm audit       # Security vulnerability check`}
                  </pre>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium">Security and Maintenance</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Regularly run security audits</li>
                    <li>Keep dependencies up to date</li>
                    <li>Use exact versions for critical dependencies</li>
                    <li>Review changelogs before major updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dependencies;