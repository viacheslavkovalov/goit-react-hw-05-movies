import styled from 'styled-components';
import { FaHandPointLeft } from 'react-icons/fa';

export const BackButton = styled.button`
  width: 112px;
  height: 44px;
  cursor: pointer;
  color: #8c8c8c;
  background-color: #fff;
  text-transform: uppercase;
  border: 3px solid rgb(0, 136, 145);
  border-radius: 5px;
  margin-left: 30px;
  margin-top: 0px;
  margin-right: 30px;
  &:hover,
  &:focus,
  &:active {
    border: none;
    color: #fff;
    background-color: rgb(0, 136, 145);
  }
`;

export const LeftArrow = styled(FaHandPointLeft)`
  width: 30px;
  height: 30px;
  fill: rgb(0, 136, 145);
  ${BackButton}:hover & {
    fill: #fff;
  }
`;
