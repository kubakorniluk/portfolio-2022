import React, { 
    useState, 
    useEffect, 
    useMemo, 
    createContext 
} from 'react';
import PropTypes from 'prop-types';

export const ProjectContext = createContext();

const ProjectContextProvider = ({
    children
}) => {
    
    const [ projectsData, setProjectsData ] = useState([]);

    useEffect(() => {
        import('../data/projects.json')
        .then(data => setProjectsData(data.default));
    });

    const memoizedData = useMemo(() => projectsData, [projectsData]);

    

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const handleResize = () => setScreenWidth(window.innerWidth);

    const value = {
        projectsData: memoizedData,
        screenSize: screenWidth
    };

    return (
        <ProjectContext.Provider value={ value }>
            { children }
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;

ProjectContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}