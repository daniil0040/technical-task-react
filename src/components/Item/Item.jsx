import { ItemModal } from 'components/ItemModal/ItemModal';
import { useState } from 'react';
import {
  CardModalBtn,
  ItemModalBtn,
  ItemModalDescText,
  ItemModalImg,
  ItemModalMainText,
  ItemModalRentCondText,
  ItemModalRentCondThumb,
  ItemModalSecondaryTextThumb,
  ItemModalSubtitleText,
  ListItemImg,
  ListItemImgThumb,
  MainCardText,
  MainCardTextSpan,
  MainCardTextThumb,
  SecondaryCardText,
  SecondaryCardTextThumb,
} from './Item.styled';

export const Item = ({
  item: {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
  },
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const paramsAddress = address.split(', ');
  const city = paramsAddress[paramsAddress.length - 2];
  const country = paramsAddress[paramsAddress.length - 1];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    context.font = font || getComputedStyle(document.body).font;

    return context.measureText(text).width;
  }
  return (
    <>
      <ListItemImgThumb>
        <ListItemImg src={img} alt="car img" />
      </ListItemImgThumb>
      <MainCardTextThumb>
        {getTextWidth(make + model, 'Manrope') > 100 ? (
          <MainCardText>
            {make}, {year}
          </MainCardText>
        ) : (
          <MainCardText>
            {make} <MainCardTextSpan>{model}</MainCardTextSpan>, {year}
          </MainCardText>
        )}
        <MainCardText>{rentalPrice}</MainCardText>
      </MainCardTextThumb>
      <SecondaryCardTextThumb>
        <SecondaryCardText>{city}</SecondaryCardText>
        <SecondaryCardText>{country}</SecondaryCardText>
        <SecondaryCardText>{rentalCompany}</SecondaryCardText>
        <SecondaryCardText>{type}</SecondaryCardText>
        <SecondaryCardText>{id}</SecondaryCardText>
        <SecondaryCardText>{accessories[2]}</SecondaryCardText>
      </SecondaryCardTextThumb>
      <CardModalBtn type="button" onClick={openModal}>
        Learn more
      </CardModalBtn>
      <ItemModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <ItemModalImg src={img} alt={`${make} img`} />
        <ItemModalMainText>
          {make} <span>{model}</span>, {year}
        </ItemModalMainText>
        <ItemModalSecondaryTextThumb>
          <SecondaryCardText>{city}</SecondaryCardText>
          <SecondaryCardText>{country}</SecondaryCardText>
          <SecondaryCardText>{`Id: ${id}`}</SecondaryCardText>
          <SecondaryCardText>{`Year: ${year}`}</SecondaryCardText>
          <SecondaryCardText>{`Type: ${type}`}</SecondaryCardText>
          <SecondaryCardText>{`Fuel Consumption: ${fuelConsumption}`}</SecondaryCardText>
          <SecondaryCardText>{`Engine Size: ${engineSize}`}</SecondaryCardText>
        </ItemModalSecondaryTextThumb>
        <ItemModalDescText>{description}</ItemModalDescText>
        <ItemModalSubtitleText>
          Accessories and functionalities:
        </ItemModalSubtitleText>
        <ItemModalSecondaryTextThumb>
          {accessories.map(item => {
            return (
              <SecondaryCardText key={accessories.indexOf(item)}>
                {item}
              </SecondaryCardText>
            );
          })}
          {functionalities.map(item => {
            return (
              <SecondaryCardText key={functionalities.indexOf(item)}>
                {item}
              </SecondaryCardText>
            );
          })}
        </ItemModalSecondaryTextThumb>

        <ItemModalSubtitleText>Rental Conditions: </ItemModalSubtitleText>
        <ItemModalRentCondThumb>
          <ItemModalRentCondText>
            Minimum age : <span>25</span>
          </ItemModalRentCondText>
          <ItemModalRentCondText>Valid driver’s license</ItemModalRentCondText>
          <ItemModalRentCondText>
            Security deposite required{' '}
          </ItemModalRentCondText>
          <ItemModalRentCondText>
            Mileage: <span>{mileage}</span>
          </ItemModalRentCondText>
          <ItemModalRentCondText>
            Price: <span>{rentalPrice}</span>
          </ItemModalRentCondText>
        </ItemModalRentCondThumb>
        <a href="tel:+380730000000">
          <ItemModalBtn type="button">Rental car</ItemModalBtn>
        </a>
      </ItemModal>
    </>
  );
};
