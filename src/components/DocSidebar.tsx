import { BookOpen, FileCode, Rocket, Search, Settings, Layout, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Blocks, Code2, Upload, Wrench, Image, Trash2, Terminal, Bug, Computer, Server, Database, CloudUpload, Variable, PackageSearch, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import "./DocSidebar.css";
import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";

const menuItems = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { name: "Introduction", path: "/introduction", icon: BookOpen },
      { name: "Screenshots", path: "/screenshots", icon: Image },
      // { name: "Quick Start", path: "/quick-start", icon: FileCode },
      { name: "Installation", path: "/installation", icon: Blocks },
      { name: "Uninstall", path: "/uninstall", icon: Trash2 },
    ],
  },
  {
    title: "Development",
    icon: Code2,
    items: [
      { name: "Project Structure", path: "/project-structure", icon: Computer },
    //  { name: "Add New Language", path: "/add-feature", icon: Terminal },
    //  { name: "TypeScript", path: "/typescript", icon: Bug },
    ],
  },
  {
    title: "Deployment",
    icon: Upload,
    items: [
    //  { name: "Build Process", path: "/build-process", icon: Server },
      { name: "Hosting", path: "/hosting", icon: CloudUpload },
      { name: "Custom Domain", path: "/custom-domain", icon: Database },
    ],
  },
  {
    title: "Configuration",
    icon: Wrench,
    items: [
    //    { name: "Environment Variables", path: "/environment-variables", icon: Variable },
      { name: "Dependencies", path: "/dependencies", icon: PackageSearch },
     //   { name: "Performance", path: "/performance", icon: Gauge },
    ],
  },
];

export function DocSidebar() {
  const { setOpen } = useSidebar();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // vichet update 
  const [isCollapsed, setIsCollapsed] = useSidebarCollapsed();
  console.log('Collapse state: ', isCollapsed);


  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setIsAtTop(scrollTop <= 0);
      setIsAtBottom(Math.ceil(scrollTop + clientHeight) >= scrollHeight);
      setShowScrollButtons(scrollHeight > clientHeight);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'up' | 'down') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientHeight * 0.3;
      container.scrollBy({
        top: direction === 'up' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleCollapse = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    // Always keep the sidebar open in the global state
    // Our CSS will handle the visual appearance
    setOpen(true);

    // Update body class to sync with dashboard
    if (newCollapsedState) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  };

  // Ensure body class is updated on mount/unmount
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add('sidebar-collapsed');
    }

    return () => {
      document.body.classList.remove('sidebar-collapsed');
    };
  }, [isCollapsed]);


  return (
    <div>
      <div className="flex flex-col h-full w-full">
        {/* Top section */}
        <div className="w-full px-2 py-2 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCollapse}
            className="flex-shrink-0 opacity-50 cursor-not-allowed"
          // disabled
          // title="Collapse temporarily disabled"
          // aria-disabled="true"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>

          {!isCollapsed && (
            <div className="relative w-full">
              <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search..."
                className="w-full rounded-md border border-border bg-background px-8 py-1.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          )}
        </div>

        {/* Scrollable menu section */}
        <div className="relative flex-1 w-full">
          {showScrollButtons && !isAtTop && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-accent hover:text-accent-foreground dark:bg-background/90"
              onClick={() => scroll('up')}
            >
              <ChevronUp className="h-3 w-3" />
            </Button>
          )}

          <div
            ref={scrollContainerRef}
            className="overflow-y-auto w-full max-h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent hover:scrollbar-thumb-muted/80 transition-colors"
            onScroll={checkScroll}
          >
            {menuItems.map((section) => (
              <SidebarGroup key={section.title} className="bg-background w-full">
                {!isCollapsed && (
                  <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-2 py-1">
                    {section.title}
                  </SidebarGroupLabel>
                )}
                <SidebarGroupContent className="bg-background w-full">
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.path}
                            className={`flex items-center gap-2 text-foreground hover:text-accent-foreground px-2 py-1 ${isCollapsed ? 'justify-center' : ''
                              }`}
                          >
                            {item.icon ? (
                              <item.icon className="h-4 w-4" />
                            ) : (
                              <section.icon className="h-4 w-4" />
                            )}
                            {/* {!isCollapsed && <span>{item.name}</span>} */}
                            {!isCollapsed && <span>{item.name}</span>}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </div>

          {showScrollButtons && !isAtBottom && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-accent hover:text-accent-foreground dark:bg-background/90"
              onClick={() => scroll('down')}
            >
              <ChevronDown className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
