import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Languages, Paintbrush, Palette, Moon, Sun, Layout } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AppLayout } from "@/components/AppLayout";

const Styling = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
          Add New Language
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Learn how to style your components using Tailwind CSS and shadcn/ui components.
        </p>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Add New Language</h2>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground text-sm">
                How to add a new language to the application or update an existing one. Belove are the steps to add German language.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Step 1: Add Language Option */}
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">1. Add Language Option</h4>
                  <p className="text-sm text-muted-foreground">
                    File: <code className="font-mono">application/src/components/dashboard/Header.tsx</code>
                  </p>
                  <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                    {`<DropdownMenuContent align="end">
  <DropdownMenuItem 
    onClick={() => setLanguage("de")} 
    className={language === "de" ? "bg-accent" : ""}
  >
    {t("German")}
  </DropdownMenuItem>
</DropdownMenuContent>`}
                  </pre>
                </div>

                {/* Step 2: Add Translations */}
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">2. Add Translation Strings</h4>
                  <p className="text-sm text-muted-foreground">
                    File: <code className="font-mono">application/src/translations/de.ts</code>
                  </p>
                  <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                    {`language: "Sprache",
english: "Englisch",
khmer: "Khmer",
german: "German",
goodMorning: "Guten Morgen",
goodAfternoon: "Guten Nachmittag",
goodEvening: "Guten Abend",
... `}
                  </pre>
                </div>
              </div>
            </div>

          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Paintbrush className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Tailwind CSS Integration</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Tailwind CSS provides utility classes for rapid UI development:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Layout & Spacing</h3>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
                    {`<div className="p-4 m-2 space-y-4">
  <div className="flex gap-2">
    <span className="w-full">
      Content
    </span>
  </div>
</div>`}
                  </pre>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Colors & Typography</h3>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
                    {`<div className="bg-primary text-white
  hover:bg-primary/80
  dark:bg-slate-800">
  <p className="text-lg font-bold">
    Title
  </p>
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Theme Customization</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Customize your theme in tailwind.config.ts:
              </p>
              <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
                {`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <Sun className="w-6 h-6 text-primary" />
                <Moon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Dark Mode</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Dark mode is supported out of the box:
              </p>
              <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
                {`<div className="
  bg-white dark:bg-slate-900
  text-black dark:text-white
">
  Content
</div>`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Layout className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Responsive Design</h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Built-in responsive breakpoints:
              </p>
              <pre className="text-sm bg-muted p-3 rounded overflow-x-auto">
                {`<div className="
  grid
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4
">
  {/* Content */}
</div>`}
              </pre>
            </div>
          </Card>

          <Alert className="mt-6">
            <AlertDescription>
              Remember to always use Tailwind's utility classes instead of writing custom CSS when possible.
              This helps maintain consistency across your application.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </AppLayout>
  );
};

export default Styling;