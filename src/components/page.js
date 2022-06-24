import React from "react";
import Header from "./header";
import LoginButton from "./login";





export default class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <LoginButton />
            </div>
        );
    }
}