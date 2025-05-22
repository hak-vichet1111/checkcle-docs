import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/components/AppLayout";

const CustomDomain = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Custom Domain Setup</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to configure a custom domain for your CheckCle application.
        </p>

        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertTitle>Important Note</AlertTitle>
          <AlertDescription>
            Before starting, ensure you have purchased a domain from a domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="dns" className="w-full mb-8">
          <TabsList>
            <TabsTrigger value="dns">DNS Configuration</TabsTrigger>
            <TabsTrigger value="ssl">SSL Setup</TabsTrigger>
            <TabsTrigger value="subdomain">Subdomains</TabsTrigger>
          </TabsList>

          <TabsContent value="dns" className="space-y-4">
            <h2 className="text-2xl font-semibold">DNS Configuration</h2>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Add DNS Records</h3>
              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-mono mb-2">A Record:</p>
                  <p className="text-muted-foreground">
                    Host: @<br />
                    Points to: [Your Server IP]<br />
                    TTL: 3600
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="font-mono mb-2">CNAME Record:</p>
                  <p className="text-muted-foreground">
                    Host: www<br />
                    Points to: @<br />
                    TTL: 3600
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ssl" className="space-y-4">
            <h2 className="text-2xl font-semibold">SSL Certificate Setup</h2>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Let's Encrypt Configuration</h3>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm mb-4">
                <pre>{`sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`}</pre>
              </div>
              <p className="text-muted-foreground">
                This command will automatically obtain and configure SSL certificates for your domain.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="subdomain" className="space-y-4">
            <h2 className="text-2xl font-semibold">Subdomain Configuration</h2>
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Add Subdomain Records</h3>
              <div className="bg-muted rounded-lg p-4">
                <p className="font-mono mb-2">CNAME Record for subdomain:</p>
                <p className="text-muted-foreground">
                  Host: blog<br />
                  Points to: yourdomain.com<br />
                  TTL: 3600
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Verification Steps</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">1. DNS Propagation</h3>
              <p className="text-muted-foreground">
                Check DNS propagation using online tools like whatsmydns.net
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">2. SSL Verification</h3>
              <p className="text-muted-foreground">
                Verify SSL certificate installation using SSL checker tools
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">3. Domain Resolution</h3>
              <p className="text-muted-foreground">
                Ensure your domain resolves to your application correctly
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default CustomDomain;