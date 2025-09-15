// import React from "react";
// import MainContent from "../components/MainContent";
// import Layout from "../components/Layout";

// const BanasthaliPage: React.FC = () => {
//   return (
//     <Layout>
//       <MainContent/>
//     </Layout>
//   );
// };

// export default BanasthaliPage;


import React, { useState } from "react";
import MainContent from "../components/MainContent";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const BanasthaliPage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("ABOUT US");

  return (
    <Layout>
      {/* Navbar ko selectedMenu aur setter bhejo */}
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {/* MainContent ko selectedMenu bhejo */}
      <MainContent selectedMenu={selectedMenu} />
    </Layout>
  );
};

export default BanasthaliPage;
