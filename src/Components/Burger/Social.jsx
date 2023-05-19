import React from "react";

import FBIcon from "src/assets/img/social/icon_facebook.png";
import TWIcon from "src/assets/img/social/icon_twitter.png";
import INIcon from "src/assets/img/social/icon_linkedin.png";
import YTIcon from "src/assets/img/social/icon_youtube.png";
import DRIcon from "src/assets/img/social/icon_dribbble.png";
import BEIcon from "src/assets/img/social/icon_behance.png";

const ICONS = [FBIcon, TWIcon, INIcon, YTIcon, DRIcon, BEIcon];

const Social = () => {
  return (
    <>
      {ICONS.map((icon, index) => (
        <img key={index} src={icon} alt={`icon-${index}`} />
      ))}
    </>
  );
};

export default Social;
