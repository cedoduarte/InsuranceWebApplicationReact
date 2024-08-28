import { BASE_API_URL, HEADERS } from "../shared/constants";
import { IAuthenticateUserCommand, IUserAuthenticationResult } from "../shared/interfaces";

export function useAuthentication(
    onAuthenticated: (result: IUserAuthenticationResult) => void,
    onError: (error: any) => void) {

    const endPoint: string = `${BASE_API_URL}/User/authenticate`;

    async function authenticate(command: IAuthenticateUserCommand) {
        const abortController = new AbortController();
        try {
            const response = await fetch(endPoint, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify(command),
                signal: abortController.signal
            });
            if (!response.ok) {
                const errorMessage: string = await response.text();
                throw new Error(errorMessage);
            }
            const data = await response.json();
            onAuthenticated(data);
        } catch (error: any) {
            onError(error);
        } finally {
            abortController.abort();
        }
    }

    return { authenticate };
}