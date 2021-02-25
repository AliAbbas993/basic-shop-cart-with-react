import React, { Component } from 'react';
import Counter from './counter.jsx'
import 'bootstrap/dist/css/bootstrap.css';

class Counters extends Component {
    
    render() { 
        let subtotal = 0;
        return ( 
            <React.Fragment>
                <h1 className="text-center my-2">Cart Products</h1>
                <p className="text-right px-3"><button className="btn btn-secondary" onClick={this.props.onReset}>Reset All</button></p>
                <table className="table border w-100 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.counters.map(counter => {
                                return(
                                    subtotal = subtotal + counter.value * counter.price,
                                    <Counter 
                                        key={counter.id} 
                                        count={this.props.counters.indexOf(counter)}
                                        counter={counter} 
                                        onDelete={() => this.props.onDelete(counter.id)}
                                        onIncrement={() => this.props.onIncrement(counter)}
                                        onDecrement={() => this.props.onDecrement(counter)} 
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="row justify-content-between">
                    <div className="label">Total Amount :</div>
                    <div className="label-value">
                        <span>{subtotal}</span>
                    </div>     
                </div>
            </React.Fragment>
         );
    }
}
 
export default Counters;
