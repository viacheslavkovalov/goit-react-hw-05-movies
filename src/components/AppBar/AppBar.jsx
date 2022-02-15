import { Outlet, NavLink } from 'react-router-dom';
import { Header, Wrapper, NavList, NavItem } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <Wrapper>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#1d4d4f' : '#008891',
                textDecoration: isActive
                  ? 'underline 5px solid #406882'
                  : 'none',
              })}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/movies"
              style={({ isActive }) => ({
                color: isActive ? '#1d4d4f' : '#008891',
                textDecoration: isActive
                  ? 'underline 5px solid #406882'
                  : 'none',
              })}
            >
              Movies
            </NavLink>
          </NavItem>
        </NavList>
      </Wrapper>
      <Outlet></Outlet>
    </Header>
  );
}
