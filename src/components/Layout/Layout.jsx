import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-darkGray transition-colors">
      <Header />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}
