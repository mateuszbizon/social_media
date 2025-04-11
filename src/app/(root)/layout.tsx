import MobileNavigation from "@/components/common/MobileNavigation";
import Sidebar from "@/components/common/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex">
        <Sidebar />
        <div className="grow">
            <div className="w-full max-w-[900px] px-5 mx-auto">
                {children}
            </div>
        </div>
        <MobileNavigation />
      </main>
    );
  }