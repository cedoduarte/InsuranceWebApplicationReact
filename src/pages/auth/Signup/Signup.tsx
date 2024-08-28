import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ICreateUserCommand, IUserViewModel } from "../../../shared/interfaces";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import { toast } from "react-toastify";

export function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ICreateUserCommand>();
    const { register } = useRegisterUser(onRegistered, onRegisteredError);

    function onRegistered(result: IUserViewModel) {
        toast.success("User created successfully");
        navigate("/");
    }
    
    function onRegisteredError(error: any) {
        toast.error(error.message);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        register(formData!);
    }

    function handleFirstNameChange(event: any) {
        setFormData({...formData, firstName: event.target.value} as ICreateUserCommand);
    }

    function handleLastNameChange(event: any) {
        setFormData({...formData, lastName: event.target.value} as ICreateUserCommand);
    }

    function handleEmailChange(event: any) {
        setFormData({...formData, email: event.target.value} as ICreateUserCommand);
    }

    function handlePasswordChange(event: any) {
        setFormData({...formData, password: event.target.value} as ICreateUserCommand);
    }

    function handleConfirmedPasswordChange(event: any) {
        setFormData({...formData, confirmedPassword: event.target.value} as ICreateUserCommand);
    }

    function handleBirthdateChange(event: any) {
        setFormData({...formData, birthdate: event.target.value} as ICreateUserCommand);
    }

    function handleGoLoginClick() {
        navigate("/");
    }

    return (
        <>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">badge</span>
                    </span>
                    <input name="firstName" type="text" className="form-control" placeholder="First name" onChange={handleFirstNameChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">badge</span>
                    </span>
                    <input name="lastName" type="text" className="form-control" placeholder="Last name" onChange={handleLastNameChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">mail</span>
                    </span>
                    <input name="email" type="email" className="form-control" placeholder="Email" onChange={handleEmailChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">key</span>
                    </span>
                    <input name="password" type="password" className="form-control" placeholder="Password" onChange={handlePasswordChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">key</span>
                    </span>
                    <input name="confirmedPassword" type="password" className="form-control" placeholder="Confirmed password" onChange={handleConfirmedPasswordChange} />
                </div>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">
                        <span className="material-icons">calendar_month</span>
                    </span>
                    <input name="birthdate" type="date" className="form-control" placeholder="Birthdate" onChange={handleBirthdateChange} />
                </div>
                <button className="signup-button btn btn-primary" type="submit">Sign Up</button>
                <div className="signup-go-login" onClick={handleGoLoginClick}>Go Login</div>
            </form>
        </>
    );
}