import React, { useState,  useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt.js';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import { ProjectContext } from './ProjectContextProvider';
import Button from './Button';

const slideIn = keyframes`
    from {
        transform: scaleY(0);
        transform-origin: top;
        
    }
    to {
        transform: scaleY(1);
        transform-origin: top;
        
    }
`;
const slideOut = keyframes`
    from {
        transform: scaleY(1);
        transform-origin: bottom;
        
    }
    to {
        transform: scaleY(0);
        transform-origin: bottom;
        
    }
`;
const StyledProject = styled.figure`
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Image = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-image: ${props => `url('${props.img}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .overlay {
        position: absolute;
        z-index: 995;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: grayscale(1);
    }
    .slide { 
        position: absolute;
        z-index: 997;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        animation: .35s linear forwards ${slideIn},  .35s linear .7s forwards ${slideOut};
    }
`;
const HoverOverlay = styled.div`
    position: absolute;
    z-index: 996;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    transition: .5s;
    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
const Details = styled.figcaption`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 2em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { margin-top: 1.25em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { margin-top: 1.5em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { margin-top: 1.5em; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { margin-top: 1.75em; }
`;
const Caption = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75em;
`;
const Title = styled.h2`
    margin: 0;
    font-size: 120%;
    font-weight: 400;
    font-family: 'Inconsolata', monospace;
    color: #ffffff;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 95%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 105%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;
const Subtitle = styled.h3`
    margin: 0;
    font-size: 90%;
    font-weight: 400;
    font-family: 'Inconsolata', monospace;
    color: #969696;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 75%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 75%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 85%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 80%; }
`;
// export this two for later use in icon pairs
export const IconGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5em;
`;
export const ProjectLink = styled.a`
    margin: 0;
    font-size: 125%;
    color: #ffffff;
    transition: .5s;
    &:hover {
        color: #584cea;
    };
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 110%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 115%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 120%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 120%; }
`;

const Project = () => {
    const [ hover, setHover ] = useState(false);
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);
    const { projectsData, currentProject } = useContext(ProjectContext);
    const projects = projectsData.map(item => {
        const { 
            id,
            img,
            title,
            website,
            sourceCode
        } = item;
        return (
            <>
                <StyledProject key={id}>
                    <Image 
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut} 
                        img={require(`../assets/img/${img}`)}
                    >
                        <div className="slide"></div>
                        <div className="overlay"></div>
                        <HoverOverlay style={hover ? {opacity: 1} : {opacity: 0}}>
                            <a href={website} target="_blank">
                                <Button type="button" value="Zobacz projekt"/>
                            </a>
                        </HoverOverlay>
                    </Image>
                    <Details>
                        <Caption>
                            <Subtitle>/nazwa_projektu</Subtitle>
                            <Title>{`${title}`}</Title>
                        </Caption>
                        <Caption>
                            <Subtitle>/zobacz_projekt</Subtitle>
                            <IconGroup>
                                <ProjectLink href={website} target="_blank">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </ProjectLink>
                                <ProjectLink href={sourceCode} target="_blank">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </ProjectLink>
                            </IconGroup>    
                        </Caption>    
                    </Details>
                </StyledProject>
            </>
        )
    });
    return (
        <>{ projects[currentProject] }</>
    );
}
 
export default Project;