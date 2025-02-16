import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../Loading/Loading";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [MyWatchList, setMyWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  React.useEffect(() => {
    user &&
      fetch(`http://localhost:5000/watchlist?email=${user?.email}`)
        .then((res) => res.json())
        .then((myWatchlist) => {
          fetch(`http://localhost:5000/reviews`)
            .then((res) => res.json())
            .then((allReviews) => {
              const filteredData = allReviews.filter((review) => {
                return myWatchlist.some((item) => item.gameId === review._id);
              });
              setMyWatchList(filteredData);
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
  }, [user]);
  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold">GameWatchList</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          {MyWatchList.length === 0 ? (
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-3xl font-bold">No Game Found</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
              {MyWatchList.map((game, index) => (
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
        </>
      )}
    </div>
  );
};

export default GameWatchList;
