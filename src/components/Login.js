import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
    FacebookLoginButton,
    GithubLoginButton,
    GoogleLoginButton,
} from "react-social-login-buttons";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn, facebookSignIn, githubSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //hủy bỏ event mà ko làm ảnh hưởng tới những event khác
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        //hủy bỏ event mà ko làm ảnh hưởng tới những event khác
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleFacebookSignIn = async (e) => {
        //hủy bỏ event mà ko làm ảnh hưởng tới những event khác
        e.preventDefault();
        try {
            await facebookSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGithubSignIn = async (e) => {
        //hủy bỏ event mà ko làm ảnh hưởng tới những event khác
        e.preventDefault();
        try {
            await githubSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">3Blocks Auth Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Log In
                        </Button>
                    </div>
                </Form>
                <hr />
                <div>
                    <GoogleLoginButton onClick={handleGoogleSignIn} />
                </div>
                <div>
                    <FacebookLoginButton onClick={handleFacebookSignIn} />
                </div>
                <div>
                    <GithubLoginButton onClick={handleGithubSignIn} />
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
};

export default Login;
