import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const NavLink = styled(Link)`
  color: #f3ccbe;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #e8a55f;
    text-decoration: underline;
  }
`;
  
export const NavMenu = styled.div`
    justify-content: space-between;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0rem;
    background-color: #680707;
    color: black;
    box-shadow: 0 2px 2px 2px rgb(9 9 9 / 23%);
`;
  
  