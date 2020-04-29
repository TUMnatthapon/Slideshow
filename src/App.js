import React, { Component } from "react";
import "./App.css";
import Slideshow from "./Slideshow";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";

const s = {
    container: "screenW screenH col flex8 ",
};

const slides = [slide1, slide2, slide3, slide4, slide5];

class App extends Component {
    render() {
        return (
            <div className={s.container}>
                <Slideshow slides={slides} />
            </div>
        );
    }
}

export default App;
