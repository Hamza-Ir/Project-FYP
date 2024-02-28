import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCamera,
  HiOutlineHome,
  HiOutlinePhotograph,
} from "react-icons/hi";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/all-cameras">
            <HiOutlineCamera />
            <span>All Cameras</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/camera-1">
            <HiOutlineCamera />
            <span>Camera-1</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/camera-2">
            <HiOutlineCamera />
            <span>Camera-2</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/training">
            <HiOutlinePhotograph />
            <span>Data Training</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
