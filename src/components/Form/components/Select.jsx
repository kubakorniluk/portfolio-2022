import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset'
import Label from './Label';
import inputStylingMixin from '../../helpers/mixins/inputStylingMixin';

const StyledSelect = styled.select.attrs(
    ({ name }) => ({
        id: name,
        name: name,
        required: true
    })
)`
    ${ inputStylingMixin }

    -webkit-appearance: none;
   -moz-appearance: none; 
    cursor: pointer;
`;

const Select = ({
    inputValue,
    name,
    handleChange
}) => {
    return (
        <Fieldset width="50%">
            <Label labelFor={ name } text="Kim jesteś?"/>
            <StyledSelect 
                value={ inputValue }
                name={ name }
                onChange={ handleChange() }
            >
                <option value="" disabled>Wybierz z listy</option>
                <option value="Klientem">Klientem</option>
                <option value="Rekruterem">Rekruterem</option>
            </StyledSelect>
        </Fieldset>
    );
}
 
export default Select;

Select.propTypes = {
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}