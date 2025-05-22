import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppLayout } from "@/components/AppLayout";

const Hosting = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Hosting Options</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Explore various hosting solutions for deploying your CheckCle application.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Developer Hosting</CardTitle>
              <CardDescription>Perfect for client-side applications</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge>Vercel</Badge>
                  <span className="text-muted-foreground">Zero-config deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Digital Ocean</Badge>
                  <span className="text-muted-foreground">Automated builds & deploys</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Vultr</Badge>
                  <span className="text-muted-foreground">Free hosting for static sites</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cloud Platforms</CardTitle>
              <CardDescription>For full-stack applications</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge>AWS</Badge>
                  <span className="text-muted-foreground">Scalable cloud infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Google Cloud</Badge>
                  <span className="text-muted-foreground">Enterprise-grade hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge>Azure</Badge>
                  <span className="text-muted-foreground">Microsoft's cloud platform</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Deployment Steps</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">1. Build Your Application</h3>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <p>npm run build</p>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">2. Configure Environment Variables</h3>
              <p className="text-muted-foreground">Set up environment variables in your hosting platform</p>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold mb-2">3. Deploy</h3>
              <p className="text-muted-foreground">Push to your repository or use the hosting platform's CLI</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Continuous Deployment</h2>
          <div className="rounded-xl border bg-card p-6">
            <p className="text-muted-foreground mb-4">
              Set up automated deployments using GitHub Actions or your hosting platform's CI/CD tools.
            </p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <pre>{`name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build`}</pre>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default Hosting;