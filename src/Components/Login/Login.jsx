import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook,FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter} from 'react-icons/fa6';
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const {googleSignIn} = useAuth();

  // const navigate = useNavigate()


  const socialSignIn = (social)=> {

    social()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="">
                  <a href="#" className=" text-sm hover:underline hover:text-blue-500">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <Link to= '/registration'>
                  <p className="hover:text-blue-500">Create a new account</p>
                </Link>
              </div>
              <div className="text-center mt-2">
                <p className= 'font-semibold uppercase text-xl text-blue-500'>Social log in</p>
                <div className="space-x-4 mt-3">
                    <button onClick={()=>socialSignIn(googleSignIn)}><FcGoogle className="text-3xl"></FcGoogle></button>
                    <button><FaFacebook className="text-3xl"></FaFacebook></button>
                    <button><FaGithub className="text-3xl"></FaGithub></button>
                    <button><FaSquareXTwitter className="text-3xl"></FaSquareXTwitter></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
