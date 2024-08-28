import { useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export function AuthGuard() {
    const navigate = useNavigate();
    
    let authenticatedUser = JSON.parse(localStorage.getItem("authenticatedUser")!);
    if (authenticatedUser) {
        return <Home />;
    } else {
        navigate('/login');
        return null;
    }
};