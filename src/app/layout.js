
import Navbar from "@/components/Navbar";
import "./globals.css";



export const metadata = {
  title: "MoviesFlix",
  description: "MoviesFlix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-950 text-white`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
