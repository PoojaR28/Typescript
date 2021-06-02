import React, { Component } from "react";
import {Link} from 'react-router-dom'

interface IUserType {
  userId: string;
  password: string;
}

interface IProps {
  user: IUserType;
  }

export default class ListUsersItem extends Component<IProps, IUserType> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      userId: this.props.user.userId,
      password: this.props.user.password,
    };
  }
  render() {

    return (
     <div>
       Welcome {this.state.userId}
       <br/>
        <Link to="/cart"><button>Go to your cart</button></Link>
     </div>
    );
  }
}
