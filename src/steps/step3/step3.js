import React, {useContext} from 'react';
import {StoreContext} from '../../contexts';
import './step3.scss';

const Step3 = (props) => {
    const [{firstName, lastName}] = useContext(StoreContext);
    const message = `${firstName} ${lastName}`;

    return (
        <div className="step3__main-content">
            <h1 className="step3__main-title">Thank You</h1>
            <h3 className="step3__main-subtitle">{message}</h3>
        </div>
    );
};

export default Step3;