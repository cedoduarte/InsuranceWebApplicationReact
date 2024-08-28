import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login/Login';
import { AuthGuard } from './guards/AuthGuard';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Users } from './pages/Users/Users';
import { Cars } from './pages/Cars/Cars';
import { Insurances } from './pages/Insurances/Insurances';
import { Signup } from './pages/auth/Signup/Signup';
import { UserRead } from './pages/Users/crud/UserRead/UserRead';
import { CarRead } from './pages/Cars/crud/CarRead/CarRead';
import { CarNew } from './pages/Cars/crud/CarNew/CarNew';
import { InsuranceRead } from './pages/Insurances/crud/InsuranceRead/InsuranceRead';
import { InsuranceNew } from './pages/Insurances/crud/InsuranceNew/InsuranceNew';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<AuthGuard />} >
          <Route path="users" element={<Users />} >
            <Route path="user-read" element={<UserRead />} />
          </Route>
          <Route path="cars" element={<Cars />} >
            <Route path="car-read" element={<CarRead />} />
            <Route path="car-new" element={<CarNew />} />
          </Route>
          <Route path="insurances" element={<Insurances />} >
            <Route path="insurance-read" element={<InsuranceRead />} />
            <Route path="insurance-new" element={<InsuranceNew />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;