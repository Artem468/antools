import './App.css'
import Header from "./Header.tsx";
import MostPopularTools from "./MostPopularTool.tsx";
import Brands from "./Brands.tsx";
import NewcomerTools from "./NewcomerTools.tsx";
import Comments from "./Comments.tsx";
import BecomeContributor from "./BecomeContributor.tsx";
import Footer from "./Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <MostPopularTools/>
            <Brands/>
            <NewcomerTools/>
            <Comments/>
            <BecomeContributor/>
            <Footer/>
        </>
    )
}

export default App
