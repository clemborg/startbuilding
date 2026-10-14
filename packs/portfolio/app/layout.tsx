import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.pitch,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap" style={{ maxWidth: "42rem", margin: "0 auto", padding: "1.5rem" }}>
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
