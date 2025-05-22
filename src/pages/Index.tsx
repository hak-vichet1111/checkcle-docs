
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { DocContent } from "@/components/DocContent";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";

const DashboardContent = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    typeof window !== "undefined"
      ? document.body.classList.contains("sidebar-collapsed")
      : false
  );

  useEffect(() => {
    // Handler to update collapsed state when class changes
    const observer = new MutationObserver(() => {
      setSidebarCollapsed(document.body.classList.contains("sidebar-collapsed"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    // Initial set (in case it's set before this code runs)
    setSidebarCollapsed(document.body.classList.contains("sidebar-collapsed"));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-1 overflow-auto transition-all duration-300">
      <div
        className={`container mx-auto transition-all duration-300 ${
          sidebarCollapsed ? "max-w-full px-4" : "max-w-7xl"
        }`}
      >
        <DocHeader />
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <DocContent />
      </div>
    </main>
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-secondary/5">
          <DocSidebar />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
