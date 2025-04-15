import React from "react";
import { name } from "../data/data";

function Home() {
   return (
     <div id="home">
       <h1 style={{ color: "firebrick" }}>
         {name} is a Web Developer from {"New York"}
       </h1>
     </div>
   );
}

export default Home;
