import React, { useContext, useState } from "react";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../providers/AuthProvider";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myReviews, setMyReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    const url = `http://localhost:5000/my-reviews?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleUpdateClick = (review) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };
  const handleDeleteClick = (review) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (confirmDelete) {
      fetch(`http://localhost:5000/delete-review/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast.warning("Review Deleted Successfully");
            setMyReviews(myReviews.filter((r) => r._id !== review._id));
          }
        })
        .catch((error) => console.error("Error deleting review:", error));
    }
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedReview = {
      id: selectedReview._id,
      image: formData.get("image"),
      title: formData.get("title"),
      description: formData.get("description"),
      ratings: formData.get("ratings"),
      year: formData.get("year"),
      geners: formData.get("geners"),
      email: user?.email,
      name: user?.displayName,
    };

    fetch(`http://localhost:5000/update-review/${updatedReview.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setMyReviews(
            myReviews.map((review) =>
              review._id === updatedReview.id ? updatedReview : review
            )
          );
          toast.success("Review Updated Successfully");
          setIsModalOpen(false);
        }
      })
      .catch((error) => console.error("Error updating review:", error));
  };

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold">All Reviews</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto my-12">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((game, index) => (
                <tr key={index}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={game.image} alt={game.title} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="font-bold">{game.title}</h3>
                  </td>
                  <td>
                    <div className="join">
                      <button
                        onClick={() => handleUpdateClick(game)}
                        className="btn join-item btn-sm btn-warning"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteClick(game)}
                        className="btn join-item btn-sm btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <form
            onSubmit={handleUpdateSubmit}
            className="w-full flex flex-col gap-4 p-8"
          >
            <label className="label">Cover Image</label>
            <input
              type="url"
              name="image"
              defaultValue={selectedReview.image}
              className="input input-bordered"
              required
            />

            <label className="label">Review Title</label>
            <input
              type="text"
              name="title"
              defaultValue={selectedReview.title}
              className="input input-bordered"
              required
            />

            <label className="label">Review Description</label>
            <textarea
              name="description"
              defaultValue={selectedReview.description}
              className="textarea textarea-bordered"
              required
            ></textarea>

            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Review Rating</span>
              </label>
              <input
                type="range"
                min={1}
                max="5"
                defaultValue={selectedReview.ratings}
                className="range range-success"
                name="ratings"
                required
              />
              <div className="flex w-full justify-between px-2 text-xs">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
            <label className="label">Genres</label>
            <select
              name="geners"
              defaultValue={selectedReview.geners}
              className="select select-bordered"
              required
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
            </select>

            <label className="label">User Email</label>
            <input
              type="text"
              name="email"
              readOnly
              value={user?.email}
              className="input input-bordered"
              required
            />
            <label className="label">Publishing Year</label>
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName}
              className="input input-bordered"
              required
            />
            <label className="label">Publishing Year</label>
            <input
              type="text"
              name="year"
              readOnly
              value={new Date().getFullYear()}
              className="input input-bordered"
              required
            />

            <input
              type="submit"
              value="Update Review"
              className="btn btn-primary"
            />
          </form>
        </Modal>
      )}
    </div>
  );
};

export default MyReviews;
