// import React from "react";
// import { Box } from "@mui/material";

// import { Link } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

// import HomeIcon from "@mui/icons-material/Home";
// import ExploreIcon from "@mui/icons-material/Explore";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

// export default function Sidebar(props) {
//   return (
//     <Box sx={{ maxWidth: 360, bgcolor: "#ffffff" /*"#212121"*/ }}>
//       <nav>
//         <List>
//           <ListItem
//             disablePadding
//             component={Link}
//             to="/"
//             sx={{
//               paddingLeft: "25px",
//               justifyContent: "space-between",
//             }}
//           >
//             <ListItemIcon>
//               <HomeIcon
//                 sx={{
//                   color: "#000000",
//                 }}
//               />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <ExploreIcon />
//               </ListItemIcon>
//               <ListItemText primary="Explore" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <PlayCircleIcon
//                   sx={{
//                     color: "#fff",
//                   }}
//                 />
//               </ListItemIcon>
//               <ListItemText primary="Shorts" />
//             </ListItemButton>
//           </ListItem>

//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <Link to={"/"}>
//                   <SubscriptionsIcon />
//                 </Link>
//               </ListItemIcon>
//               <ListItemText primary="Subscriptions" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </nav>
//       <Divider />
//       <nav>
//         <ListItem disablePadding component={Link} to="/library">
//           <ListItemIcon>
//             <HomeIcon
//               sx={{
//                 color: "#fff",
//               }}
//             />
//           </ListItemIcon>
//           <ListItemText primary="Library" />
//         </ListItem>
//         <ListItem disablePadding component={Link} to="/history">
//           <ListItemIcon>
//             <HomeIcon
//               sx={{
//                 color: "#fff",
//               }}
//             />
//           </ListItemIcon>
//           <ListItemText primary="History" />
//         </ListItem>
//       </nav>
//     </Box>
//   );
// }

// import React from "react";
// import { Box } from "@mui/material";

// import { Link } from "react-router-dom";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

// import HomeIcon from "@mui/icons-material/Home";
// import ExploreIcon from "@mui/icons-material/Explore";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import WebStoriesIcon from "@mui/icons-material/WebStories";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

// import "./sidebar.css";

// export default function Sidebar(props) {
//   return (
//     <div className="feedSidebarContainer">
//       <ul id="sidebarUl1">
//         <li>
//           <Link to={"/"}>
//             <HomeIcon
//               sx={{
//                 color: "#000000",
//               }}
//             />
//             Home
//           </Link>
//         </li>

//         <li>
//           <Link>
//             <ExploreIcon
//               sx={{
//                 color: "#000000",
//               }}
//             />
//             Explore
//           </Link>
//         </li>

//         <li>
//           <Link>
//             <WebStoriesIcon
//               sx={{
//                 color: "#000000",
//               }}
//             />
//             Shorts
//           </Link>
//         </li>

//         <li>
//           <Link>
//             <SubscriptionsIcon
//               sx={{
//                 color: "#000000",
//               }}
//             />
//             Subsctiptions
//           </Link>
//         </li>
//       </ul>
//       <Divider />
//     </div>
//   );
// }

import React from "react";
import "./sidebar.css";

function Sidebar() {
  return <div id="sidebar">Sidebar</div>;
}

export default Sidebar;
