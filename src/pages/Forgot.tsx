// import { sendPasswordResetEmail } from 'firebase/auth';
// import React from 'react';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// export default function Forgot() {
//   const refEmail = React.useRef();
//   const navigate = useNavigate();

//   const handleOnForgot = async () => {
//     if (!refEmail.current.value) return;
//     await sendPasswordResetEmail(auth, refEmail.current.value);
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4">
//       <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">Forgot Password</h2>
//         <label htmlFor="forgot" className="block text-white text-sm mb-2">Email:</label>
//         <input
//           type="email"
//           ref={refEmail}
//           placeholder="Enter your email"
//           className="w-full p-3 rounded-lg mb-4 border border-white/20 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//         <button
//           onClick={handleOnForgot}
//           className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition duration-300"
//         >
//           Send Reset Link
//         </button>
//       </div>
//     </div>
//   );
// }


import  { JSX, useRef } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function Forgot(): JSX.Element {
  const refEmail = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleOnForgot = async (): Promise<void> => {
    const email = refEmail.current?.value;
    if (!email) return;

    try {
      await sendPasswordResetEmail(auth, email);
      navigate('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Forgot Password</h2>
        <label htmlFor="forgot" className="block text-white text-sm mb-2">Email:</label>
        <input
          id="forgot"
          type="email"
          ref={refEmail}
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg mb-4 border border-white/20 bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={handleOnForgot}
          className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
