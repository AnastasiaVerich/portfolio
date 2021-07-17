import React from "react";
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skils from "./Skils/Skils";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Skils2 from "./Skils2/Skils2";
import About from "./About/About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skils2/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
