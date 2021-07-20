import React from "react";
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Skils from "./Skils2/Skils";
import About from "./About/About";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skils/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
