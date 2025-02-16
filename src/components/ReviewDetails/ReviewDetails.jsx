import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const [addToWathclist, setAddToWatchlist] = useState(false);
  fetch(`http://localhost:5000/watchlist/${state._id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        setAddToWatchlist(true);
      }
    })
    .catch((error) => console.error("Error getting watchlist:", error));
  const handleAddToWatchlist = (event) => {
    if (event.target.checked) {
      const gameId = state._id;
      const userId = user?.email;
      const watchlistData = { gameId, userId };

      fetch("http://localhost:5000/add-to-watchlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watchlistData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setAddToWatchlist(true);
            toast.success("Added to Watchlist");
          }
        })
        .catch((error) => console.error("Error adding to watchlist:", error));
    } else {
      const gameId = state._id;

      fetch(`http://localhost:5000/remove-from-watchlist/${gameId}`, {
        method: "DELETE",
      })
          .then((res) => {
              if (res.ok) { 
                  toast.warning("Removed from Watchlist");
                  setAddToWatchlist(false);
              } else {
                  toast.error("Failed to remove from Watchlist");
              }
        })
        
        .catch((error) =>
          console.error("Error removing from watchlist:", error)
        );
    }
  };
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold">ReviewDetails</h1>
      <div className="my-12">
        <div className="card bg-base-100 w-full shadow-xl">
          <figure>
            <img src={state.image} alt={state.title} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-bold">{state.title}</h2>
                <span className="badge badge-neutral">{state.geners}</span>
              </div>
              <span className="text-lg font-semibold">
                Rating: ⭐ {state.ratings}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 my-4 text-lg font-semibold">
                <span>Reviwer Name: {state.name}</span>
                <span>Reviwer Email: {state.email}</span>
              </div>
              <div className="form-control">
                <label className="btn btn-ghost label text-md font-semibold gap-2 cursor-pointer">
                  <span>Add to Watchlist</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={addToWathclist}
                    onChange={handleAddToWatchlist}
                  />
                </label>
              </div>
            </div>
            <p className="py-6">{state.description}</p>
            {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
