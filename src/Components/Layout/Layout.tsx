import Dira1 from "../Componens/Dira1/Dira1";
import Dira10 from "../Componens/Dira10/Dira10";
import Dira2 from "../Componens/Dira2/Dira2";
import Dira3 from "../Componens/Dira3/Dira3";
import Dira4 from "../Componens/Dira4/Dira4";
import Dira5 from "../Componens/Dira5/Dira5";
import Dira6 from "../Componens/Dira6/Dira6";
import Dira7 from "../Componens/Dira7/Dira7";
import Dira8 from "../Componens/Dira8/Dira8";
import Dira9 from "../Componens/Dira9/Dira9";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./Layout.css";
import Links from "./Links/Links";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header><Header/></header>
            <main><Dira1/><Dira2/><Dira3/><Dira4/><Dira5/><Dira6/><Dira7/><Dira8/><Dira9/><Dira10/></main>
            <aside><Links/></aside>
            <footer><Footer/></footer>
        </div>
    );
}

export default Layout;
