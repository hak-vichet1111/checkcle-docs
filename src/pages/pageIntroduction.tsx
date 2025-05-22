import { AppLayout } from "@/components/AppLayout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Server, Clock, Shield, Globe, Bell, Users } from "lucide-react";

const Introduction = () => {
  return (
    <AppLayout>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
            CheckCle
          </h1>
          <div className="flex gap-3 mb-6">
            <Badge variant="secondary">Version 1.1.0</Badge>
            <Badge variant="outline">Open Source</Badge>
          </div>
          <p className="text-xl text-muted-foreground">
            Building innovative solutions for modern development challenges.
          </p>
        </div>
        <Card className="p-6 mb-8 bg-gradient-to-r from-[#1a237e] via-[#4a148c] to-[#311b92] text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-white">Project Description</h2>
          <p className="text-gray-100">
            CheckCle is your ultimate solution for seamless, real-time monitoring of full-stack systems, applications, and infrastructure.
            Designed with precision, it provides developers, sysadmins, and DevOps teams with deep insights and actionable data across
            every layer of their environment—whether it's servers, databases, applications, or services. With CheckCle, you gain visibility,
            control, and the ability to ensure optimal performance throughout your entire technology stack.
          </p>
        </Card>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Server,
              title: "Server Monitoring",
              description: "Monitor server metrics like CPU, RAM, disk, and network usage across Linux and Windows platforms."
            },
            {
              icon: Clock,
              title: "Uptime Monitoring",
              description: "Track service availability and performance for HTTP, TCP, DNS, and Ping protocols."
            },
            {
              icon: Shield,
              title: "SSL & Domain Monitoring",
              description: "Monitor SSL certificates and domain registration status with automated alerts."
            },
            {
              icon: Globe,
              title: "Schedule & Incident Management",
              description: "View and manage planned maintenance windows and incidents for your systems and services"
            },
            {
              icon: Bell,
              title: "Notifications",
              description: "Highly customizable notification channels with alert templates for incidents and thresholds."
            },
            {
              icon: Users,
              title: "User Management",
              description: "Add multiple users with customizable roles and permissions for team collaboration."
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  Vite: Development environment for fast builds
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  React & TypeScript: Dynamic and maintainable UI components
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  Tailwind CSS: Rapid, utility-based design
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  shadcn-ui: Pre-styled components for consistent UX
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <h2>Golang: High-performance language used for building scalable backend logic.</h2>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <h2>SQLite: Embedded, serverless SQL database for simplicity and reliability.</h2>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  PocketBase: Open-source backend framework offering built-in REST API, authentication, real-time updates, and file storage — all in a single executable.
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <div className="rounded-lg border p-6 bg-card/50 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Why CheckCle?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
              Precision: Monitoring is more than just tracking metrics—it's about understanding the context, diagnosing root causes, and optimizing performance.
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
              Community & Support: Our vibrant, open-source community is here to help you succeed. Share knowledge, provide feedback, and contribute to a project that evolves with the needs of its users.
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
              Free & Open: CheckCle is completely open-source, allowing you to modify and adapt it to fit your specific needs without any vendor lock-in.
            </li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
};

export default Introduction;




// import { SidebarProvider } from "@/components/ui/sidebar";
// import { DocSidebar } from "@/components/DocSidebar";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { ThemeProvider } from "@/components/theme-provider";
// import { DocHeader } from "@/components/DocHeader";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Server, Clock, Shield, Globe, Bell, Users } from "lucide-react";
// import { DashboardContainer } from "@/components/DashboardContainer";

// const Introduction = () => {
//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <SidebarProvider>
//         <div className="flex h-screen w-full">
//           <DocSidebar />
//           <main className="flex-1 p-0">
//             {/* DashboardContainer controls the width based on sidebar collapse */}
//             <DashboardContainer>
//               <DocHeader />
//               <div className="flex justify-end mb-4">
//                 <ThemeToggle />
//               </div>
//               <div className="prose prose-slate dark:prose-invert max-w-none">
//                 <div className="mb-12">
//                   <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
//                     CheckCle
//                   </h1>
//                   <div className="flex gap-3 mb-6">
//                     <Badge variant="secondary">Version 1.0.0</Badge>
//                     <Badge variant="outline">Open Source</Badge>
//                   </div>
//                   <p className="text-xl text-muted-foreground">
//                     Building innovative solutions for modern development challenges.
//                   </p>
//                 </div>
//                 <Card className="p-6 mb-8 bg-gradient-to-r from-[#1a237e] via-[#4a148c] to-[#311b92] text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300">
//                   <h2 className="text-2xl font-semibold mb-4 text-white">Project Description</h2>
//                   <p className="text-gray-100">
//                     CheckCle is your ultimate solution for seamless, real-time monitoring of full-stack systems, applications, and infrastructure.
//                     Designed with precision, it provides developers, sysadmins, and DevOps teams with deep insights and actionable data across
//                     every layer of their environment—whether it's servers, databases, applications, or services. With CheckCle, you gain visibility,
//                     control, and the ability to ensure optimal performance throughout your entire technology stack.
//                   </p>
//                 </Card>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                   {[
//                     {
//                       icon: Server,
//                       title: "Server Monitoring",
//                       description: "Monitor server metrics like CPU, RAM, disk, and network usage across Linux and Windows platforms."
//                     },
//                     {
//                       icon: Clock,
//                       title: "Uptime Monitoring",
//                       description: "Track service availability and performance for HTTP, TCP, DNS, and Ping protocols."
//                     },
//                     {
//                       icon: Shield,
//                       title: "SSL & Domain Monitoring",
//                       description: "Monitor SSL certificates and domain registration status with automated alerts."
//                     },
//                     {
//                       icon: Globe,
//                       title: "Website Monitoring",
//                       description: "Check website uptime and response times to identify slow or unresponsive services."
//                     },
//                     {
//                       icon: Bell,
//                       title: "Notifications",
//                       description: "Highly customizable notification channels with alert templates for incidents and thresholds."
//                     },
//                     {
//                       icon: Users,
//                       title: "User Management",
//                       description: "Add multiple users with customizable roles and permissions for team collaboration."
//                     }
//                   ].map((feature, index) => (
//                     <Card key={index} className="p-6 hover:shadow-lg transition-all group">
//                       <div className="flex items-start gap-4">
//                         <div className="p-2 rounded-lg bg-primary/10 text-primary">
//                           <feature.icon className="w-6 h-6" />
//                         </div>
//                         <div>
//                           <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
//                             {feature.title}
//                           </h3>
//                           <p className="text-sm text-muted-foreground">
//                             {feature.description}
//                           </p>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>
//                 <Card className="p-6 mb-8">
//                   <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <h3 className="text-lg font-medium mb-3">Frontend</h3>
//                       <ul className="space-y-2 text-muted-foreground">
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           Vite: Development environment for fast builds
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           React & TypeScript: Dynamic and maintainable UI components
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           Tailwind CSS: Rapid, utility-based design
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           shadcn-ui: Pre-styled components for consistent UX
//                         </li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-medium mb-3">Backend</h3>
//                       <ul className="space-y-2 text-muted-foreground">
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           <h2>Golang: High-performance language used for building scalable backend logic.</h2>
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           <h2>SQLite: Embedded, serverless SQL database for simplicity and reliability.</h2>
//                         </li>
//                         <li className="flex items-center gap-2">
//                           <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                           PocketBase: Open-source backend framework offering built-in REST API, authentication, real-time updates, and file storage — all in a single executable.
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </Card>
//                 <div className="rounded-lg border p-6 bg-card/50 backdrop-blur-sm">
//                   <h2 className="text-2xl font-semibold mb-4">Why CheckCle?</h2>
//                   <ul className="space-y-3 text-muted-foreground">
//                     <li className="flex items-center gap-2">
//                       <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                       Precision: Monitoring is more than just tracking metrics—it's about understanding the context, diagnosing root causes, and optimizing performance.
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                       Community & Support: Our vibrant, open-source community is here to help you succeed. Share knowledge, provide feedback, and contribute to a project that evolves with the needs of its users.
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
//                       Free & Open: CheckCle is completely open-source, allowing you to modify and adapt it to fit your specific needs without any vendor lock-in.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </DashboardContainer>
//           </main>
//         </div>
//       </SidebarProvider>
//     </ThemeProvider>
//   );
// };

// export default Introduction;
