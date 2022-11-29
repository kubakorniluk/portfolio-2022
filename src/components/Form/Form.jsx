import React, { useState } from 'react';
import styled from 'styled-components';
// import EmailJS library
import emailjs from '@emailjs/browser';
import SectionHeading from '../reusable/SectionHeading';
import Text from '../reusable/Text';
import Link from '../reusable/Link';
import ItemGroup from '../reusable/ItemGroup';
import Input from './components/Input';
import Select from './components/Select';
import Textarea from './components/Textarea';
import Button from '../reusable/Button';
import Loader from './components/Loader';
import Alert from '../reusable/Alert';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    width: 50%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; }
`;

const InputGroup = styled(ItemGroup)`
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    gap: 2rem;
`;

const Form = () => {
    
    const [ data, setData ] = useState({
        email: '',
        who: '',
        message: ''
    });

    const [ loading, setLoading ] = useState(false);

    const [ showAlert, setShowAlert ] = useState(false);

    const handleChange = event => setData({ ...data, [event.target.name]: event.target.value  });

    const templateParams = {
        name: data.email,
        role: data.who,
        message: data.message
    }

    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_afpca0v',
            'template_tkmb1ki',
            templateParams,
            'WwZSt6rL7Emxk582E'
        ).then( 
            result => {
                setTimeout(setLoading(false), 2500);
                setData({
                    email: '',
                    who: '',
                    message: ''
                });
                // when loading ended show Alert
                setShowAlert(true);

                // waits for the Alert animation to end then unmount Alert
                
                // code below doesn't work, i'm trying to figure out why
                // setTimeout(setShowAlert(false), 6000);
            }
        ).catch(
            error => console.error('An error has occured', error.text)
        );
    }

    return (
        <>
        <StyledForm onSubmit={ handleSubmit }>
            <SectionHeading color="#ffffff">Pasujemy do siebie?</SectionHeading>  
            <Text color="#ffffff">
                Chętnie dowiem się więcej o twoim projekcie! <b>Napisz do mnie</b> korzystając z formularza zamieszczonego poniżej, 
                lub bezpośrednio na <Link href="mailto:hello@kubakorniluk.pl" color="#ffffff">hello@kubakorniluk.pl</Link>.
            </Text>
            <InputGroup>
                <Input 
                    name="email" 
                    inputValue={ data.email } 
                    handleChange={ () => handleChange } 
                />
                <Select 
                    name="who" 
                    inputValue={ data.who } 
                    handleChange={ () => handleChange } 
                />
            </InputGroup>
            <Textarea
                name="message" 
                inputValue={ data.message } 
                handleChange={ () => handleChange } 
            />
            <ItemGroup style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Button primary type="submit">Wyślij</Button>
                { loading && <Loader /> } 
            </ItemGroup>
            
        </StyledForm>
        { showAlert && <Alert message="Wiadomość wysłana!"/> }
        </>
    );
}
 
export default Form;