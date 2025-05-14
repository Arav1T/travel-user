


// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link, Outlet } from 'react-router-dom';  // <-- Added Outlet
// import { toast } from 'react-hot-toast';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login, signup } = useAuth();
//   const navigate = useNavigate();
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (isSignUp) {
//         await signup(email, password);
//         toast.success('Account created successfully!');
//       } else {
//         await login(email, password);
//         toast.success('Logged in successfully!');
//       }
//       navigate('/', { replace: true });
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">

//         {/* 👇 This will render /login/forgot content here */}
//         {/* <Outlet /> */}

//         <div className="text-center">
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             {isSignUp ? 'Create Account' : 'Sign in to your account'}
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
            

//             {!isSignUp && (
//               <div className="text-sm">
//                 <Link to="/forgot" className="font-medium text-primary hover:text-blue-700">
//                   Forgot your password?
//                 </Link>
//               </div>
//             )}
//           </div>

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//             >
//               {loading ? (
//                 'Processing...'
//               ) : isSignUp ? (
//                 'Sign Up'
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <button
//             onClick={() => setIsSignUp(!isSignUp)}
//             className="font-medium text-primary hover:text-blue-700"
//           >
//             {isSignUp ? (
//               'Already have an account? Sign In'
//             ) : (
//               'Need an account? Sign Up'
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link, Outlet } from 'react-router-dom';  // <-- Added Outlet
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        await signup(email, password);
        toast.success('Account created successfully!');
      } else {
        await login(email, password);
        toast.success('Logged in successfully!');
      }
      navigate('/', { replace: true });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a252f] via-[#34495e] to-[#8e44ad] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl backdrop-blur-lg">

        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isSignUp ? 'Create Account' : 'Sign in to your account'}
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition duration-300 ease-in-out shadow-lg"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm transition duration-300 ease-in-out shadow-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {!isSignUp && (
              <div className="text-sm">
                <Link to="/forgot" className="font-medium text-primary hover:text-blue-700 transition duration-300">
                  Forgot your password?
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#8e44ad] to-[#34495e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:scale-105 hover:from-[#34495e] hover:to-[#8e44ad] shadow-xl transition duration-300 ease-in-out transform active:scale-95"
            >
              {loading ? (
                <div className="animate-spin rounded-full border-4 border-t-4 border-primary w-6 h-6"></div>
              ) : isSignUp ? (
                'Sign Up'
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-medium text-primary hover:text-blue-700 transition duration-300"
          >
            {isSignUp ? (
              'Already have an account? Sign In'
            ) : (
              'Need an account? Sign Up'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
