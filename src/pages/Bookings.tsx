// import React,{ useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../firebase';
// import { toast } from 'react-hot-toast';
// import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

// const Bookings = () => {
//   const { currentUser } = useAuth();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       if (!currentUser) return;
      
//       try {
        
//         const q = query(
//           collection(db, 'bookings'),
//           where('userId', '==', currentUser.uid)
//         );
//         const querySnapshot = await getDocs(q);
        
//         const bookingsData = [];
//         for (const docSnap of querySnapshot.docs) {
//           const booking = { id: docSnap.id, ...docSnap.data() };
//           console.log("uid",docSnap.id);
//           // Get listing details
//           const listingDoc = await getDoc(doc(db, 'listings', booking.listingId));
//           if (listingDoc.exists()) {
//             booking.listing = listingDoc.data();
//           }
//           bookingsData.push(booking);
//         }
        
//         setBookings(bookingsData);
//       } catch (error) {
//         toast.error('Error loading bookings');
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchBookings();
//   }, [currentUser]);

//   if (!currentUser) {
//     return (
//       <div className="container mx-auto px-4 py-8 text-center">
//         <h2 className="text-2xl font-bold mb-4">Please login to view your bookings</h2>
//         <p className="text-gray-600 mb-4">You need to be logged in to access this page.</p>
//       </div>
//     );
//   }

//   if (loading) return <div className="text-center py-12">Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
      
//       {bookings.length === 0 ? (
//         <div className="text-center py-12">
//           <h2 className="text-xl font-semibold mb-2">No bookings yet</h2>
//           <p className="text-gray-600">Start exploring and book your perfect stay!</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {bookings.map(booking => (
//             <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-1/3">
//                   <img 
//                     src={booking.listing?.images?.[0]} 
//                     alt={booking.listing?.name} 
//                     className="w-full h-48 md:h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6 md:w-2/3">
//                   <div className="flex justify-between items-start mb-2">
//                     <h2 className="text-xl font-bold">{booking.listing?.name || 'Unknown Property'}</h2>
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       booking.status === 'approved' ? 'bg-green-100 text-green-800' :
//                       booking.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                       'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {booking.status}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center text-gray-600 mb-4">
//                     <FaMapMarkerAlt className="mr-2" />
//                     <span>{booking.listing?.address || 'Unknown location'}</span>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div className="flex items-center">
//                       <FaCalendarAlt className="mr-2 text-gray-500" />
//                       <div>
//                         <p className="text-sm text-gray-500">Check-in</p>
//                         <p>{new Date(booking.checkIn).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <FaCalendarAlt className="mr-2 text-gray-500" />
//                       <div>
//                         <p className="text-sm text-gray-500">Check-out</p>
//                         <p>{new Date(booking.checkOut).toLocaleDateString()}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-between items-center border-t pt-4">
//                     <div className="flex items-center">
//                       <FaMoneyBillWave className="mr-2 text-green-500" />
//                       <span className="font-bold">${booking.totalPrice}</span>
//                     </div>
//                     <button className="text-primary hover:underline">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../firebase';
// import { toast } from 'react-hot-toast';
// import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

// const Bookings = () => {
//   const { currentUser } = useAuth();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       if (!currentUser) return;
//       try {
//         const q = query(
//           collection(db, 'bookings'),
//           where('userId', '==', currentUser.uid)
//         );
//         const querySnapshot = await getDocs(q);

//         const bookingsData = [];
//         for (const docSnap of querySnapshot.docs) {
//           const booking = { id: docSnap.id, ...docSnap.data() };
//           const listingDoc = await getDoc(doc(db, 'listings', booking.listingId));
//           if (listingDoc.exists()) {
//             booking.listing = listingDoc.data();
//           }
//           bookingsData.push(booking);
//         }

//         setBookings(bookingsData);
//       } catch (error) {
//         toast.error('Error loading bookings');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, [currentUser]);

//   if (!currentUser) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white">
//         <h2 className="text-3xl font-bold mb-4">Please login to view your bookings</h2>
//         <p className="text-gray-300">You need to be logged in to access this page.</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white text-xl">
//         Loading your bookings...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4 py-12">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">My Bookings</h1>

