import { useFormik } from 'formik';
import * as Yup from 'yup';
import { constants } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllItems } from '../../redux/advert/advertSelectors';
import { resetFilters, setFilters } from '../../redux/advert/advertSlice';
import {
  StyledSelectEl,
  StyledFormEl,
  StyledLabelEl,
  StyledToInput,
  StyledFromInput,
  StyledFormBtn,
} from './SearchBar.styled';

const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
});

const selectStyles = {
  placeholder: baseStyles => ({
    ...baseStyles,
    color: 'rgb(18, 20, 23)',
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0%',
    textAlign: 'left',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  control: baseStyles => ({
    ...baseStyles,
    padding: '0 18px',
    borderRadius: '14px',
    background: 'rgb(247, 247, 251)',
    border: 'none',
    minHeight: '48px',

    ':focus,:hover': {
      borderColor: '#3470ff',
    },
  }),
  option: baseStyles => {
    return {
      ...baseStyles,
      color: 'rgb(18, 20, 23)',
      fontFamily: 'Manrope',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0%',
      textAlign: 'left',
    };
  },
  singleValue: baseStyles => ({
    ...baseStyles,
    color: 'rgb(18, 20, 23)',
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '0%',
    textAlign: 'left',
  }),
};

export const SearchBar = () => {
  const allItems = useSelector(selectAllItems);
  const dispatch = useDispatch();

  const allPriceValues = allItems.map(item => {
    return Number(item.rentalPrice.substring(1));
  });

  const sortedPriceValues = allPriceValues
    .filter((item, index) => allPriceValues.indexOf(item) === index)
    .sort((a, b) => a - b);

  const handleResetFilters = () => {
    formik.resetForm();
    dispatch(resetFilters());
  };

  const carBrandsSelectOptions = constants.CAR_BRANDS.map(brand => {
    return { value: brand.toLowerCase(), label: brand };
  });

  const priceSelectOptions = sortedPriceValues.map(price => {
    return { value: price, label: price };
  });

  const formik = useFormik({
    initialValues: {
      carBrand: '',
      price: '',
      mileageMin: '',
      mileageMax: '',
    },
    onSubmit: values => {
      dispatch(setFilters(values));
      formik.resetForm();
    },
    validationSchema: SignupSchema,
  });
  return (
    <StyledFormEl onSubmit={formik.handleSubmit}>
      <StyledLabelEl>
        Car brand
        <StyledSelectEl
          options={carBrandsSelectOptions}
          name="carBrand"
          onChange={selectedOption => {
            formik.setFieldValue('carBrand', selectedOption.value);
          }}
          placeholder={'Brand'}
          styles={{ ...selectStyles }}
          className={'brand'}
        />
      </StyledLabelEl>
      <StyledLabelEl>
        Price/ 1 hour
        <StyledSelectEl
          options={priceSelectOptions}
          name="price"
          onChange={selectedOption => {
            formik.setFieldValue('price', selectedOption.value);
          }}
          placeholder={'To $'}
          styles={selectStyles}
          className={'price'}
        />
      </StyledLabelEl>
      <StyledLabelEl>
        Сar mileage / km
        <div>
          <StyledFromInput
            type="number"
            name="mileageMin"
            placeholder="From"
            onChange={formik.handleChange}
          />
          <StyledToInput
            type="number"
            name="mileageMax"
            placeholder="To"
            onChange={formik.handleChange}
          />
        </div>
      </StyledLabelEl>
      <StyledFormBtn type="submit">Search</StyledFormBtn>
      <StyledFormBtn type="button" onClick={() => handleResetFilters()}>
        Reset filters
      </StyledFormBtn>
    </StyledFormEl>
  );
};
