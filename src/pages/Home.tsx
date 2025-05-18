// import React ,{ useEffect, useState } from 'react';
// import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../firebase';
// import ListingCard from '../components/ListingCard';
// import CategorySlider from '../components/CategorySlider';
// import Slider from 'react-slick';
// import { toast } from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([
//     { id: 1, name: 'Villas', image: '/villa.jpg' },
//     { id: 2, name: 'Apartments', image: '/apartment.jpg' },
//     { id: 3, name: 'Houseboats', image: '/houseboat.jpg' },
//   ]);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const querySnapshot = await getDocs(
//           query(collection(db, 'listings'), where('available', '==', true))
//         );
//         const listingsData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setListings(listingsData);
//         const categoryData=await getDocs(collection(db, 'categories'))
//         const categoriesData= categoryData.docs.map(doc=>(
//           {id:doc.id,
//             ...doc.data()
//           }
//         ))
//         setCategories([...categories,...categoriesData])
//         console.log("category",categories);

        
//       } catch (error) {
//         toast.error('Error loading listings');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   const sliderSettingss = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   if (loading) return <div className="text-center py-12">Loading...</div>;
  
//   return (
//     <div className="min-h-screen">

//       <div className="mb-8">
//         <Slider {...sliderSettings}>
//           <div>
//             <img 
//               src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80
// " 
//               alt="Travel" 
//               className="w-full h-96 object-cover"
//             />
//           </div>
//           <div>
//             <img 
//               src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80
// " 
//               alt="Travel" 
//               className="w-full h-96 object-cover"
//             />
//           </div>
//         </Slider>
//       </div>

//       <div className="container mx-auto px-4">
 
//         <CategorySlider categories={categories} />


//         <section className="my-12">
//           <h2 className="text-2xl font-bold mb-6">Featured Stays</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {listings.slice(0, 3).map(listing => (
//               <ListingCard key={listing.id} listing={listing} />
//             ))}
//           </div>
//         </section>

        
//         <h2 className="text-2xl font-bold mb-6">Explore All Stays</h2>
      
//         <Slider {...sliderSettingss}>
        
//         {listings.map(listing => (
//               <div key={listing.id} className='px-3'> <ListingCard  listing={listing} /></div>
//             ))}
        
//         </Slider>
//         <div className='pt-8 text-center'>
//           <Link to="allStays">
//           Explore
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from 'react';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../firebase';
// import ListingCard from '../components/ListingCard';
// import CategorySlider from '../components/CategorySlider';
// import Slider from 'react-slick';
// import { toast } from 'react-hot-toast';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([
//     { id: 1, name: 'Villas', image: '/villa.jpg' },
//     { id: 2, name: 'Apartments', image: '/apartment.jpg' },
//     { id: 3, name: 'Houseboats', image: '/houseboat.jpg' },
//   ]);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const querySnapshot = await getDocs(
//           query(collection(db, 'listings'), where('available', '==', true))
//         );
//         const listingsData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setListings(listingsData);

//         const categoryData = await getDocs(collection(db, 'categories'));
//         const categoriesData = categoryData.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         setCategories(prev => [...prev, ...categoriesData]);
//       } catch (error) {
//         toast.error('Error loading listings');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchListings();
//   }, []);

//   const heroSliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//   };

//   const listingsSliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (loading)
//     return <div className="text-center py-12 text-white text-xl">Loading...</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white pb-12">
//       {/* Hero Slider */}
//       <div className="mb-8">
//         <Slider {...heroSliderSettings}>
//           {[
//             "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
//             "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80"
//           ].map((src, i) => (
//             <div key={i} className="relative">
//               <img src={src} alt="Travel" className="w-full h-96 object-cover rounded-lg" />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div className="container mx-auto px-4">
//         {/* Categories */}
//         <CategorySlider categories={categories} />

//         {/* Featured Listings */}
//         <section className="my-12">
//           <h2 className="text-3xl font-bold mb-6">Featured Stays</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {listings.slice(0, 3).map(listing => (
//               <ListingCard key={listing.id} listing={listing} />
//             ))}
//           </div>
//         </section>

//         {/* All Listings */}
//         <h2 className="text-3xl font-bold mb-6">Explore All Stays</h2>
//         <Slider {...listingsSliderSettings}>
//           {listings.map(listing => (
//             <div key={listing.id} className="px-3">
//               <ListingCard listing={listing} />
//             </div>
//           ))}
//         </Slider>

//         {/* Explore More Button */}
//         <div className="pt-10 text-center">
//           <Link
//             to="allStays"
//             className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
//           >
//             Explore More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ListingCard from '../components/ListingCard';
import CategorySlider from '../components/CategorySlider';
import Slider from 'react-slick';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Listing } from '../types/Listing';
import {Category} from '../types/Category'
// Types
// interface Listing {
//   id: string;
//   name: string;
//   city: string;
//   price: number;
//   available: boolean;
//   availablets?: any;
//   images?: string[];
//   [key: string]: any;
// }



const Home: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([
    { id: "1", name: 'Villas', image: '/villa.jpg' },
    { id: "2", name: 'Apartments', image: '/apartment.jpg' },
    { id: "3", name: 'Houseboats', image: '/houseboat.jpg' },
  ]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsQuery = query(collection(db, 'listings'), where('available', '==', true));
        const querySnapshot = await getDocs(listingsQuery);

        const listingsData: Listing[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Listing[];

        setListings(listingsData);

        const categorySnapshot = await getDocs(collection(db, 'categories'));
        const categoriesData: Category[] = categorySnapshot.docs.map(doc => {
  const data = doc.data();
  return {
    ...data,
    id: doc.id, // ensures id is string
  } as Category;
});


        setCategories(prev => [...prev, ...categoriesData]);
      } catch (error) {
        toast.error('Error loading listings');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  const listingsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
    return <div className="text-center py-12 text-white text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] text-white pb-12">
      {/* Hero Slider */}
      <div className="mb-8">
        <Slider {...heroSliderSettings}>
          {[
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80',
          ].map((src, i) => (
            <div key={i} className="relative">
              <img src={src} alt="Travel" className="w-full h-96 object-cover rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4">
        {/* Categories */}
        <CategorySlider categories={categories} />

        {/* Featured Listings */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Featured Stays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.slice(0, 3).map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* All Listings */}
        <h2 className="text-3xl font-bold mb-6">Explore All Stays</h2>
        <Slider {...listingsSliderSettings}>
          {listings.map(listing => (
            <div key={listing.id} className="px-3">
              <ListingCard listing={listing} />
            </div>
          ))}
        </Slider>

        {/* Explore More Button */}
        <div className="pt-10 text-center">
          <Link
            to="allStays"
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