//       {bookings.length === 0 ? (
//         <div className="text-center text-white py-12">
//           <h2 className="text-2xl font-semibold mb-3">No bookings yet</h2>
//           <p className="text-gray-300">Start exploring and book your perfect stay!</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={booking.listing?.images?.[0]}
//                   alt={booking.listing?.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="p-5 text-white">
//                 <div className="flex justify-between items-center mb-2">
//                   <h2 className="text-2xl font-bold truncate">{booking.listing?.name || 'Unknown Stay'}</h2>
//                   <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     booking.status === 'approved' ? 'bg-green-500/20 text-green-300' :
//                     booking.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
//                     'bg-yellow-500/20 text-yellow-300'
//                   }`}>
//                     {booking.status}
//                   </span>
//                 </div>

//                 <div className="flex items-center text-gray-300 mb-3">
//                   <FaMapMarkerAlt className="mr-2 text-white/70" />
//                   <span>{booking.listing?.address || 'Unknown location'}</span>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
//                   <div className="flex items-center">
//                     <FaCalendarAlt className="mr-2 text-white/70" />
//                     <div>
//                       <p className="text-sm text-gray-400">Check-in</p>
//                       <p className="text-white">{new Date(booking.checkIn).toLocaleDateString()}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <FaCalendarAlt className="mr-2 text-white/70" />
//                     <div>
//                       <p className="text-sm text-gray-400">Check-out</p>
//                       <p className="text-white">{new Date(booking.checkOut).toLocaleDateString()}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center border-t border-white/10 pt-4">
//                   <div className="flex items-center">
//                     <FaMoneyBillWave className="mr-2 text-green-400" />
//                     <span className="font-bold text-lg text-white">${booking.totalPrice}</span>
//                   </div>
//                   <button className="text-blue-300 hover:text-blue-400 transition font-medium">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-hot-toast';
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

// Define types
interface Listing {
  name?: string;
  address?: string;
  images?: string[];
}

interface Booking {
  id: string;
  userId: string;
  listingId: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: 'pending' | 'approved' | 'rejected';
  listing?: Listing;
}

const Bookings: React.FC = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!currentUser) return;
      try {
        const q = query(
          collection(db, 'bookings'),
          where('userId', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(q);

        const bookingsData: Booking[] = [];
        for (const docSnap of querySnapshot.docs) {
          const bookingData = docSnap.data() as Omit<Booking, 'id' | 'listing'>;
          const booking: Booking = {
            id: docSnap.id,
            ...bookingData
          };

          const listingDoc = await getDoc(doc(db, 'listings', booking.listingId));
          if (listingDoc.exists()) {
            booking.listing = listingDoc.data() as Listing;
          }

          bookingsData.push(booking);
        }

        setBookings(bookingsData);
      } catch (error) {
        toast.error('Error loading bookings');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white">
        <h2 className="text-3xl font-bold mb-4">Please login to view your bookings</h2>
        <p className="text-gray-300">You need to be logged in to access this page.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white text-xl">
        Loading your bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center text-white py-12">
          <h2 className="text-2xl font-semibold mb-3">No bookings yet</h2>
          <p className="text-gray-300">Start exploring and book your perfect stay!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {bookings.map((booking) => (
            <div key={booking.id} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={booking.listing?.images?.[0]}
                  alt={booking.listing?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 text-white">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-bold truncate">{booking.listing?.name || 'Unknown Stay'}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    booking.status === 'approved' ? 'bg-green-500/20 text-green-300' :
                    booking.status === 'rejected' ? 'bg-red-500/20 text-red-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {booking.status}
                  </span>
                </div>

                <div className="flex items-center text-gray-300 mb-3">
                  <FaMapMarkerAlt className="mr-2 text-white/70" />
                  <span>{booking.listing?.address || 'Unknown location'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-white/70" />
                    <div>
                      <p className="text-sm text-gray-400">Check-in</p>
                      <p className="text-white">{new Date(booking.checkIn).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-white/70" />
                    <div>
                      <p className="text-sm text-gray-400">Check-out</p>
                      <p className="text-white">{new Date(booking.checkOut).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-2 text-green-400" />
                    <span className="font-bold text-lg text-white">${booking.totalPrice}</span>
                  </div>
                  <button className="text-blue-300 hover:text-blue-400 transition font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
