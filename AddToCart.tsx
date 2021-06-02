// import React, { Component } from "react";
// import { match } from "react-router";

// interface P {
//     title: string;
// }
// interface D {
//     match?: match<P>;
// }
// class AddToCart extends Component<D> {
//     render() {
//         return <div>Added to cart {this.props.match?.params.title}</div>;
//     }
// }

// export default AddToCart;

import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
// import * as H from "history";

interface P {
    title: string;
    price: string;
    amount: string;
}

interface D {
    datas: P[];
}
export default function AddToCart({ match }: RouteComponentProps<D>) {
    return (
        <div>
            <h2>See your items in the cart</h2>
            <br />
            Item is {match.params.datas.title}
            <p>{match.params.datas.price}</p>
            In stock
            <p>Quantity:{match.params.datas.amount}</p>
            <button>Buy</button>
            <Link to={`/deleteitem/${match.params.datas.title}`}>
                <button>Delete</button>
            </Link>
            <Link to="/cart">Continue shopping</Link>
        </div>
    );
}
