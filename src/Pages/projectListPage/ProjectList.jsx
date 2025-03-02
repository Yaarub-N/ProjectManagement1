import React, { useState, useEffect } from "react";
import { getProjects } from "../../services/ProjectService";

import ProjectTable from "./ProjectTable"; // Importera tabellkomponenten

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className="container">
      <h2>Projektlista</h2>
      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectList;
