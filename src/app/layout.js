import "@/styles/globals.css";
import "@/styles/variables.css";
import Header from "@/components/Header";
//import Footer from "@/components/Footer";

// Стандартный HTML layout (не удаляй)
export const metadata = {
  title: "Liudmyla | Lashmaker Shop",
  description: "Corsi professionali e prodotti premium per Lashmaker.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}


