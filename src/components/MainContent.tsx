// import React from "react";
// import { Box, Typography } from "@mui/material";
// import RightSidebar from "./RightSidebar";
// import campusImg from "../assets/agent.jpg";

// const MainContent: React.FC = () => {
//   return (
//     <Box>
//       <Box
//         component="img"
//         src={campusImg}
//         alt="Banasthali Campus"
//         sx={{
//           width: "100%",
//           objectFit: "cover",
//           borderRadius: 2,
//           border: 1,
//         }}
//       />
        //     {/* Scrolling text */}
        // <Box
        //   sx={{
        //     whiteSpace: "nowrap",
        //     display: "inline-block",
        //     animation: "scrollText 15s linear infinite",
        //     "@keyframes scrollText": {
        //       "0%": { transform: "translateX(100%)" },
        //       "100%": { transform: "translateX(-100%)" },
        //     },
        //   }}
        // >
        //   <Typography
        //     variant="h6"
        //     sx={{
        //       color: "blue",
        //       fontWeight: "bold",
        //       fontSize: { xs: "1rem", md: "1.25rem" },
        //     }}
        //   >
        //     Accredited with the highest possible grade 'A++' with CGPA 3.63/4.00 by NAAC
        //   </Typography>
        // </Box>

//       <Box sx={{ display: "flex", gap: 2 }}>
//       {/* Left side content */}
//       <Box sx={{ flex: 3 }}>
//         <Box sx={{ p: { xs: 2 }, overflow: "hidden" }}>
//           <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
//             Banasthali Vidyapith aims at the synthesis of spiritual values and scientific
//             achievements of both the East and the West. Its educational programme is based on
//             the concept of "Panchmukhi Shiksha" and aims at all round harmonious development
//             of personality.
//               Banasthali Vidyapith aims at the synthesis of spiritual values and scientific
//             achievements of both the East and the West. Its educational programme is based on
//             the concept of "Panchmukhi Shiksha" and aims at all round harmonious development
//             of personality.
//           </Typography>
//              <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
//             Banasthali Vidyapith aims at the synthesis of spiritual values and scientific
//             achievements of both the East and the West. Its educational programme is based on
//             the concept of "Panchmukhi Shiksha" and aims at all round harmonious development
//             of personality.
//               Banasthali Vidyapith aims at the synthesis of spiritual values and scientific
//             achievements of both the East and the West. Its educational programme is based on
//             the concept of "Panchmukhi Shiksha" and aims at all round harmonious development
//             of personality.
//           </Typography>

//           <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//           </Typography>
//             <Typography sx={{ mt: 2, fontSize: { xs: "0.9rem", md: "1rem" } }}>
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//             Emphasis on Indian culture and thought characterized by simple living and khadi
//             wearing are hallmarks of life at Banasthali.
//           </Typography>
//         </Box>
//       </Box>

//       {/* Right side content */}
//       <Box sx={{ flex: 1 }}>
//         <RightSidebar />
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default MainContent;



import React from "react";
import { Box, Typography } from "@mui/material";
import RightSidebar from "./RightSidebar";
import campusImg from "../assets/agent.jpg";
import schoolImg from "../assets/intelligence.jpg";
import higherImg from "../assets/agent.jpg";
import admissionImg from "../assets/agent.jpg";



// const contentData: Record<string, string> = {
//   "ABOUT US": "Banasthali Vidyapith aims at the synthesis of spiritual values and scientific achievements...",
//   "SCHOOL EDUCATION": "Banasthali provides holistic school education with emphasis on Indian culture and values...",
//   "HIGHER EDUCATION": "Banasthali Vidyapith offers UG, PG and Doctoral programs across multiple disciplines...",
//   "ADMISSIONS": "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
//   "FINANCIAL ASSISTANCE": "Scholarships and financial aid are provided to deserving students...",
//   "LIBRARY": "The library is equipped with digital resources, journals, and a vast collection of books...",
//   "EXAMINATION": "Examinations are conducted semester-wise with strict evaluation standards...",
//   "SPORTS": "Banasthali encourages participation in sports with modern facilities...",
//   "BANASTHALI RADIO": "Community radio station of Banasthali for education and awareness...",
//   "MOOCS": "Banasthali offers online courses and MOOCs for global learners...",
// };

const contentData: Record<
  string,
  { text: string; img: string }
> = {
  "ABOUT US": {
    text: "Banasthali Vidyapith aims at the synthesis of spiritual values and scientific achievements...",
    img: campusImg,
  },
  "SCHOOL EDUCATION": {
    text: "Banasthali provides holistic school education with emphasis on Indian culture and values...",
    img: schoolImg,
  },
  "HIGHER EDUCATION": {
    text: "Banasthali Vidyapith offers UG, PG and Doctoral programs across multiple disciplines...",
    img: higherImg,
  },
  "ADMISSIONS": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
 "FINANCIAL ASSISTANCE": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
   "LIBRARY": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
   "EXAMINATION": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
     "SPORTS": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
     "BANASTHALI RADIO": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
       "MOOCS": {
    text: "Admission to Banasthali is based on merit and aptitude tests conducted for various courses...",
    img: admissionImg,
  },
};


interface MainContentProps {
  selectedMenu: string;
}

const MainContent: React.FC<MainContentProps> = ({ selectedMenu }) => {
  const data = contentData[selectedMenu] || {
    text: "Content coming soon...",
    img: campusImg, // default image
  };

  return (
    <Box>
      {/* Top image (dynamic) */}
      <Box
        component="img"
        src={data.img}
        alt={selectedMenu}
        sx={{
          width: "100%",
          objectFit: "cover",
          borderRadius: 2,
          border: 1,
        }}
      />



                  {/* Scrolling text */}
        <Box
          sx={{
            whiteSpace: "nowrap",
            display: "inline-block",
            animation: "scrollText 15s linear infinite",
            "@keyframes scrollText": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "blue",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Accredited with the highest possible grade 'A++' with CGPA 3.63/4.00 by NAAC
          </Typography>
        </Box>

      {/* Main Layout */}
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {/* Left Side */}
        <Box sx={{ flex: 3, p: 2 }}>
          <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
            {data.text}
          </Typography>
        </Box>

        {/* Right Side */}
        <Box sx={{ flex: 1 }}>
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};


export default MainContent;
