import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
// import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function CandidateTooltip({ title, bg, small }) {
  // State to manage tooltip visibility
  const [open, setOpen] = useState(false);

  
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .MuiTooltip-arrow {
      color: #1e40af; /* Tailwind CSS blue-800 */
    }
    & .MuiTooltip-tooltip {
      background-color: #1e40af; /* Tailwind CSS blue-800 */
      padding: 10px; /* Increase padding around the text */
      max-width: 200px; /* Decrease tooltip box width */
    }
  `;



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
        <p sx={{ m: 1 }}>
          <IoMdInformationCircleOutline
          
            // style={{ color: "#B3BAC5" }}
            // fontSize={small ? "sm" : ""}
            className="text-lg text-gray-600"
          />
        </p>
      </CustomTooltip>
    </div>
  );
}