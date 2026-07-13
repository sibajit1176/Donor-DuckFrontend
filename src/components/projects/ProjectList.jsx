import EmptyProjects from "./EmptyProjects";
import ProjectCard from "./ProjectCard";

const ProjectList = ({
    projects = [],
    isLoggedIn,
    onDonate
}) => {

    if (!projects.length) {
        return <EmptyProjects />;
    }
   
    return (

        <div className="space-y-7">

            {projects.map((project) => (

                <ProjectCard
                    key={project.id}
                    project={project}
                    isLoggedIn={isLoggedIn}
                    onDonate={onDonate}
                />

            ))}

        </div>

    );

};

export default ProjectList;