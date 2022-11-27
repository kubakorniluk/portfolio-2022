import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset'
import Label from './Label';
import inputStylingMixin from '../../helpers/mixins/inputStylingMixin';

const StyledInput = styled.input.attrs(
    ({ name }) => ({
        id: name,
        name: name,
        type: 'email',
        placeholder: 'mail@example.com',
        required: true
    })
)`
    ${ inputStylingMixin }
`;

const Input = ({
    inputValue,
    name,
    handleChange
}) => {
    return (
        <Fieldset width="50%">
            <Label labelFor={ name } text="E-mail:"  />
            <StyledInput 
                value={ inputValue }
                name={ name }
                onChange={ handleChange() }
            />
        </Fieldset>
    );
}
 
export default Input;

Input.propTypes = {
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}