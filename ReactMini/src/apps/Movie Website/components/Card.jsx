import { useGlobalContext } from "../context/context";
import { Outlet, Link } from "react-router-dom";

function Card() {
  const { userContextValue } = useGlobalContext();
  const apiData = userContextValue.data;
  console.log(apiData);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 justify-items-center m-14">
        {apiData &&
          Array.isArray(apiData) &&
          apiData.map((movieData) => (
            <section
              key={movieData.imdbID}
              className="border-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl"
            >
              <Link to={`/movie/${movieData.imdbID}`}>
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-center items-center p-4">
                    <img
                      className="h-64 w-96 object-contain"
                      src={movieData.Poster}
                      alt={movieData.Title}
                    />
                  </div>
                  <div className="bg-gray-200 py-2 px-4 text-center">
                    <p className="text-gray-600">{movieData.Title}</p>
                    <p className="text-gray-600">{movieData.Year}</p>
                  </div>
                </div>
              </Link>
            </section>
          ))}
      </div>
    </>
  );
}

export default Card;

// // import { AppContext } from '../context/context';
// import { useGlobalContext } from "../context/context";
// import { Outlet, Link } from "react-router-dom";

// function Card() {
//   const { userContextValue } = useGlobalContext();
//   const apiData = userContextValue.data;
//   console.log(apiData);

//   return (
//     <>
//       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 justify-items-center m-16">
//         {apiData.map((movieData) => (
//           <section
//             key={movieData.imdbID}
//             className="border-2 rounded-md overflow-hidden shadow-lg hover:shadow-xl"
//           >
//             <Link to={`/movie/${movieData.imdbID}`}>
//               <div className="flex flex-col justify-between h-full">
//                 <div className="flex justify-center items-center p-4">
//                   <img
//                     className="h-64 w-96 object-contain"
//                     src={movieData.Poster}
//                     alt={movieData.Title}
//                   />
//                 </div>
//                 <div className="bg-gray-200 py-2 px-4 text-center">
//                   <p className="text-gray-600">{movieData.Title}</p>
//                   <p className="text-gray-600">{movieData.Year}</p>
//                 </div>
//               </div>
//             </Link>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Card;
