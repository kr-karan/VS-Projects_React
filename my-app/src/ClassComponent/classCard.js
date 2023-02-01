import {Component} from 'react';

class ClassComponent extends Component {
    
    render() {
        
            return <h3> Hello from class {this.props.description}</h3>
    }
}

export default ClassComponent;