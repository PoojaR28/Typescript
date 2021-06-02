export default [
    {
        id: 1,
        title: "Samsung Galaxy S7",
        price: 599.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png"
    },
    {
        id: 2,
        title: "google pixel ",
        price: 499.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png"
    },
    {
        id: 3,
        title: "Xiaomi Redmi Note 2",
        price: 699.99,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png"
    }
];

// create the menubar
// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

// const StyledMenu = withStyles({
//   paper: {
//     border: '1px solid #d3d4d5',
//   },
// })((props) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundColor: theme.palette.primary.main,
//       '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

//  function CustomizedMenus() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="customized-menu"
//         aria-haspopup="true"
//         variant="contained"
//         color="primary"
//         onClick={handleClick}
//       >
//         Open Menu
//       </Button>
//       <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <StyledMenuItem>
//           <ListItemIcon>
//             <SendIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Sent mail" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemIcon>
//             <DraftsIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </StyledMenuItem>
//         <StyledMenuItem>
//           <ListItemIcon>
//             <InboxIcon fontSize="small" />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// }
