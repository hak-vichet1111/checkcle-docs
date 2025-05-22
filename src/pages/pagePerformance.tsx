import { SidebarProvider } from "@/components/ui/sidebar";
import { DocSidebar } from "@/components/DocSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { DocHeader } from "@/components/DocHeader";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gauge, Zap, LineChart, Clock } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";

const Performance = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">Performance Optimization</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to optimize your CheckCle application for maximum performance.
        </p>

        <Tabs defaultValue="build" className="w-full">
          <TabsList>
            <TabsTrigger value="build">Build Optimization</TabsTrigger>
            <TabsTrigger value="runtime">Runtime Performance</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="build" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Build Optimization</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Code splitting and lazy loading</li>
                    <li>• Tree shaking unused code</li>
                    <li>• Minification and compression</li>
                    <li>• Asset optimization</li>
                  </ul>
                  <pre className="bg-muted p-4 rounded-lg mt-4">
                    {`// Example of code splitting
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyComponent />
    </Suspense>
  );
}`}
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="runtime" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Runtime Performance</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Memoization with useMemo and useCallback</li>
                    <li>• Virtual list rendering for large datasets</li>
                    <li>• Image optimization and lazy loading</li>
                    <li>• Service Worker implementation</li>
                  </ul>
                  <pre className="bg-muted p-4 rounded-lg mt-4">
                    {`// Example of memoization
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Example of useCallback
const handleClick = useCallback(() => {
  // Handle click event
}, []);`}
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <LineChart className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Performance Monitoring</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Web Vitals tracking</li>
                    <li>• Error monitoring and reporting</li>
                    <li>• Performance metrics collection</li>
                    <li>• User experience monitoring</li>
                  </ul>
                  <pre className="bg-muted p-4 rounded-lg mt-4">
                    {`// Example of Web Vitals monitoring
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // Send metrics to analytics
  console.log(\`Metric: \${name} \${delta} (\${id})\`);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);`}
                  </pre>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Performance;