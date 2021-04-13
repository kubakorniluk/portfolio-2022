import React, {
    useState,
    useEffect, 
    useContext, 
    useMemo, 
    lazy, 
    Suspense 
} from 'react';
import { createGlobalStyle } from 'styled-components';
import { ProjectContext } from '../components/ProjectContextProvider';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Main from '../components/Main';
import ProjectBrowser from '../components/ProjectBrowser';
import Footer from '../components/Footer';
import Email from '../components/Email';
import Button from '../components/Button';
import ProjectCounter from '../components/ProjectCounter';

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
    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .85);
        backdrop-filter: blur(10px) grayscale(1);
    }
`;

const Homepage = () => {
    const { projectsData, currentProject } = useContext(ProjectContext);
    const currentImage = projectsData.map(i => i.img)[currentProject];
    const memoizedCurrentImage = useMemo(() => currentImage, [currentImage])

    const Sidebar = lazy(() => import('../components/Sidebar'));

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    const handleResize = () => setScreenWidth(window.innerWidth);
    return (
        <>      
            <HomepageStyles img={
                (memoizedCurrentImage !== undefined) ? 
                require(`../assets/img/${memoizedCurrentImage}`) : 
                null
            }/>
            <Header>
                <Logo />
                <Suspense fallback={null}>
                    <Sidebar />
                </Suspense>
            </Header>
            <Main>
                <ProjectBrowser />
            </Main>
            <Footer oneElement>
                { screenWidth  >= 768 ? <Email><Button type="button" value="Skontaktuj się"/></Email> : null }
                <ProjectCounter />
            </Footer>
        </>
    );
}
 
export default Homepage;