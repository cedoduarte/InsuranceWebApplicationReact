import { BASE_API_URL, HEADERS } from "../shared/constants";
import { IAuthenticateUserCommand, IUserAuthenticationResult } from "../shared/interfaces";

export function useAuthentication(onAuthenticated: (result: IUserAuthenticationResult) => void) {
    async function authenticate(command: IAuthenticateUserCommand) {
        const abortController = new AbortController();
        const signal = abortController.signal;

        try {
            const response = await fetch(`${BASE_API_URL}/User/authenticate`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify(command),
                signal
            });
            if (signal.aborted) {
                throw new Error('Request was aborted');
            }
            const data = await response.json();
            onAuthenticated(data);
        } catch (error: any) {
            //this.toaster.critical("error");
            console.error(error);
        } finally {
            abortController.abort();
        }
    }

    return { authenticate };
}