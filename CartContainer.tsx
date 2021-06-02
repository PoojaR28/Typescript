import React, { Component } from "react";
import CartList from "./CartList";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

interface IProps {
    classes: any;
}

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px"
    }
}))(Badge);

const styles = (theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
});

class CartContainer extends Component<IProps, {}> {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h5" className={classes.title}>
                                welcome {localStorage.getItem("userId")}
                            </Typography>
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={1} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <CartList />
                </div>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CartContainer);
