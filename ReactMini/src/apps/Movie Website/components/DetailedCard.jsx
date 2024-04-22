import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Header from "./Header";

function DetailedCard() {
  const { id } = useParams();
  const fetchData = useFetch(id);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-8">
        <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={fetchData.Poster}
            alt={fetchData.Title}
            className="max-w-full max-h-96 object-cover object-center mx-auto my-auto "
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              {fetchData.Title}
            </h2>
            <div className="flex items-center justify-between mt-4">
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 font-semibold mr-2">
                    IMDB Rating:
                  </span>
                  <p className="text-gray-600">{fetchData.imdbRating} / 10</p>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 font-semibold mr-2">
                    Released:
                  </span>
                  <p className="text-gray-600">{fetchData.Released}</p>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-600 font-semibold mr-2">
                    Country:
                  </span>
                  <p className="text-gray-600">{fetchData.Country}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 font-semibold mr-2">
                    Genre:
                  </span>
                  <p className="text-gray-600">{fetchData.Genre}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
