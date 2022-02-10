import { NavLink, Outlet } from 'react-router-dom';
export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
