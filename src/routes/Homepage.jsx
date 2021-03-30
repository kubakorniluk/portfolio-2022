import React, { useState, useEffect, useContext, useMemo } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import { ProjectContext } from '../components/ProjectContextProvider';

const HomepageStyles = createGlobalStyle`
    body {
        display: block;
        background-image: ${props => `url(${props.img})`};
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
        transition: 1.05s;
    }
    a {
        color: #ffffff;
    }
    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .825);
        backdrop-filter: blur(5px) grayscale(1);
    }
`;

const Homepage = () => {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    const handleResize = () => setScreenWidth(window.innerWidth);

    const { projectsData, currentProject } = useContext(ProjectContext);
    const currentImage = projectsData.map(i => i.img)[currentProject];
    const memoizedCurrentImage = useMemo(() => currentImage, [currentImage])
    return (
        <>      
            { (screenWidth > 1024) ? <Cursor /> : null }
            <HomepageStyles img={
                (memoizedCurrentImage !== undefined) ? 
                require(`../${memoizedCurrentImage}`) : 
                null
            }/>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
 
export default Homepage;