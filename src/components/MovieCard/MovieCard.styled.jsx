import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  display: flex;
  padding: 30px;
`;

export const MovieImage = styled.img`
  display: block;
  object-fit: cover;
  width: 240px;
  height: 356px;
  border-radius: 5px;
  @media screen and (min-width: 767px) {
    width: 264px;
    height: 373px;
  }
  @media screen and (min-width: 1280px) {
    width: 396px;
    height: 477px;
  }
`;

export const MovieInfo = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-left: 30px;
  line-height: 1.5;
`;

export const MovieTitle = styled.h2`
  color: #406882;
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
export const MovieSubTitle = styled.h3`
  font-size: 20px;
  color: #8c8c8c;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ;
`;

export const MovieItem = styled.p`
  display: flex;
  /* margin-bottom: 10px; */
  color: #8c8c8c;
`;

export const MovieGenreItem = styled.p`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 3px 8px;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;
