import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const review = Object.fromEntries(formData.entries());
    review.ratings = Number(review.ratings);

    fetch("http://localhost:5000/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((response) => {
      if(response.insertedId){
        toast.success("Review Added Successfully");
      } 
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        toast.error("Failed to add review. Please try again.");
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold my-12 text-center">Add Review</h1>
      <div className="my-12 md:w-3/4 mx-auto bg-slate-300 rounded-3xl flex justify-center items-center">
        <form
          onSubmit={handleOnSubmit}
          className="w-full flex flex-col gap-4 justify-center items-center p-8"
        >
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Cover Image</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Review Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <textarea
              placeholder="Type here"
              name="description"
              className="textarea textarea-bordered textarea-lg w-full max-w-lg"
              required
            ></textarea>
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Review Rating</span>
            </label>
            <input
              type="range"
              min={1}
              max="5"
              defaultValue={1}
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
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Publishing Year</span>
            </label>
            <input
              type="text"
              name="year"
              readOnly
              value={new Date().getFullYear()}
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Genres</span>
            </label>
            <select
              name="geners"
              className="select select-bordered w-full max-w-lg"
              required
            >
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
            </select>
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              readOnly
              value={user?.email }
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName }
              className="input input-bordered w-full max-w-lg"
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
