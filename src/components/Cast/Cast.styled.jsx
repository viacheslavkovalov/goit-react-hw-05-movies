import styled from 'styled-components';

export const Title = styled.h2`
  color: #406882;
  font-size: 24px;
  padding-bottom: 20px;
  text-transform: uppercase;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
`;

export const CastItem = styled.li`
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

export const HeroCard = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

export const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const HeroInfo = styled.div`
  padding: 5px;
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #8c8c8c;
`;
