import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import Icon from './reusable/Icon';
import ItemGroup from './reusable/ItemGroup';
import Badge from './reusable/Badge';
import Text from './reusable/Text';
import Link from './reusable/Link';
import LinkButton from './reusable/LinkButton';
import responsiveTextMixin from './helpers/mixins/responsiveTextMixin';

const StyledProject = styled.figure`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 40%;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 87.5%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 87.5%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { width: 50%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { width: 50%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { width: 40%; }
`;

const Img = styled.img` 
    width: 100%; 
    border: 1px solid ${ ({ theme: { colors } }) => colors.grey200 };
`;

const ProjectInfo = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
    padding: 1rem 0 0 0;
    border-top: 1px solid ${ ({ theme: { colors } }) => colors.grey100 };
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
`;

const Title = styled.h2`
    ${ responsiveTextMixin }

    margin: 0;
    font-size: 1.15rem;
    font-weight: 500;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        font-size: 1.1rem; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        font-size: 1.2rem; 
    }
`;

const Project = ({ 
    data: { 
        id,
        img, 
        title, 
        description, 
        date, 
        website, 
        sourceCode,
        stack 
    } 
}) => {
    return (
        <StyledProject>
            <Img src={ require(`../assets/img/${img}`) } alt="Zdjęcie przedstawiające wygląd projektu."/>
            <ProjectInfo>
                <InfoWrapper>
                    <Title>{ title }</Title>
                    <Icon href={ sourceCode } color="#121212">
                        <FontAwesomeIcon icon={ faGithubSquare } />
                    </Icon>
                </InfoWrapper>
                <ItemGroup style={{gap: '.75rem'}}>
                    <Badge>{ date }</Badge>
                    { stack.map(item => <Badge key={ `badge${item}` } color="violet">{ item }</Badge>) }
                </ItemGroup>
                <Text>{ description }</Text>
                <Link href={ website }>Zobacz projekt</Link>
            </ProjectInfo>
        </StyledProject>
    );
}
 
export default Project;


Project.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        sourceCode: PropTypes.string.isRequired,
        stack: PropTypes.array.isRequired
    }).isRequired
}