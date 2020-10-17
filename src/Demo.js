import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

const Demo = (props) =>{
    return <div className="demo_style">
    <h1>Hello {props.name}</h1>
    <p>How you doing?</p>
    </div>
}

// class Demo extends Component{
//     render(){
//         return <div className="demo_style">
//         <h1>Hello {this.props.name}</h1>
//         <p>How you doing?</p>
//         </div>
//     }
// }

export default Demo;