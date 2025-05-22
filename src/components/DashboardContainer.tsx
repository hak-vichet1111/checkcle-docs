
import { ReactNode } from "react";
import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";

/**
 * A dashboard container that expands to full width if the sidebar is collapsed,
 * or uses container width (max-w-7xl etc) if expanded.
 */
// export function DashboardContainer({ children }: { children: ReactNode }) {
//   const collapsed = useSidebarCollapsed();

//   return (
//     <div
//       className={`relative p-4 transition-all duration-300 ${collapsed
//           ? "w-full max-w-none"
//           : "container max-w-7xl"
//         }`}
//     >
//       {children}
//     </div>
//   );
// }


export function DashboardContainer({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}
