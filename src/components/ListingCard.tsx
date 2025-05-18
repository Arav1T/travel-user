
// import { Link } from 'react-router-dom';
// import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
// import React from 'react';

// const ListingCard = ({ listing }) => {
//   console.log("listing",listing);
  
//   return (
//     <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${listing.available ? 'hover:shadow-2xl hover:-translate-y-1' : 'opacity-70'}`}>

  
//       {listing.available ? (
//         <Link to={`/listings/${listing.id}`}>
//           <CardContent listing={listing} />
//         </Link>
//       ) : (
//         <div className="cursor-not-allowed">
//           <CardContent listing={listing} />
//         </div>
//       )}


//       {!listing.available && (
//         <div className="absolute inset-0 bg-gray-200/70 flex items-center justify-center z-10">
//           <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">Booked</span>
//         </div>
//       )}
//     </div>
//   );
// };


// const CardContent = ({ listing }) => (
//   <>
 
//     <div className="relative">
//       {listing.imageUrl  ? (
//         <img
//           src={listing.imageUrl}
//           alt={listing.name}
//           className="w-full h-56 object-cover"
//         />
//       ) : (
//         <div className="w-full h-56 bg-gray-300 flex justify-center items-center">
//           <span className="text-gray-600 font-medium">No Image Available</span>
//         </div>
//       )}
//     </div>


//     <div className="p-4">
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="font-bold text-xl text-gray-800 w-3/4 truncate">{listing.name}</h3>
//         <div className="flex items-center text-sm">
//           <FaStar className="text-yellow-400 mr-1" />
//           <span className="text-gray-700">{listing.rating || 'N/A'}</span>
//         </div>
//       </div>

//       <div className="flex items-center text-gray-600 text-sm mb-3">
//         <FaMapMarkerAlt className="mr-1" />
//         <span>{listing.city}</span>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <span className="text-2xl font-bold text-[#8e44ad]">₹{listing.price}</span>
//         <span className="text-gray-500 text-sm">per night</span>
//       </div>
//     </div>
//   </>
// );

// export default ListingCard;

import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';
import type { Listing } from '../types/Listing';
// Define the shape of listing data
// interface Listing {
//   id: string;
//   name: string;
//   price: number;
//   city: string;
//   imageUrl?: string;
//   rating?: number;
//   available: boolean;
// }

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
        listing.available ? 'hover:shadow-2xl hover:-translate-y-1' : 'opacity-70'
      }`}
    >
      {listing.available ? (
        <Link to={`/listings/${listing.id}`}>
          <CardContent listing={listing} />
        </Link>
      ) : (
        <div className="cursor-not-allowed">
          <CardContent listing={listing} />
        </div>
      )}

      {!listing.available && (
        <div className="absolute inset-0 bg-gray-200/70 flex items-center justify-center z-10">
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Booked
          </span>
        </div>
      )}
    </div>
  );
};

const CardContent: React.FC<{ listing: Listing }> = ({ listing }) => (
  <>
    <div className="relative">
      {listing.imageUrl ? (
        <img
          src={listing.imageUrl}
          alt={listing.name}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="w-full h-56 bg-gray-300 flex justify-center items-center">
          <span className="text-gray-600 font-medium">No Image Available</span>
        </div>
      )}
    </div>

    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-gray-800 w-3/4 truncate">
          {listing.name || 'Unnamed'}
        </h3>
        <div className="flex items-center text-sm">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{listing.rating ?? 'N/A'}</span>
        </div>
      </div>

      <div className="flex items-center text-gray-600 text-sm mb-3">
        <FaMapMarkerAlt className="mr-1" />
        <span>{listing.city || 'Unknown City'}</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-bold text-[#8e44ad]">
          ₹{listing.price}
        </span>
        <span className="text-gray-500 text-sm">per night</span>
      </div>
    </div>
  </>
);

export default ListingCard;
