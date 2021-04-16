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
    const [ currentProject, setCurrentProject ] = useState(0);
    useEffect(() => {
        import('../data/projects.json')
        .then(data => setProjectsData(data.default));
    });
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
    const handleProjectCounter = (action) => {
        if (action === 'NEXT') {
            (currentProject + 1 > projectsData.length - 1) ? 
            setCurrentProject(0) : 
            setCurrentProject(currentProject + 1)
        } else if(action === 'PREVIOUS') {
            (currentProject - 1 < 0) ? 
            setCurrentProject(projectsData.length - 1) : 
            setCurrentProject(currentProject - 1)
        }
    } 
    const memoizedData = useMemo(() => projectsData, [projectsData]);
    const memoizedProject = useMemo(() => currentProject, [currentProject]);
    const value = {
        projectsData: memoizedData,
        currentProject: memoizedProject,
        handleMouseWheel,
        handleProjectCounter
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