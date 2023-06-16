// import React, { useState } from "react";
// // import HelpIcon from '@material-ui/icons/Help';

// import { Popover, IconButton, Typography } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
// interface Props {
//   anchorEl: Element | null;
//   explanation: string;
// }

// const BasicPopover: React.FC<Props> = ({ anchorEl, explanation }): JSX.Element => {

//   const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

//   const handlePopoverOpen = () => {
//     setPopoverOpen(true);
//   };

//   const handlePopoverClose = () => {
//     setPopoverOpen(false);
//   };

//   return (
//     <>
// <IconButton onClick={handlePopoverOpen} sx={{ "&:focus": { outline: "none" } }}>

//       <HelpIcon />
//     </IconButton>
//     <Popover
//       open={popoverOpen}
//       anchorEl={anchorEl}
//       onClose={handlePopoverClose}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "center",
//       }}
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "center",
//       }}
//     >
//       <Typography sx={{ padding: 2 }} >{explanation}</Typography>
//     </Popover>
//   </>
//   );
// };

// export default BasicPopover;

import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton onClick={handleClick} sx={{ "&:focus": { outline: "none" } }}>
        <HelpIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2,   width:'400px'}}>
          In some cases, certain validation may turn disable others. ex: if the "Valid email address"
          validation is chosen, the "Not contain special chars" validation should be disabled.
          .
        </Typography>
      </Popover>
    </>
  );
}
