import React, {Component} from 'react';
import HomePage from './homePage/homePage';
import NavBar from './navBar/navBar';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
             <NavBar/>
             <HomePage/>
            </React.Fragment>
        );
    }
}

export default LandingPage;