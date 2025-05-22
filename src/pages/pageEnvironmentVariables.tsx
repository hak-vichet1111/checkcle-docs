import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Key, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AppLayout } from "@/components/AppLayout";

const EnvironmentVariables = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Environment Variables</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to manage environment variables in your CheckCle application.
        </p>

        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Security Notice</AlertTitle>
          <AlertDescription>
            Never commit sensitive environment variables to version control. Use secure methods to manage your secrets.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Local Development</h2>
            <p className="mb-4">
              For local development, CheckCle uses Vite's built-in environment variable handling. Create a <code>.env</code> file in your project root:
            </p>
            <pre className="bg-muted p-4 rounded-lg">
              {`VITE_API_URL=http://localhost:3000
VITE_APP_NAME=CheckCle
VITE_DEBUG=true`}
            </pre>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Production Configuration</h2>
            <p className="mb-4">
              For production deployments, set environment variables through your hosting platform's configuration interface.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Common Production Variables:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>VITE_API_URL - Backend API endpoint</li>
                <li>VITE_APP_ENV - Application environment (production/staging)</li>
                <li>VITE_ANALYTICS_ID - Analytics tracking ID</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Usage in Code</h2>
            <p className="mb-4">Access environment variables in your code using the <code>import.meta.env</code> object:</p>
            <pre className="bg-muted p-4 rounded-lg">
              {`// Access environment variables
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
const isDebug = import.meta.env.VITE_DEBUG`}
            </pre>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default EnvironmentVariables;