import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin.js';
import SidebarToggle from './SidebarToggle';
import Header from './Header';
import Footer from './Footer';
import Email from './Email';
import { IconGroup, ProjectLink } from './Project';

const StyledSidebar = styled.aside`    
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    display: block;
    background-color: #ffffff;
    box-shadow: 5px 5px 100px #070707;
    height: 100vh;
    transition: .5s;
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
`;
const Title = styled.h2`
    display: block;
    margin: 0;
    color: #070707;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    font-size: 120%;
    padding: 1em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 95%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 105%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;
const Navigation = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 100%;
    height: 100%;
    padding: 0 7.5em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 0 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 0 2.5em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 0 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 0 4.5em; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 0 5em; }
`;
const LinkContent = styled.li`
    margin: 0;
    font-size: 120%;
    font-weight: 400;
    font-family: 'Inconsolata', monospace;
    transition: .5s;
    &:hover {
        color: #584cea;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 95%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 105%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;
const Bio = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 7.5em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 0 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 0 2.5em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 0 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 0 4.5em; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 0 5em; }
`;
const Text = styled.p`
    margin: 0;
    font-size: 105%;
    font-weight: 400;
    font-family: 'Inconsolata', monospace;
    color: #070707;
    line-height: 1.5em;
    text-align: justify;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 90%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 95%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 100%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 95%; }
`;

const Sidebar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const handleSidebar = () => setIsOpen(!isOpen);

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    const handleResize = () => setScreenWidth(window.innerWidth);
    const sidebarWidth = () => {
        if(screenWidth >= 768 && screenWidth <= 1024) {
            return '75%';
        }
        else if(screenWidth < 768) {
            return '100%';
        }
        else {
            return '45%';
        }
    };
    return (  
        <>
            <SidebarToggle handleSidebar={handleSidebar} isOpen={isOpen}/>
            <StyledSidebar style={isOpen ? {display: 'block', width: `${sidebarWidth()}` } : {display: 'none', width: 0}}>
                <div className="content">
                    <Header>
                        <Title>Nawigacja</Title>
                    </Header>
                    <div className="content">
                        <Navigation>
                            <LinkContent>
                                <NavLink exact to="/" style={{color: '#070707'}} activeStyle={{color: '#584cea'}}>
                                    01. Portfolio
                                </NavLink>
                            </LinkContent>
                            <LinkContent>
                                <NavLink exact to="/"  style={{color: '#969696'}}>
                                    02. Poznaj mnie (niedostępne)
                                </NavLink>
                            </LinkContent>
                            <LinkContent>
                                <NavLink exact to="/"  style={{color: '#969696'}}>
                                    03. Kontakt (niedostępne)
                                </NavLink>
                            </LinkContent>
                        </Navigation>
                        <Bio>
                            <Text style={{padding: '0', marginBottom: '1em', color: '#969696'}}>/bio</Text>
                            <Text>Artysta kombinator, początkujący muzyk i najwierniejszy fan JavaScriptu. Aktualnie zajmuję się programowaniem indywidualnych single-page-applications na zlecenie. Lubię tworzyć, ciekawi mnie przyszłość i technologie, które już dzisiaj dają nam jej przedsmak.</Text>   
                        </Bio>
                    </div>
                    <Footer>
                        <Email />
                        <IconGroup>
                            <ProjectLink style={{color: '#070707'}} href="https://github.com/kubakorniluk" target="_blank">
                                <FontAwesomeIcon icon={faGithubSquare} />
                            </ProjectLink>
                            <ProjectLink style={{color: '#070707'}} href="https://www.linkedin.com/in/kuba-korniluk-65383320b/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </ProjectLink>
                        </IconGroup>
                    </Footer>
                </div>
            </StyledSidebar>
        </>
    );
}
 
export default Sidebar;