
import Navbar from "@/components/custom/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen flex flex-col ">
        <Navbar/>
        {children}
    </div>
  );
}
