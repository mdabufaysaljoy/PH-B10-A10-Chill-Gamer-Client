import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Register() {
  const { createUser, LoginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const isValidLength = password.length >= 6;

  if (!hasUpperCase) {
    toast.error("Password must contain at least one uppercase letter.");
    return false;
  }

  if (!hasLowerCase) {
    toast.error("Password must contain at least one lowercase letter.");
    return false;
  }

  if (!isValidLength) {
    toast.error("Password must be at least 6 characters long.");
    return false;
  }

  return true;
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (validatePassword(password)) {
         createUser(email, password)
           .then((result) => {
             toast.success("Register Successfully", {
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
     }
  };

  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        toast.success("SignIn Successfully", {
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
      <div className="hero-content flex-col gap-40 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration</h1>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com/profile.jpg"
                  className="input input-bordered"
                  name="photoURL"
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
                  Register
                </button>
              </div>
            </form>
            <p className="text-center">or</p>{" "}
            <div>
              <div className="form-control">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-primary text-white"
                >
                  Sign In with Google
                </button>
              </div>
              <a
                href="/login"
                className="link text-blue-500 block text-center mt-2"
              >
                Already Have An Account? Click To Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
