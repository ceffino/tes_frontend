/* eslint-disable no-undef */
import { useState } from 'react';
import '../components/Login.css';
const Login = () => {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  return (

        <div className="container ">
            <div className="row text-center">
                <div className="col">
                    <h2>ZedDesk</h2>
                    <small>Masuk Ke ZedDesk</small>
                </div>
            </div>

            <div className="row justify-content-center pt-3">
               <div className="col-md-8">
                <form>
                <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={onChangeUsername}/>
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={onChangePassword}/>
                </div>
                <div className="mb-3 ">
                <a href="#"><label className="form-check-label" >Lupa Kata Sandi?</label></a>
                        </div>
                        <div className="row d-flex">
                          <button type="submit" className="btn btn-outline-primary">MASUK</button>
                            </div>
                        </form>
                        </div>
                </div>
        </div>
  );
};
export default Login;
