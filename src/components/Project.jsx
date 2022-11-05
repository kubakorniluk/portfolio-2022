import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import Icon from './reusable/Icon';
import Link from './reusable/Link';

const StyledProject = styled.figure`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 40%;
    margin: 0;
    padding-bottom: 2em;
    /* background-color: #ffffff; */
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { width: 50%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { width: 50%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { width: 40%; }
`;

const Img = styled.img` width: 100%; `;

const ProjectInfo = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1em;
    padding: 1em 0;
    border-top: 1px solid #ebebeb;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    color: #121212;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Description = styled.p`
    margin: 0;
    font-size: 100%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #969696;
    line-height: 1.5em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Project = ({ data }) => {
    const {  
        img, 
        title, 
        desc, 
        website, 
        sourceCode 
    } = data;
    return (
        <StyledProject>
            <Img src={require(`../assets/img/${img}`)} alt="Zdjęcie przedstawiające wygląd projektu"/>
            <ProjectInfo>
                <InfoWrapper>
                    <Title>{ title }</Title>
                    <Icon href={ sourceCode } target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </Icon>
                </InfoWrapper>
                <Description>//{ desc }</Description>
            </ProjectInfo>
            <Link href={ website }>Zobacz projekt</Link>
        </StyledProject>
    );
}
 
export default Project;