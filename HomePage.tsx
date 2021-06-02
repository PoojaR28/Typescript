import React, { Component } from 'react'
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage"

interface UserType {
     userId: string;
     password:string;
}
   
interface InformationType {
     usersList: UserType[];
}
   
class HomePage extends Component<{},InformationType> {
     constructor(props: {}) {
          super(props);
          this.state = {
          usersList:[]
       };
     }
     private addUser(user: UserType): void {
          
          // localStorage.setItem("userDetails",JSON.stringify(usersList))
          localStorage.setItem("userId","pooja@gmail.com");
          localStorage.setItem("password","12345");
          const { usersList } = this.state;
          usersList.push(user);
          this.setState({ usersList });
          console.log(usersList);
     }
     
     render() {
          return (
               <div>
                <LoginPage addUser={(userValue: UserType) => this.addUser(userValue)} />
               <Dashboard usersList={this.state.usersList}/>
               </div>
          )
     }
}

export default HomePage;