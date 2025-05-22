import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { AppLayout } from "@/components/AppLayout";

const Screenshots = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Screenshots</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Visual overview of CheckCle's key features and interfaces.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img
              src="./uploads/dashboard-overview.png"
              alt="Dashboard Overview"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
            <h3 className="text-xl font-semibold">Dashboard Overview</h3>
            <p className="text-muted-foreground">
              The main dashboard interface showing key metrics and monitoring status.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="./uploads/monitoring-detail.png"
              alt="Monitoring Interface"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
            <h3 className="text-xl font-semibold">Monitoring Details</h3>
            <p className="text-muted-foreground">
              Real-time monitoring and alerting system interface.
            </p>
          </div>

          <div className="space-y-4">
            <img
              src="./uploads/ssl-check.png"
              alt="Monitoring Interface"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
            <h3 className="text-xl font-semibold">SSL & Domain</h3>
            <p className="text-muted-foreground">
              CheckCle's SSL and domain management interface.
            </p>
          </div>

          {/* <div className="space-y-4">
                    <img
                      src="/photo-1486312338219-ce68d2c6f44d"
                      alt="Configuration Panel"
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                    <h3 className="text-xl font-semibold">Configuration Panel</h3>
                    <p className="text-muted-foreground">
                      Easy-to-use configuration interface for system settings.
                    </p>
                  </div> */}

          {/* <div className="space-y-4">
                    <img
                      src="/photo-1498050108023-c5249f4df085"
                      alt="Analytics Dashboard"
                      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    />
                    <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">
                      Comprehensive analytics and reporting interface.
                    </p>
                  </div> */}
        </div>
      </div>
    </AppLayout>
  );
};

export default Screenshots;


