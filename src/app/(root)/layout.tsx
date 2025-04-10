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
            <div className="w-full max-w-[900px] px-5 mx-auto">
                {children}
            </div>
        </div>
      </main>
    );
  }