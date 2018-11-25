import React ,{ Component } from 'react';
import './styles.css';


class Spinner extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="spinner">
                <div className="spinner-circle">
                    
                </div>
            </div>
        )
    }
}

export default Spinner;
