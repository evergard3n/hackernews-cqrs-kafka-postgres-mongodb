import SideNav from "../ui/components/home/sidenav";
import { UserProvider } from "../lib/currentUserContext";
import { lusitana, inter } from "../ui/fonts";
export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    
      <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden bg-zinc-100 ${inter.className} antialiased`}>
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto">
          {children}
        </div>
      </div>
    
  );
}
