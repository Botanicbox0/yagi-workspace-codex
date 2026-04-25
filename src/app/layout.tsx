import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "YAGI Workspace",
  description: "Canvas-first collaboration OS for YAGI visual production.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
