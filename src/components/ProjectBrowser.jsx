import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import AppContext from './AppContext';

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
const StyledProjectBrowser = styled.section`
    position: relative;
    display: block;
    width: 50vw;
    height: 50vh;
    span {
        position: absolute;
        z-index: 999;
        display: block;
        width: .5em;
        height: .5em;
        transition: .1s;
    }
    .top-left {
        border-top: .125em solid #584cea;
        border-left: .125em solid #584cea;
        bottom: -.5em;
        right: -.5em;
    }
    .top-right {
        border-top: .125em solid #584cea;
        border-right: .125em solid #584cea;
        bottom: -.5em;
        left: -.5em;
    }
    .bottom-left {
        border-bottom: .125em solid #584cea;
        border-left: .125em solid #584cea;
        top: -.5em;
        right: -.5em;
    }
    .bottom-right {
        border-bottom: .125em solid #584cea;
        border-right: .125em solid #584cea;
        top: -.5em;
        left: -.5em;
    }
`;
const ProjectImage = styled.figure`
    margin: 0;
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
        z-index: 996;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        animation: .35s linear forwards ${slideIn},  .35s linear .7s forwards ${slideOut};
    }
`;
const ProjectTitle = styled.figcaption`
    position: absolute;
    z-index: 996;
    top: 50%;
    left: 0;
    transform: translate(-0%, -50%);
    margin: 0;
    font-size: 600%;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    color: #584cea;
    margin-left: -10%;
    margin-right: 50%;
`;

const ProjectBrowser = () => {
    const [ projectsData, setProjectsData ] = useState([]);
    const [ currentProject, setCurrentProject ] = useState(0);
    useEffect(() => {
        import('../data/projects.json')
        .then(data => 
            setProjectsData(data.default)
        );
    });
    useEffect(() => {
        setTimeout(
            () => {
                window.addEventListener('wheel', handleMouseWheel, {passive: true});
            }, 1000
        );
        return () => {
            setTimeout(
                () => {
                    window.removeEventListener('wheel', handleMouseWheel, {passive: true});
                }, 1000
            );
        }
    })
    const handleMouseWheel = (event) => {
        if(event.deltaY < 0) { 
            (currentProject + 1 > projectsData.length - 1) ? 
            setCurrentProject(0) : 
            setCurrentProject(currentProject + 1)
        }
        else if (event.deltaY > 0) { 
            (currentProject - 1 < 0) ? 
            setCurrentProject(projectsData.length - 1) : 
            setCurrentProject(currentProject - 1)
        }
    }
    const projects = projectsData.map(item => {
        const { 
            id, 
            img, 
            title, 
            client, 
            website, 
            sourceCode 
        } = item;
        return (
            <ProjectImage key={id} img={require(`../${img}`)}>
                <div className="slide"></div>
                <div className="overlay"></div>
                <ProjectTitle>{title}</ProjectTitle>
            </ProjectImage>
        )
    })
    return ( 
        <AppContext.Consumer>
            {context => (
                <StyledProjectBrowser>
                    { projects[currentProject] }
                </StyledProjectBrowser>
            )}
        </AppContext.Consumer>
    );
}
 
export default ProjectBrowser;