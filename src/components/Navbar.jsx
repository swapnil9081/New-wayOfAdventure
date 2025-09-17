
// import { Disclosure } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, useLocation } from "react-router-dom";

// const navigation = [
//   { name: "Home", path: "/", current: false },
//   { name: "Why Us", path: "/why-us", current: true },
//   { name: "About Us", path: "/about", current: false },
//   { name: "Trip Offers", path: "/trips", current: false },
//   { name: "Contact Us", path: "/contact", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* Mobile Menu Button */}
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>

//               {/* Logo */}
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex items-center">
//                   <img
//                     src="https://cdn.dribbble.com/userupload/15262311/file/original-adc3a4aa599c592a6ac8fcef68f81ab2.jpg?format=webp&resize=400x300&vertical=center"
//                     alt="TripWithFriends"
//                     className="h-10 w-auto"
//                   />
//                   <span className="ml-2 text-xl font-bold text-white tracking-wide">TripWithFriends</span>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => {
//                       const isCurrent = location.pathname === item.path;
//                       return (
//                         <Link
//                           key={item.name}
//                           to={item.path}
//                           className={classNames(
//                             isCurrent
//                               ? "bg-white text-blue-600"
//                               : "text-white hover:bg-white/20 hover:text-yellow-300",
//                             "rounded-md px-3 py-2 text-sm font-semibold transition-colors"
//                           )}
//                         >
//                           {item.name}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Navigation Panel */}
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => {
//                 const isCurrent = location.pathname === item.path;
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={classNames(
//                       isCurrent ? "bg-white text-blue-600" : "text-white hover:bg-blue-600",
//                       "block rounded-md px-3 py-2 text-base font-medium transition-colors"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/", current: false },
  { name: "Why Us", path: "/why-us", current: true },
  { name: "About Us", path: "/about", current: false },
  { name: "Trip Offers", path: "/trips", current: false },
  { name: "Contact Us", path: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center">
                  <img
                    src="https://cdn.dribbble.com/userupload/15262311/file/original-adc3a4aa599c592a6ac8fcef68f81ab2.jpg?format=webp&resize=400x300&vertical=center"
                    alt="TripWithFriends"
                    className="h-10 w-auto"
                  />
                  <span className="ml-2 text-xl font-bold text-white tracking-wide">TripWithFriends</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const isCurrent = location.pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={classNames(
                            isCurrent
                              ? "bg-white text-blue-600"
                              : "text-white hover:bg-white/20 hover:text-yellow-300",
                            "rounded-md px-3 py-2 text-sm font-semibold transition-colors"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.path;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.path}
                    className={classNames(
                      isCurrent ? "bg-white text-blue-600" : "text-white hover:bg-blue-600",
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
