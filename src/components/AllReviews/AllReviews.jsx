import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
const AllReviews = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [AllReviews, setAllReviews] = React.useState([]);
  React.useEffect(() => {
    fetch("https://ph-b10-a10-chill-gamer-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAllReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold">All Reviews</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
          {AllReviews.map((game, index) => (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="card-title">{game.title}</h2>
                  <span>⭐ {game.ratings}</span>
                </div>
                <p>{game.description.slice(0, 200) + "..."}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() =>
                      navigate(`/review/${game._id}`, { state: game })
                    }
                    className="btn btn-primary text-white"
                  >
                    Explore Details
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

export default AllReviews;
