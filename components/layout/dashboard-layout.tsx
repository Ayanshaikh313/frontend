import Sidebar from "./sidebar";
import Navbar from "./navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}