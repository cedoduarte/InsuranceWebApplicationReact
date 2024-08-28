export interface IAuthenticateUserCommand {
    email: string;
    password: string;
}

export interface IUserAuthenticationResult {
    isAuthenticated: boolean;
    errorMessage: string;
    authenticatedUser: any;
}