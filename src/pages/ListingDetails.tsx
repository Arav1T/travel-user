// import { useState, useEffect } from 'react';
// import React from 'react';

// import { useParams, useNavigate } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useAuth } from '../context/AuthContext';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { toast } from 'react-hot-toast';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const ListingDetails = () => {
//   const { id } = useParams();
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [guests, setGuests] = useState(1);

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         const docRef = doc(db, 'listings', id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setListing({ id: docSnap.id, ...docSnap.data() });
//         }
//         console.log("listing",docSnap.data());
        
//       } catch (error) {
//         toast.error('Error loading listing');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [id]);

//   const calculateTotal = () => {
//     if (!startDate || !endDate) return 0;
//     const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
//     return days * listing.price;
//   };

//   const handleBooking = async () => {
//     if (!currentUser) {
//       toast.error('Please login to book');
//       navigate('/login');
//       return;
//     }

//     if (!startDate || !endDate) {
//       toast.error('Please select dates');
//       return;
//     }

//     try {
//       console.log("category",listing.category);
      
//       await addDoc(collection(db, 'bookings'), {
//         listingId: id,
//         userId: currentUser.uid,
//         userEmail: currentUser.email,
//         checkIn: startDate.toISOString(),
//         checkOut: endDate.toISOString(),
//         guests,
//         totalPrice: calculateTotal(),
//         status: 'pending',
        
// category:listing.category,
//         createdAt: serverTimestamp(),
//       });
//       toast.success('Booking request sent!');
//       navigate('/bookings');
//     } catch (error) {
//       toast.error('Booking failed: ' + error.message);
//     }
//   };

//   if (loading) return <div className="text-center py-12">Loading...</div>;
//   if (!listing) return <div className="text-center py-12">Listing not found</div>;

//   return (
//     <div className="container mx-auto px-4 py-8 text-black">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//         <div>
//           <div className="mb-4 rounded-lg overflow-hidden">
//             {/* <img 
//               src={listing.images[0]} 
//               alt={listing.name} 
//               className="w-full h-96 object-cover"
//             /> */}
//           </div>
//           {/* <div className="grid grid-cols-3 gap-2">
//             {listing.images.slice(1).map((img, i) => (
//               <img 
//                 key={i} 
//                 src={img} 
//                 alt={listing.name} 
//                 className="w-full h-32 object-cover rounded"
//               />
//             ))}
//           </div> */}
//         </div>


//         <div>
//           <h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
//           <p className="text-gray-600 mb-4">{listing.address}, {listing.city}</p>
          
//           <div className="flex items-center mb-6">
//             <span className="text-2xl font-bold text-primary">${listing.price}</span>
//             <span className="text-gray-500 ml-1">per night</span>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">Description</h2>
//             <p className="text-gray-700">{listing.description}</p>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">Amenities</h2>
//             <div className="grid grid-cols-2 gap-2">
//               {['WiFi', 'Parking', 'Kitchen', 'Air Conditioning', 'Pool', 'TV'].map(item => (
//                 <div key={item} className="flex items-center">
//                   <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Booking Form */}
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block mb-1 font-medium">Check-in</label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   minDate={new Date()}
//                   className="w-full p-2 border rounded"
//                   placeholderText="Select date"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 font-medium">Check-out</label>
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   minDate={startDate || new Date()}
//                   className="w-full p-2 border rounded"
//                   placeholderText="Select date"
//                 />
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1 font-medium">Guests</label>
//               <select
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//                 className="w-full p-2 border rounded"
//               >
//                 {[1, 2, 3, 4, 5, 6].map(num => (
//                   <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="bg-white p-4 rounded mb-4">
//               <div className="flex justify-between mb-2">
//                 <span>${listing.price} x {startDate && endDate ? (endDate - startDate)/(1000*60*60*24) : 0} nights</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>${calculateTotal()}</span>
//               </div>
//             </div>

//             <button
//               onClick={handleBooking}
//               className="w-full bg-primary  py-3 rounded-lg hover:bg-blue-700 font-bold"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetails;

// import { useState, useEffect } from 'react';
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import { useAuth } from '../context/AuthContext';
// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { toast } from 'react-hot-toast';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const ListingDetails = () => {
//   const { id } = useParams();
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [guests, setGuests] = useState(1);

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         const docRef = doc(db, 'listings', id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setListing({ id: docSnap.id, ...docSnap.data() });
//         }
//       } catch (error) {
//         toast.error('Error loading listing');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [id]);

//   const calculateTotal = () => {
//     if (!startDate || !endDate) return 0;
//     const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
//     return days * listing.price;
//   };

//   const handleBooking = async () => {
//     if (!currentUser) {
//       toast.error('Please login to book');
//       navigate('/login');
//       return;
//     }

//     if (!startDate || !endDate) {
//       toast.error('Please select dates');
//       return;
//     }

//     try {
//       await addDoc(collection(db, 'bookings'), {
//         listingId: id,
//         userId: currentUser.uid,
//         userEmail: currentUser.email,
//         checkIn: startDate.toISOString(),
//         checkOut: endDate.toISOString(),
//         guests,
//         totalPrice: calculateTotal(),
//         status: 'pending',
//         category: listing.category,
//         createdAt: serverTimestamp(),
//       });
//       toast.success('Booking request sent!');
//       navigate('/bookings');
//     } catch (error) {
//       toast.error('Booking failed: ' + error.message);
//     }
//   };

//   if (loading) return <div className="text-center py-12 text-white">Loading...</div>;
//   if (!listing) return <div className="text-center py-12 text-white">Listing not found</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4 py-8 text-white">
//       <div className="container mx-auto lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="mb-4 rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
//             {/* Listing Image can be added here */}
//             <img src={listing.imageUrl} alt={listing.name} className="w-full h-96 object-cover" />
//           </div>

//           <div>
//             <h1 className="text-4xl font-bold mb-4">{listing.name}</h1>
//             <p className="text-xl mb-4">{listing.address}, {listing.city}</p>

//             <div className="flex items-center mb-6">
//               <span className="text-3xl font-bold">${listing.price}</span>
//               <span className="text-gray-300 ml-2">per night</span>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-2">Description</h2>
//               <p className="text-gray-200">{listing.description}</p>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-2">Amenities</h2>
//               <div className="grid grid-cols-2 gap-2">
//                 {['WiFi', 'Parking', 'Kitchen', 'Air Conditioning', 'Pool', 'TV'].map((item) => (
//                   <div key={item} className="flex items-center text-gray-200">
//                     <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Booking Form */}
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block mb-1 font-medium">Check-in</label>
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     minDate={new Date()}
//                     className="w-full p-3 rounded-lg bg-gray-700 text-white"
//                     placeholderText="Select date"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium">Check-out</label>
//                   <DatePicker
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     minDate={startDate || new Date()}
//                     className="w-full p-3 rounded-lg bg-gray-700 text-white"
//                     placeholderText="Select date"
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-1 font-medium">Guests</label>
//                 <select
//                   value={guests}
//                   onChange={(e) => setGuests(e.target.value)}
//                   className="w-full p-3 rounded-lg bg-gray-700 text-white"
//                 >
//                   {[1, 2, 3, 4, 5, 6].map((num) => (
//                     <option key={num} value={num}>
//                       {num} {num === 1 ? 'guest' : 'guests'}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="bg-gray-600 p-4 rounded-lg mb-4">
//                 <div className="flex justify-between mb-2">
//                   <span>${listing.price} x {startDate && endDate ? (endDate - startDate) / (1000 * 60 * 60 * 24) : 0} nights</span>
//                   <span>${calculateTotal()}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span>${calculateTotal()}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleBooking}
//                 className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-3 rounded-lg text-white font-bold hover:scale-105 transition duration-300"
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListingDetails;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Types
interface Listing {
  id: string;
  name: string;
  address: string;
  city: string;
  price: number;
  category: string;
  description?: string;
  imageUrl?: string;
  available?: boolean;
  [key: string]: any;
}

const ListingDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(1);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        if (!id) return;
        const docRef = doc(db, 'listings', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setListing({ id: docSnap.id, ...docSnap.data() } as Listing);
        } else {
          toast.error('Listing not found');
        }
      } catch (error) {
        toast.error('Error loading listing');
      } finally {
        setLoading(false);
      }
    };
    fetchListing();
  }, [id]);

  const calculateTotal = (): number => {
    if (!startDate || !endDate || !listing?.price) return 0;
    const nights = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * listing.price : 0;
  };

  const handleBooking = async (): Promise<void> => {
    if (!currentUser) {
      toast.error('Please login to book');
      navigate('/login');
      return;
    }

    if (!startDate || !endDate || !listing) {
      toast.error('Please select valid dates');
      return;
    }

    try {
      await addDoc(collection(db, 'bookings'), {
        listingId: id,
        userId: currentUser.uid,
        userEmail: currentUser.email,
        checkIn: startDate.toISOString(),
        checkOut: endDate.toISOString(),
        guests,
        totalPrice: calculateTotal(),
        status: 'pending',
        category: listing.category,
        createdAt: serverTimestamp(),
      });
      toast.success('Booking request sent!');
      navigate('/bookings');
    } catch (error: any) {
      toast.error('Booking failed: ' + error.message);
    }
  };

  if (loading) return <div className="text-center py-12 text-white">Loading...</div>;
  if (!listing) return <div className="text-center py-12 text-white">Listing not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4 py-8 text-white">
      <div className="container mx-auto lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mb-4 rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg">
            <img src={listing.imageUrl} alt={listing.name} className="w-full h-96 object-cover" />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{listing.name}</h1>
            <p className="text-xl mb-4">{listing.address}, {listing.city}</p>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold">${listing.price}</span>
              <span className="text-gray-300 ml-2">per night</span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-200">{listing.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <div className="grid grid-cols-2 gap-2">
                {['WiFi', 'Parking', 'Kitchen', 'Air Conditioning', 'Pool', 'TV'].map((item) => (
                  <div key={item} className="flex items-center text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Check-in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => {setStartDate(date)}}
                    minDate={new Date()}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white"
                    placeholderText="Select date"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Check-out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    minDate={startDate || new Date()}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white"
                    placeholderText="Select date"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-600 p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-2">
                  <span>
                    ${listing.price} x {startDate && endDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0} nights
                  </span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-3 rounded-lg text-white font-bold hover:scale-105 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
