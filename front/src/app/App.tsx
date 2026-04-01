import React from "react";
import "./App.css";
import Byron from "@public/Byron1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <h1>Byron and James</h1>
            <img 
                src={Byron} alt="Byron and James" 
                height={"600px"} width={"auto"}
            />
        </React.Fragment>
    );
};


