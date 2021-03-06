import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav  id="dropdown" className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a id="site-name" className="navbar-brand" href="page.js"><u>TEST APP</u></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-control="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="fake.js"><u>This doesn't do anything 😀</u></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                                Dropdown that doesn't work
                            </a>
                            <div className="dropdown-menu" aria aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="fake.js">fake link</a>
                            </div>
                        </li>
                    </ul>
                </div>
          </nav>
        </div>
        );
    }

}