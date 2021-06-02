import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import data from "./data";
import CartItem from "./CartItem";
import * as H from "history";

interface Datas {
    id: number;
    title: string;
    price: number;
    img: string;
    history?: H.History;
}
interface IState {
    data: Datas[];
}

const styles = (theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    }
});

class CartList extends Component<{}, IState> {
    state = {
        data: []
    };

    render() {
        return (
            <div>
                {data.map((d) => {
                    return (
                        <CartItem
                            id={d.id}
                            title={d.title}
                            price={d.price}
                            img={d.img}
                            history={d.history}
                        />
                    );
                })}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CartList);
