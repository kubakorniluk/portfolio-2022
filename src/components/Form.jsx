import React from 'react';
import styled from 'styled-components';
import SectionHeading from './reusable/SectionHeading';
import ItemGroup from './reusable/ItemGroup';
import Input from './reusable/Input';
import TextArea from './reusable/TextArea';
import Button from './reusable/Button';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.75em;
    width: 50%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; }
`;

const Select = styled.select`
    width: 100%;
    padding: .5em;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    :focus {
        outline: 0;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Option = styled.option`
    width: 100%;
    padding: 1em;
    background-color: #121212;
    border: none;
    color: #ffffff;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    :focus {
        outline: 0;
    }
    :hover {
        background-color: #584cea;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }  
`;
const Form = () => {
    return (
        <StyledForm action="">
            <SectionHeading color="#ffffff">Napisz do mnie!</SectionHeading>
            <ItemGroup>
                <Input type="text" placeholder="E-mail" />
                <Select name="text" placeholder='Jestem:'>
                    <Option value="Klientem" selected disabled>Jestem:</Option>
                    <Option value="Klientem">Klientem</Option>
                    <Option value="Rekruterem">Rekruterem</Option>
                </Select>
            </ItemGroup>
            <TextArea rows="5" type="text" placeholder="Wiadomość"></TextArea>
            <div>
                <Button primary type="submit">Wyślij</Button>
            </div>
        </StyledForm>
    );
}
 
export default Form;