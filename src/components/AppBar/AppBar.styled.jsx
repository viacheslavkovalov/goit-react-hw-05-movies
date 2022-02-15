import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 4px solid #92a9bd;
  background-color: #caf0f8;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 45px;
  padding-right: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: 50px;
  color: #008891;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.04em;
  line-height: 1.143;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  /* &:hover {
    color: #1d4d4f;
  } */
`;
