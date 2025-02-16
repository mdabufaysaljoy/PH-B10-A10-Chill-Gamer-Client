import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Register() {
  const { loginUser, LoginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then((result) => {
       toast.success("Login Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
       });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
             toast.success("Login Successfully", {
               position: "top-right",
               autoClose: 3000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
             });
        navigate("/");
      })
      .catch((error) => {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-40 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your_email@example.com"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary font-bold text-white">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">or</p>
            <div>
              <div className="form-control">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-primary text-white"
                >
                  Login with Google
                </button>
              </div>
              <a href="/register" className="link text-blue-500 block text-center mt-2">New Here? Click To Register </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
