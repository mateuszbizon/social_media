export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="min-h-screen py-10">
        <div className="w-full max-w-[600px] mx-auto">
            {children}
        </div>
      </main>
    );
  }