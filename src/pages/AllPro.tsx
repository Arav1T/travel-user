
// import { collection, getDocs } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import { db } from '../firebase';
// import { motion } from 'framer-motion';
// import ListingCard from '../components/ListingCard';
// import { FaSyncAlt, FaUndoAlt, FaRedoAlt, FaSync, FaExpandArrowsAlt } from 'react-icons/fa';

// export default function AllPro() {
//   const [listings, setListings] = useState([]);
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getDocs(collection(db, 'listings'));
//         const finalData = data.docs.map(d => ({ id: d.id, ...d.data() }));
//         setListings(finalData);
//       } catch (error) {
//         console.error('Error fetching listings', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const rotate = (axis, angle) => {
//     setRotation((prev) => ({ ...prev, [axis]: prev[axis] + angle }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white py-12 px-4">
//       <div className="flex flex-col items-center gap-8">
//         <h1 className="text-4xl font-bold text-center mb-6">Discover Listings in 3D</h1>

//         <motion.div
//           className="relative w-full max-w-5xl h-[500px]"
//           style={{ perspective: 1500 }}
//         >
//           <motion.div
//             className="absolute w-full h-full flex items-center justify-center"
//             animate={{
//               rotateX: rotation.x,
//               rotateY: rotation.y,
//               rotateZ: rotation.z,
//             }}
//             transition={{ type: 'spring', stiffness: 50, damping: 20 }}
//             style={{
//               transformStyle: 'preserve-3d',
//               position: 'relative',
//               width: '100%',
//               height: '100%',
//             }}
//           >
//             {listings.map((item, i) => {
//               const angle = (360 / listings.length) * i;
//               return (
//                 <motion.div
//                   key={i}
//                   className="absolute w-80 h-64 flex items-center justify-center text-white font-bold bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-md transform transition-all duration-500 overflow-hidden"
//                   style={{
//                     transform: `rotateY(${angle}deg) translateZ(450px)`
//                   }}
//                 >
//                   <ListingCard listing={item} />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>

//         <div className="flex flex-wrap gap-3 justify-center mt-8">
//           <button
//             onClick={() => rotate('y', 45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8e44ad] to-[#34495e] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaRedoAlt /> Y+
//           </button>
//           <button
//             onClick={() => rotate('y', -45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#34495e] to-[#8e44ad] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaUndoAlt /> Y-
//           </button>
//           {/* <button
//             onClick={() => rotate('x', 45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a252f] to-[#34495e] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaSync /> X+
//           </button>
//           <button
//             onClick={() => rotate('x', -45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#34495e] to-[#1a252f] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaSyncAlt /> X-
//           </button>
//           <button
//             onClick={() => rotate('z', 45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8e44ad] via-[#34495e] to-[#1a252f] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaExpandArrowsAlt /> Z+
//           </button>
//           <button
//             onClick={() => rotate('z', -45)}
//             className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white rounded-full hover:opacity-90 transition"
//           >
//             <FaExpandArrowsAlt /> Z-
//           </button> */}
//         </div>
//       </div>

//       <h2 className="text-3xl font-semibold mt-16 mb-8 text-center">Explore All Listings</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {listings.map((listing) => (
//           <ListingCard key={listing.id} listing={listing} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { collection, getDocs } from 'firebase/firestore';
import { JSX, useEffect, useState } from 'react';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import ListingCard from '../components/ListingCard';
import {
  FaRedoAlt,
  FaUndoAlt
  // FaSync,
  // FaSyncAlt,
  // FaExpandArrowsAlt
} from 'react-icons/fa';

// Optional interface for TypeScript
interface Listing {
  id: string;
  name: string;
  city: string;
  price: number;
  imageUrl?: string;
  available: boolean;
  rating?: number;
}

export default function AllPro(): JSX.Element {
  const [listings, setListings] = useState<Listing[]>([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(collection(db, 'listings'));
        const finalData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Listing[];
        setListings(finalData);
      } catch (error) {
        console.error('Error fetching listings', error);
      }
    };
    fetchData();
  }, []);

  const rotate = (axis: 'x' | 'y' | 'z', angle: number) => {
    setRotation((prev) => ({ ...prev, [axis]: prev[axis] + angle }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white py-12 px-4">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center mb-6">Discover Listings in 3D</h1>

        <motion.div className="relative w-full max-w-5xl h-[500px]" style={{ perspective: 1500 }}>
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            animate={{
              rotateX: rotation.x,
              rotateY: rotation.y,
              rotateZ: rotation.z,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{
              transformStyle: 'preserve-3d',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            {listings.map((item, i) => {
              const angle = (360 / listings.length) * i;
              return (
                <motion.div
                  key={item.id}
                  className="absolute w-80 h-64 flex items-center justify-center text-white font-bold bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur-md transform transition-all duration-500 overflow-hidden"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(450px)`,
                  }}
                >
                  <ListingCard listing={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <button
            onClick={() => rotate('y', 45)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8e44ad] to-[#34495e] text-white rounded-full hover:opacity-90 transition"
          >
            <FaRedoAlt /> Y+
          </button>
          <button
            onClick={() => rotate('y', -45)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#34495e] to-[#8e44ad] text-white rounded-full hover:opacity-90 transition"
          >
            <FaUndoAlt /> Y-
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mt-16 mb-8 text-center">Explore All Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
