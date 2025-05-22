import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DatabaseZap, Folder, FileCode, GitBranch, Package } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

const ProjectStructure = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
          Project Structure
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Understanding the organization and layout of your CheckCle project files and directories.
        </p>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Folder className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Root Directory Structure</h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`project-root/
├── application/        # application and service management
├── docker/             # docker for development and production
├── server/             # server api backend
├── scripts/            # bash script
└── docker-compose.yml  # Docker Compose file`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileCode className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Source Directory (/src)</h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`src/
├── components/      # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── lib/             # Third-party library configs
├── types/           # TypeScript type definitions
└── App.tsx          # Root component`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <DatabaseZap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Backend Directory</h2>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                {`server/
├── pb_data         # Stores application data such as database
├── pb_migrations   # Contains database migration scripts for schema updates
└── pocketbase      # PocketBase executable or entry point to run the backend`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Key Configuration Files</h2>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">vite.config.ts</h3>
                  <p className="text-sm text-muted-foreground">
                    Vite configuration including plugins, aliases, and build options
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">tsconfig.json</h3>
                  <p className="text-sm text-muted-foreground">
                    TypeScript compiler options and path aliases
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">tailwind.config.ts</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailwind CSS configuration and theme customization
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">package.json</h3>
                  <p className="text-sm text-muted-foreground">
                    Project metadata and dependencies
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Keep components small and focused on a single responsibility</li>
                <li>Use consistent naming conventions for files and folders</li>
                <li>Group related files together in feature-specific directories</li>
                <li>Maintain a clear separation between UI components and business logic</li>
                <li>Use index files to simplify imports from directories</li>
                <li>Keep configuration files at the root level</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectStructure;