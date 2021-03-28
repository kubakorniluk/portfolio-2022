import React, { useState, useEffect, useMemo, createContext } from 'react';

export const ProjectContext = createContext();

const ProjectContextProvider = ({
    children
}) => {
    const [ projectsData, setProjectsData ] = useState([]);
    const [ currentProject, setCurrentProject ] = useState(0);
    useEffect(() => {
        (
            async () => {
                const data = await import('../data/projects.json');
                setProjectsData(data.default);
            }
        )();
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
    const memoizedData = useMemo(() => projectsData, [projectsData]);
    const value = {
        projectsData: memoizedData,
        currentProject,
        handleMouseWheel
    };
    return (
        <ProjectContext.Provider value={value}>
            { children }
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;