import React from 'react';
import {Link} from "react-router-dom";
import './step1.scss';

const Step1 = (props) => {
    return (
        <div className="step1__main-content">
            <h1 className="step1__main-header">Welcome</h1>
                <article className="step1__main-description">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</article>
                <article className="step1__main-description">rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</article>
                <Link to="/step2" className="step1__main-link"><button className="step1__main-button">Next</button></Link>
        </div>
    );
};

export default Step1