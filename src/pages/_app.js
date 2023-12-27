import '@/styles/globals.css'
import Header from "@/pages/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NextNProgress from 'nextjs-progressbar';
import Footer from "@/pages/Footer";

export default function App({Component, pageProps}) {
    return <>
        <NextNProgress />
        <Header/>
        <Component {...pageProps} />
        <Footer />
    </>
}
