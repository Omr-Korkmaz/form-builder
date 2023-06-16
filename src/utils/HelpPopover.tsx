import HelpIcon from "@mui/icons-material/Help";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

interface HelpPopoverProps {
  content: string;
}

export const HelpPopover: React.FC<HelpPopoverProps> = ({ content }) => {

  // basic material UI popover to see explaniation about validation rules
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
      <IconButton
        onClick={handleClick}
        sx={{
          "&:focus": { outline: "none" },
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.15)",
            color: "#0d69e6",
          },
          transition: "color 0.2s, transform 0.2s",
        }}
      >
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
        <Typography sx={{ p: 2, width: "400px" }}>
          {content}
        </Typography>
      </Popover>
    </>
  );
}
