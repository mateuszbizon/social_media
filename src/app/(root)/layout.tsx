export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex">
        <aside className="w-[300px] h-screen sticky top-0 bg-white">

        </aside>
        <div className="grow">
            {children}
        </div>
      </main>
    );
  }