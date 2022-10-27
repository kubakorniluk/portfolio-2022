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

    const value = {
        projectsData: memoizedData
    };

    return (
        <ProjectContext.Provider value={value}>
            { children }
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;

ProjectContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}