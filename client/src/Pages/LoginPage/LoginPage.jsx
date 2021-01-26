import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log("hello");
    const token = (e) => {
        e.preventDefault()
        let options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        };
        let path = 'http://127.0.0.1:8000/auth/jwt/create/';
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log('data', data)
                localStorage.setItem('Authorization', `JWT ${data.access}`)
            });
    }
    // await axios.post(`http://localhost:8000/auth/jwt/create`,
    //     {
    //         email: formData.email,
    //         password: formData.password,
    //     })

    //     .then(async () => {
    //         console.log("post", result)
    //         setAccess(result.data.access);
    //         setRefresh(result.data.refresh);
    //         let res = await axios({
    //             url: 'http://localhost:8000/auth/users/me/',
    //             method: 'get',
    //             // timeout: 8000,
    //             headers: {
    //                 'Authorization': 'JWT ' + access,
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         if (res.status == 200) {
    //             // test for status you want, etc
    //             console.log("get", res)
    //             localStorage.setItem("access_token", access);
    //             localStorage.setItem("refresh_token", refresh);
    //             dispatch(logIn(res.data.name, res.data.email, res.data.id))
    //             window.location.href = "/"
    //         }

    //     })
    //     .catch(() => {
    //         console.error("err===== =>", err);
    //     })



    return (
        <div id="login">
            <div id="login-form-container">
                <form id="login-form" onSubmit={token}>
                    <svg viewBox="0 0 24 24" className="tweeter-logo"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    <h1>Log in to Twitter</h1>
                    <br />
                    <div className="column">
                        <label htmlFor="email" >Phone, email, or username</label>
                        <input type="text" className="text" id="email" name="email" value={email} onChange={(e) => (
                            setEmail(e.target.value)
                        )} />
                        <div className="username error" ></div>

                        <label htmlFor="Password" >Password</label>
                        <input type="password" className="text" id="password" name="password" value={password}
                            onChange={(e) => (
                                setPassword(e.target.value))}
                        />
                        <div className="password error"></div>

                    </div>
                    <br />
                    <button className="login-btn" onClick={token}>Log in</button><br />
                </form>
                <div>
                    <div className="forgot-password" >
                        <Link to="/signup" >
                            <span>Forgot password?</span>
                        </Link>
                        <span > . </span>
                        <Link to="/reset" >
                            <span >Sign up for Twitter</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default LoginPage;