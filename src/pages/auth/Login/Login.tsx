import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { IUserAuthenticationResult } from "../../../shared/interfaces";
import { toast } from 'react-toastify';

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { authenticate } = useAuthentication(onAuthenticated, onAuthenticatedError);

    function onAuthenticated(result: IUserAuthenticationResult) {
        if (result!.isAuthenticated) {
            localStorage.setItem("authenticatedUser", JSON.stringify(result!.authenticatedUser));
            navigate("/home");
        } else {
            toast.error(result.errorMessage);
        }
    }

    function onAuthenticatedError(error: any) {
        toast.error(error.message);
    }

    async function handleSubmit(event: any) {
        event.preventDefault();
        authenticate({ email, password });
    }

    function handleEmailChange(event: any) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value);
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">person</span>
                    </span>
                    <input name="email" type="email" className="form-control" placeholder="Email" onChange={handleEmailChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">key</span>
                    </span>
                    <input name="password" type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="login-button btn btn-primary">Login</button>
                <div className="login-go-signup">Sign Up</div>
            </form>
        </>
    );
}