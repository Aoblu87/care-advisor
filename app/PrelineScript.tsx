"use client";

import { usePathname } from "next/navigation";
import { IStaticMethods } from "preline";
import { useEffect } from "react";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    // Verifica che window.HSStaticMethods sia definito prima di chiamare autoInit
    if (
      typeof window !== "undefined" &&
      window.HSStaticMethods &&
      window.HSStaticMethods.autoInit
    ) {
      setTimeout(() => {
        window.HSStaticMethods.autoInit();
      }, 100);
    }
  }, [path]);

  return null;
}
