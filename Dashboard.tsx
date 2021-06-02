import React, { Component } from 'react'
import DashboardItem from './DashboardItem';

interface UserInfo {
     userId: string;
     password:string;
   }
   
   interface ILUProps {
     usersList: UserInfo[];
   }
   
  export default class Dashboard extends Component<ILUProps> {
     render() {
       return (
         <div>
           {this.props.usersList.map((userListItem) => {
             return (
               <DashboardItem
                 user={userListItem}
               />
             );
           })}
         </div>
         
       );
     }
   }


