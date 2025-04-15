// components 
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import HexMap from "./hexmap/hexmap"
import HeroSection from "./heroSection/heroSection"

export default function Home() {
    return (
        <>  
            <Header />
            <HexMap />
            <HeroSection />
            <Footer />
        </>
    ) 
}

