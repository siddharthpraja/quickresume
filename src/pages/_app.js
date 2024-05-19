import Navbar from "@/components/Navbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <div className="w-11/12 m-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
