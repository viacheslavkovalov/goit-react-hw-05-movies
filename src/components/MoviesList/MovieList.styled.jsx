import styled from 'styled-components';

export const FilmCard = styled.article`
  position: relative;
  display: block;
  transition: transform 200ms linear;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 294px;
  }
  @media screen and (min-width: 1024px) {
    width: 274px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 1;
  }
`;

export const FilmList = styled.ul`
  &:after {
    content: '';
    flex: auto;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
`;

export const FilmItem = styled.li`
  @media screen and (min-width: 768px) {
    margin: 15px;
    flex-basis: calc((100% - 60px) / 2);
  }
  @media screen and (min-width: 1024px) {
    flex-basis: calc((100% - 90px) / 3);
  }
`;

export const CardImage = styled.img`
  border-radius: 5px;
  margin-bottom: 10px;
  height: 398px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 294px;
  }
  @media screen and (min-width: 1024px) {
    width: 274px;
  }
  ${FilmCard}:hover & {
    border: 3px solid #92a9bd;
    transition: border 200ms linear;
    background-color: #92a9bd;
    @media screen and (min-width: 1280px) {
      border: 5px solid #92a9bd;
    }
  }
`;

export const FilmInfo = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const FilmTitle = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.333;
  text-transform: uppercase;
  color: #152d35;
  margin-left: 10px;
`;
