import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.nav`
  background: #FAFDFF;
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
   justify-content: flex-start; 
`;

export const FooterLink = styled(Link)`
  color: #04111D;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #04111D;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #04111D;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  color: #04111D;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
   width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterBtnLink = styled(Link)`
  border-radius: 4px;
  background: #FAFDFF;
  padding: 10px 20px;
  color: #005094;
  font-weight: Bold;
  outline: none;
  border: 3px solid #005094;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #005094;
    color: #FAFDFF;
  }
`;