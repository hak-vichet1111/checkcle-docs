import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Code2, FileCode, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AppLayout } from "@/components/AppLayout";

const TypeScript = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
          TypeScript Guide
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Learn how to leverage TypeScript for type-safe development in your CheckCle project.
        </p>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Type Definitions</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Common TypeScript patterns used throughout the project:
              </p>
              <div className="bg-muted p-4 rounded-lg space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Component Props</h3>
                  <pre className="text-sm bg-background p-3 rounded">
                    {`interface ButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
}`}
                  </pre>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-2">Custom Types</h3>
                  <pre className="text-sm bg-background p-3 rounded">
                    {`type Theme = "light" | "dark" | "system";

type User = {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
};`}
                  </pre>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileCode className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Type Safety</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold">Good Practices</h3>
                </div>
                <pre className="text-sm bg-muted p-3 rounded">
                  {`// Use explicit types
const user: User = {
  id: "1",
  name: "John",
  email: "john@example.com"
};

// Type inference
const items = ["a", "b", "c"];`}
                </pre>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <h3 className="font-semibold">Avoid</h3>
                </div>
                <pre className="text-sm bg-muted p-3 rounded">
                  {`// Don't use any
const data: any = fetchData();

// Avoid type assertions
const value = someValue as any;`}
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">React & TypeScript</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                TypeScript with React components and hooks:
              </p>
              <pre className="text-sm bg-muted p-3 rounded">
                {`// Function Component
const Header: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => (
  <header>{title}</header>
);

// Custom Hook
const useCounter = (initial: number) => {
  const [count, setCount] = 
    useState<number>(initial);
  return { count, setCount };
};`}
              </pre>
            </div>
          </Card>

          <Alert>
            <AlertDescription>
              Enable strict mode in tsconfig.json for better type safety and catch potential issues early in development.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </AppLayout>
  );
};

export default TypeScript;