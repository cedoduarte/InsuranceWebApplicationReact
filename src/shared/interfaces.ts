export interface IAuthenticateUserCommand {
    email: string;
    password: string;
}

export interface IUserAuthenticationResult {
    isAuthenticated: boolean;
    errorMessage: string;
    authenticatedUser: IUserViewModel;
}

export interface IUserViewModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthdate: string;
    lastModified: string;
    isDeleted: boolean;
    lastDeleted: string;
    lastCreated: string;
}

export interface ICreateUserCommand {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmedPassword: string;
    birthdate: string;
}