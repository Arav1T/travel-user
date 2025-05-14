// import { collection, getDocs, query, where } from 'firebase/firestore'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { db } from '../firebase'
// import ListingCard from '../components/ListingCard'

// export default function Categories() {
//     const [listings,setListings]=useState([])
//     const {name} = useParams()
//     useEffect(()=>{
//         const fetchListings=async()=>{

//             try {
//               const val=await getDocs(collection(db,"listings"))
//               console.log("Data",name,val.docs[0].data());
//                 const q = query(collection(db,"listings"),where("category", "==", name))
//                 const querySnapshot=await getDocs(q)
//                 const data= querySnapshot.docs.map(doc => ({
//                     id: doc.id,
//                     ...doc.data()
//                   }))
                
//                 setListings(data)
    
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         fetchListings()
//     },[])
//   return (
//     <div>
//         <section className="my-12">
//           <h2 className="text-2xl font-bold mb-6">{name}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {listings.slice(0, 6).map(listing => (
//               <ListingCard key={listing.id} listing={listing} />
//             ))}
//           </div>
//         </section>
        
//         </div>
//   )
// }
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import ListingCard from '../components/ListingCard';

export default function Categories() {
  const [listings, setListings] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const q = query(collection(db, "listings"), where("category", "==", name));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setListings(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, [name]);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {listings.length === 0 ? (
            <div className="text-center col-span-full text-lg text-gray-600">
              No listings available for this category.
            </div>
          ) : (
            listings.slice(0, 6).map((listing) => (
              <div key={listing.id} className="transform transition duration-300 ease-in-out hover:scale-105">
                <ListingCard listing={listing} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
