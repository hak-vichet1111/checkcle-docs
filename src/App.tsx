import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Introduction from "./pages/pageIntroduction";
import QuickStart from "./pages/QuickStart";
import Installation from "./pages/pageInstallation";
import Screenshots from "./pages/pageScreenshot";
import Uninstall from "./pages/pageUninstallation";
import ProjectStructure from "./pages/pageProjectStructure";
import TypeScript from "./pages/pageTypeScript"
import BuildProcess from "./pages/pageBuildProcess";
import Hosting from "./pages/pageHosting";
import CustomDomain from "./pages/pageCustomDomain";
import EnvironmentVariables from "./pages/pageEnvironmentVariables";
import Dependencies from "./pages/pageDependencies";
import Performance from "./pages/pagePerformance";
import AddFeature from "./pages/pageAddFeatureGuide";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/introduction" replace />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/uninstall" element={<Uninstall />} />
          <Route path="/project-structure" element={<ProjectStructure />} />
          <Route path="/typescript" element={<TypeScript />} />
          <Route path="/build-process" element={<BuildProcess />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/custom-domain" element={<CustomDomain />} />
          <Route path="/environment-variables" element={<EnvironmentVariables />} />
          <Route path="/dependencies" element={<Dependencies />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/add-feature" element={<AddFeature />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;