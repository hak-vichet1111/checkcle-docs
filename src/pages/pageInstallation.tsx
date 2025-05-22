import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppLayout } from "@/components/AppLayout";

const Installation = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Choose your preferred installation method below.
        </p>

        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
         {/*   <TabsTrigger value="npm">Local Development</TabsTrigger> */}
            <TabsTrigger value="docker-compose">Docker Compose</TabsTrigger>
            <TabsTrigger value="docker">Docker Run Command</TabsTrigger>
          </TabsList>

         {/* <TabsContent value="npm" className="space-y-4">
            <h2 className="text-2xl font-semibold">NPM Installation</h2>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-muted-foreground"># Clone the repository</p>
                <p>git clone https://github.com/operacle/CheckCle.git</p>
              </div>
              <div>
                <p className="text-muted-foreground"># Install dependencies</p>
                <p>npm install</p>
              </div>
              <div>
                <p className="text-muted-foreground"># Start development server</p>
                <p>npm run dev</p>
              </div>
            </div>
          </TabsContent>*/}

          <TabsContent value="docker" className="space-y-4">
            <h2 className="text-2xl font-semibold">Docker Installation</h2>
            <p>Run CheckCle using Docker with these simple steps:</p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-4">
              <div>
                <p className="text-muted-foreground"># Create Docker Volume for data persistence</p>
                <p>docker volume create pb_data</p>
              </div>
              <div>
                <p className="text-muted-foreground"># Docker Run Command</p>
                <p>docker run --name checkcle --restart unless-stopped -p 8090:8090 -v pb_data:/app/pb_data --ulimit nofile=4096:8192 operacle/checkcle:latest
                </p>
              </div>
            </div>
            <div className="bg-card p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-2">Admin Web Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Default URL: http://0.0.0.0:8090 </li>
                <li>User: admin@example.com Passwd: Admin123456</li>
              </ul>
            </div>
            {/* <div className="bg-card p-4 rounded-lg mt-4">
                      <h3 className="text-lg font-semibold mb-2">Environment Variables</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>PORT: Application port (default: 3000)</li>
                        <li>NODE_ENV: Environment mode (development/production)</li>
                        <li>DATABASE_URL: Database connection string</li>
                      </ul>
                    </div> */}
          </TabsContent>

          <TabsContent value="docker-compose" className="space-y-4">
            <h2 className="text-2xl font-semibold">Docker Compose Installation</h2>
            <p>Use Docker Compose to run CheckCle with all its dependencies:</p>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-2">
              <p className="text-muted-foreground"># Create docker-compose.yml</p>
              <pre className="whitespace-pre-wrap">
                {`services:
  checkcle:
    image: operacle/checkcle:latest
    container_name: checkcle
    restart: unless-stopped
    ports:
      - "8090:8090"  # Web Application
    volumes:
      - pb_data:/app/pb_data  # Ensure persistent data across rebuilds
    ulimits:
      nofile:
        soft: 4096
        hard: 8192

volumes:
  pb_data:  # Docker-managed volume for data persistence
  
`}
              </pre>
              <p className="text-muted-foreground mt-4"># Start the services</p>
              <p>docker-compose up -d</p>
            </div>
             <div className="bg-card p-4 rounded-lg mt-4">
              <h3 className="text-lg font-semibold mb-2">Admin Web Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Default URL: http://0.0.0.0:8090 </li>
                <li>User: admin@example.com Passwd: Admin123456</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Installation;