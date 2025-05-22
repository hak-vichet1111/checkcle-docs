import { ReactNode } from "react";
import { DocSidebar } from "./DocSidebar";
import { DashboardContainer } from "./DashboardContainer";
import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";
import { ThemeProvider } from "./theme-provider";
import { SidebarProvider } from "./ui/sidebar";
import { DocHeader } from "./DocHeader";
import { ThemeToggle } from "./ThemeToggle";

export function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed] = useSidebarCollapsed();

  console.log('The collapsed: ', collapsed);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider className="w-full">
        <div className="flex h-screen w-full">
          <div>
            <DocSidebar />
          </div>
          <main className="flex-1 w-full overflow-y-auto">
            <DashboardContainer>
              <DocHeader />
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              <div className={``}>
                {children}
              </div>
            </DashboardContainer>
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}