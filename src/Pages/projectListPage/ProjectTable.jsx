import React from "react";
import { Link } from "react-router-dom";

const ProjectTable = ({ projects }) => {
  return (
    <>
      {projects.length === 0 ? (
        <p>Inga projekt hittades! Lägg till ett nytt projekt.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Namn</th>
              <th>Status</th>
              <th className="d-non-small-device">Tjänst</th>
              <th className="d-non-small-device">description</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.projectNumber}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/projects/${project.projectNumber}`}>
                    {project.name}
                  </Link>
                </td>
                <td>
                  <Link to={`/projects/${project.projectNumber}`}>
                    {project.status}
                  </Link>
                </td>
                <td className="d-non-small-device">
                  <Link to={`/projects/${project.projectNumber}`}>
                    {project.serviceName}
                  </Link>
                </td>
                <td className="d-non-small-device">
                  <Link to={`/projects/${project.projectNumber}`}>
                    {project.description}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProjectTable;
