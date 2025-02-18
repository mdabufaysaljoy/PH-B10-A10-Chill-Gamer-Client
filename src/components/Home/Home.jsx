import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DefaultProfile from "../../assets/defaultProfile.png";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [topRatedGames, setTopRatedGames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  React.useEffect(() => {
    fetch("https://ph-b10-a10-chill-gamer-server.onrender.com/top-rated-games")
      .then((res) => res.json())
      .then((data) => {
        setTopRatedGames(data);
        setLoading(false);
      });
  }, []);
    return (
      <div className="py-10 px-4">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          className=" h-96 bg-primary rounded-lg shadow-lg"
        >
          <SwiperSlide className=" text-white p-10 flex flex-col items-center">
            <div className="flex flex-col items-center p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sRNECu5VZwtn8jUmgG2A6I-foNjZzsbOtQ&s"
                alt=""
                className="h-40"
              />
              <h2 className="text-2xl font-bold mt-4">
                What is a Game Review?
              </h2>
              <p className="mt-4 text-center">
                A game review provides an in-depth analysis of a video game,
                covering graphics, gameplay, sound, and overall experience.
                Reviews often include comments, ratings, and user feedback. Game
                reviews help gamers make informed decisions before purchasing a
                game.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" text-white p-10 flex flex-col items-center">
            <div className="flex flex-col items-center p-4">
              <img
                src="https://consumersiteimages.trustpilot.net/business-units/61b9e604b678aa4a02e8905b-198x149-1x.jpg"
                alt=""
                className="h-40"
              />
              <h2 className="text-2xl mt-4 font-bold">
                Why Are Game Reviews Important?
              </h2>
              <p className="mt-4 text-center">
                Game reviews help players make informed decisions before
                purchasing, ensuring they get the best gaming experience.
                Reviews can also help players understand the game better.
                Reviews can also help players understand the game better.
                Reviews can also help players understand the game better.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="text-white p-10 flex flex-col items-center">
            <div className="flex flex-col items-center p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPMT94yalkXgRp7AOBmgcMtLA4hn6qiE2lQ&s"
                alt=""
                className="h-40"
              />
              <h2 className="text-2xl font-bold mt-4">How Our App Helps</h2>
              <p className="mt-4 text-center">
                Our game review app provides honest reviews, ratings, and user
                feedback to help gamers choose the right games. It also helps
                players understand the game better. It also helps players
                understand the game better. It also helps players understand the
                game better.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <Fade direction="up">
            <h2 className="text-3xl font-bold mt-10">Highest Rated Games</h2>
          </Fade>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
              {topRatedGames.map((game, index) => (
                <Fade key={index} direction="up" cascade>
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
                      <p>{game.description.slice(0, 100) + "..."}</p>
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
                </Fade>
              ))}
            </div>
          )}
        </div>
        <div>
          <Fade direction="up">
            <h2 className="text-3xl font-bold mt-10">Latest Reviews</h2>
          </Fade>
          <Fade direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-base-200 p-4 rounded-xl">
                <img src={DefaultProfile} alt="" className="h-12" />
                <div>
                  <h5 className="text-lg font-bold">Spider Man Game</h5>
                  <p>This spider man game was very good. I loved it...</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="up">
            <h1 className="text-3xl font-bold ">
              <Typewriter
               loop={true} words={["Do You Have Any Game Review?", "Share Your Game Review With Evryone."]} cursorColor="blue" cursorBlinking={false} cursor={true}
              />
            </h1>
          </Fade>
          <Fade direction="up">
            <p className="mt-2">You can share your review with us.</p>
          </Fade>
          <Fade direction="up">
            <a
              href="/add-review"
              className="btn btn-ghost mt-6 font-bold text-blue-500 underline"
            >
              Click To Post Your Review
            </a>
          </Fade>
        </div>
      </div>
    );
};

export default Home;
