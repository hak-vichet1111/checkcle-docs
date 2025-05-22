import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Zap, Layout, Box } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Modern Tech Stack",
      description: "Built with React, TypeScript, and Vite for lightning-fast development",
      icon: Code,
      color: "text-blue-500",
    },
    {
      title: "Beautiful UI Components",
      description: "Powered by shadcn/ui with seamless dark mode support",
      icon: Palette,
      color: "text-purple-500",
    },
    {
      title: "Performance Optimized",
      description: "Optimized for speed and efficiency with modern build tools",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layouts that work on all devices",
      icon: Layout,
      color: "text-green-500",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <DocSidebar />
          <main className="flex-1 overflow-auto">
            <div className="container relative max-w-7xl mx-auto p-4">
              <DocHeader />
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <div className="max-w-3xl mb-12">
                  <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Features Dashboard
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Explore the powerful features and capabilities of our modern documentation platform.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all group">
                      <div className="flex items-start gap-4">
                        <div className={`${feature.color} p-3 rounded-lg bg-background/80 backdrop-blur-sm`}>
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <div className="flex items-center gap-4">
                          <Box className="w-5 h-5 text-primary" />
                          <div>
                            <h4 className="font-medium">Feature Update {item}</h4>
                            <p className="text-sm text-muted-foreground">New capabilities and improvements</p>
                          </div>
                        </div>
                        <Badge variant="secondary">New</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Features;
