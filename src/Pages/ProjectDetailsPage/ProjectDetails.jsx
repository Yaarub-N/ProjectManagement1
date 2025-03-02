import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectById, deleteProject } from "../../services/ProjectService";
import ProjectInfo from "./ProjectInfo";

const ProjectDetails = () => {
  const { projectNumber } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const data = await getProjectById(projectNumber);
      setProject(data);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Är du säker på att du vill ta bort detta projekt?")) {
      await deleteProject(projectNumber);
      navigate("/project-list");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("sv-SE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  if (!project) return <p>Laddar...</p>;

  return (
    <ProjectInfo
      project={project}
      handleDelete={handleDelete}
      formatDate={formatDate}
    />
  );
};

export default ProjectDetails;
