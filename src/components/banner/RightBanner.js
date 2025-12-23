
// import React from 'react';
// import Image from './Profile.JPG';

import React from 'react';
import { Image } from '../../assets';

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-lg overflow-hidden">
        <img 
          src={Image}
          alt="banner"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default RightBanner;


// import React from 'react';
// import { Image } from '../../assets';

// const RightBanner = () => {
//   return (
//     <div className="w-full lgl:w-1/2 flex justify-center items-center relative py-60">
//       <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
//         <img 
//           src={Image}
//           alt="banner"
//           className="w-full h-[600px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//           style={{
//             filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))'
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default RightBanner;