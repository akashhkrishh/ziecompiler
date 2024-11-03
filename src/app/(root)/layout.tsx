import Navbar from "@/components/custom/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed flex flex-col h-screen w-screen" >
      <Navbar/>
      {children}
    </div>
  );
}
