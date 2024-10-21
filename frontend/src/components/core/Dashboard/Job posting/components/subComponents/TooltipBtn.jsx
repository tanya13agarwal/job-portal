import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

export default function TooltipBtn({ title, bg, small }) {
  // State to manage tooltip visibility
  const [open, setOpen] = useState(false);

  // Custom Tooltip component with arrow
  const CustomTooltip = styled(Tooltip)(({ theme }) => ({
    [`& .MuiTooltip-arrow`]: {
      color: theme.palette.common.black,
    },
    [`& .MuiTooltip-tooltip`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div className="gap-0 flex">
      <CustomTooltip
        title={title}
        arrow
        // open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        enterDelay={600} // Adjust the delay as needed (in milliseconds)
        leaveDelay={100} // Adjust the delay as needed (in milliseconds)
        interactive={true}
      >
        <p className={bg ? `` : "btn-info"} sx={{ m: 1 }}>
          <InfoRoundedIcon
            style={{ color: "#B3BAC5" }}
            fontSize={small ? "sm" : ""}
          />
        </p>
      </CustomTooltip>
    </div>
  );
}
