
import { useEffect, useState } from "react";

/**
 * Reactively determines if the sidebar is collapsed based on a body class.
 */
// export function useSidebarCollapsed() {
//   const [collapsed, setCollapsed] = useState(
//     typeof window !== "undefined"
//       ? document.body.classList.contains("sidebar-collapsed")
//       : false
//   );

//   useEffect(() => {
//     const observer = new MutationObserver(() => {
//       setCollapsed(document.body.classList.contains("sidebar-collapsed"));
//     });
//     observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
//     setCollapsed(document.body.classList.contains("sidebar-collapsed"));
//     return () => observer.disconnect();
//   }, []);

//   return collapsed;
// }


export function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem("sidebar-collapsed") === "true";
  });


  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  return [collapsed, setCollapsed] as const;
}