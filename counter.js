import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter  extends Component {
    render() { 
        console.log('Counter - Rendered');
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.count}</td>
                    <td><h3>Product Name</h3></td>
                    <td>{this.props.counter.price}</td>
                    <td>{this.props.counter.value}</td>
                    <td>{this.props.counter.price * this.props.counter.value}</td>
                    <td>
                        <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <button className="btn btn-sm btn-secondary p-2" disabled={this.props.counter.value == 0} onClick={() => this.props.onDecrement(this.props.counter)}>-</button>
                            <span className="btn btn-sm btn-warning mx-2 p-2">{this.props.counter.value}</span>
                            <button className="btn btn-sm btn-secondary mx-2 p-2" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                            <button className="btn btn-sm btn-danger" onClick={() => this.props.onDelete(this.props.counter.id)}> X </button>
                        </div>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}
 
export default Counter;
