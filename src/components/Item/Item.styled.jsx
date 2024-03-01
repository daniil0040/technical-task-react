import styled from 'styled-components';

export const ListItemImgThumb = styled.div`
  height: 268px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const ListItemImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const MainCardText = styled.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: #121417;
`;
export const MainCardTextSpan = styled.span`
  color: #3470ff;
`;
export const MainCardTextThumb = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 9px;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const SecondaryCardTextThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`;

export const SecondaryCardText = styled.p`
  color: #1214177f;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
  &:not(:last-child) {
    border-right: 1px solid #12141719;
    padding-right: 6px;
  }
`;

export const CardModalBtn = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 12px 0;
  width: 100%;
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  border: none;
`;

export const ItemModalImg = styled.img`
  width: 100%;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const ItemModalMainText = styled.h3`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  color: #121417;
  margin-bottom: 8px;

  span {
    color: #3470ff;
  }
`;

export const ItemModalSecondaryTextThumb = styled.div`
  display: flex;
  gap: 4px 6px;
  flex-wrap: wrap;
  height: 40px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const ItemModalDescText = styled.p`
  color: rgb(18, 20, 23);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`;

export const ItemModalSubtitleText = styled.h3`
  color: rgb(18, 20, 23);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const ItemModalRentCondThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ItemModalRentCondText = styled.p`
  display: inline-block;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const ItemModalBtn = styled.button`
  border-radius: 12px;
  background: #3470ff;
  padding: 12px 0;
  width: 100%;
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  border: none;
`;
