import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

interface CartProps {
    classes?: any;
    id: number;
    title: string;
    price: number;
    img: string;
    history?: any;
}

interface CartState {
    amount: number;
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

class CartItem extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);
        this.state = {
            amount: 0
        };
    }

    clickAdd = () => {
        this.setState({ amount: this.state.amount + 1 });
    };
    clickSubtract = () => {
        if (this.state.amount !== 0) {
            this.setState({ amount: this.state.amount - 1 });
        }
    };
    addCart = () => {
        console.log(this.props.history);
        this.props.history?.push("/addcart");
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img
                                    className={classes.img}
                                    alt="complex"
                                    src={this.props.img}
                                />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                            >
                                <Grid item xs>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle1"
                                    >
                                        {this.props.title}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        ID: {this.props.id}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <button>Buy</button>
                                        <Link
                                            to={`/addcart/${this.props.title}/${this.props.price}/${this.state.amount}`}
                                        >
                                            <button onClick={this.addCart}>
                                                Add to cart
                                            </button>
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    ${this.props.price}
                                </Typography>
                                <Typography variant="subtitle2">
                                    <button onClick={this.clickSubtract}>
                                        -
                                    </button>
                                    {" " + this.state.amount + " "}
                                    <button onClick={this.clickAdd}>+</button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CartItem);
