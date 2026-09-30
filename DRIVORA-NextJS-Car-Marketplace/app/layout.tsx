import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRIVORA — Modern Car Marketplace",
  description: "Buy, sell and finance vehicles with DRIVORA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="brand footer-brand"><span className="brand-mark">D</span><span>DRIVORA</span></div>
              <p>Buy. Sell. Drive. A modern marketplace for vehicles.</p>
            </div>
            <div><h4>Marketplace</h4><a href="/inventory">Inventory</a><a href="/sell">Sell a car</a><a href="/favorites">Favorites</a></div>
            <div><h4>Services</h4><a href="/finance">Finance</a><a href="/dashboard">Dashboard</a><a href="#">Inspection</a></div>
            <div><h4>Support</h4><a href="#">Contact</a><a href="#">Help Center</a><a href="#">Terms & Privacy</a></div>
          </div>
          <div className="footer-bottom">© 2026 DRIVORA. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
