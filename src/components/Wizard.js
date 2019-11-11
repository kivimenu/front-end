import React, { Component } from 'react';
import StepZilla from "react-stepzilla";
import PersonDetail from '../pages/personDetail';
import Login from '../pages/login';
import PhoneValidate from '../pages/phoneValidate';

class Wizard extends Component {
    render() {
        const steps =
            [
                { name: 'Step 1', component: <PersonDetail /> },
                { name: 'Step 2', component: <Login /> },
                { name: 'Step 3', component: <PhoneValidate /> },

            ]
        return (
            <div className='step-progress'>
                <StepZilla steps={steps} />
            </div>
        )
    }
}

export default Wizard;