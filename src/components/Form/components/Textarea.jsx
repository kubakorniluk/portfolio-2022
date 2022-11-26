import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fieldset from './Fieldset';
import Label from './Label';
import inputStylingMixin from '../../helpers/mixins/inputStylingMixin';

const StyledTextarea = styled.textarea.attrs(
    ({ name }) => ({
        id: name,
        name: name,
        type: 'text',
        placeholder: 'Opisz swój projekt',
        rows: '6',
        required: true
    })
)`
    ${ inputStylingMixin }

    /* width: calc(50% - 1rem); */
    width: 100%;
    resize: none;
`;

const Textarea = ({
    inputValue,
    name,
    handleChange
}) => {
    return (
        <Fieldset>
            <Label labelFor={ name } text="Wiadomość:"  />
            <StyledTextarea 
                value={ inputValue }
                name={ name }
                onChange={ handleChange() }
            />
        </Fieldset>
    );
}
 
export default Textarea;

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}