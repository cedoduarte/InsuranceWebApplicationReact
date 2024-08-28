import { BASE_API_URL, HEADERS } from "../shared/constants";
import { ICreateUserCommand, IUserViewModel } from "../shared/interfaces";

export function useRegisterUser(
    onRegistered: (result: IUserViewModel) => void,
    onError: (error: any) => void) {
        
    const endPoint: string = `${BASE_API_URL}/User/create`;

    async function register(command: ICreateUserCommand) {
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
            onRegistered(data);
        } catch (error: any) {
            onError(error);
        } finally {
            abortController.abort();
        }
    }

    return { register };
}