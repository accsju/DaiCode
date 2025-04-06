import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Main from "./main/main"

//utils 
import { head } from "../../utils/head"

export default function Home() {
    return (
        <>  
            <Header />
            <Main />
            <Footer />
        </>
    ) 
}

interface _Home {
    title: string
}
const home: _Home = {
    title: " /home"
}
head.setTitle(home.title);
