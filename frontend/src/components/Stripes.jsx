import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      URL: "https://i0.wp.com/linuxnewbieguide.org/wp-content/uploads/2017/03/github-logo.png?ssl=1",
      ID: "https://github.com/SParth-23",
    },
    {
      URL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png",
      ID: "https://leetcode.com/u/parthsinghal23-cs/",
    },
    {
      URL: "https://brandlogos.net/wp-content/uploads/2025/04/gmail-logo_brandlogos.net_eqenr.png",
      ID: "mailto:parthsinghal23.cs@gmail.com?",
    },
    {
      URL: "https://cdn.prod.website-files.com/63b6b41dbb4b0140020ab4e6/64c6406585d5477b4c6bad3c_2560px-Behance_logo.svg.png",
      ID: "https://www.behance.net/ParthSinghal_23",
    },
    {
      URL: "https://www.eginnovations.com/tech-icons/Uploads/docket_logo.webp",
      ID: "https://hub.docker.com/u/sparth23",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <Stripe key={index} val={item} />
      ))}
    </div>
  );
}

export default Stripes;