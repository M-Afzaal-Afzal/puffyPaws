import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Script strategy="beforeInteractive"
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"/>
            <Script strategy="beforeInteractive" type="text/javascript"
                    src="https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"/>
            <Script strategy="afterInteractive" type="text/javascript" src="/js/jquery.arctext.js"/>
            <Script strategy="afterInteractive" src="/js/bootstrap.bundle.min.js"/>
            <Script strategy="afterInteractive" src="/js/custom-scripts.js"/>

            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
