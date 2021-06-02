import React, { Component } from 'react'

interface IUserType {
     userId: string;
     password:string;
}
   
interface Props {
     inputUser?: IUserType;
     addUser: (newUser: IUserType) => void;
}
   
export default class AddUser extends Component<Props, IUserType> {
     constructor(props: Props) {
       super(props);
       this.state = {
         userId:
           this.props.inputUser === undefined
             ? ""
             : "this.props.inputUser?.userId",
       
       password:
       this.props.inputUser===undefined
       ?""
       :"this.props.inputUser?.password"
     };
}
     render() {
          return (
           <div>
          <div className="container login-container">
            <div className="row">
               <div className="col-md-6 login-form-1">
                    <h3 style={{textAlign:"center"}}>LOGIN</h3>
                        <div className="form-group">
                            <input type="email" 
                            className="form-control" 
                            placeholder="Enter Your Email " 
                            value={this.state.userId}
                            onChange={(e) =>
                              this.setState({ userId: e.target.value })
                             }
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" 
                            className="form-control" 
                            placeholder="Enter Password" 
                            value= {this.state.password}
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                             }/>
                        </div>
                        <div>
                        <button
                         color="primary"
                         style={{margin:"auto",display:'block'}}
                         onClick={() =>
                         this.props.addUser({
                              userId: this.state.userId,
                              password:this.state.password
                         })
                         }
                         >
                         Sign In
                         </button> 
                         </div> 
                    </div>
               </div>
          </div>
          </div>
          )
     }
}
