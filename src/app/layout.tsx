import Header from "./components/Include/Header";
import Footer from "./components/Include/Footer";
import "./globals.css"; 

export const metadata = {
  title: "Astroger",
  description: "Your Gateway to the Stars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f9ede0] text-[#333] font-[Poppins]">
        {/* Header included automatically */}
        <Header />

        {/* Main page content */}
        <main>{children}</main>

        {/* Footer included automatically */}
        <Footer />
      </body>
    </html>
  );
}
