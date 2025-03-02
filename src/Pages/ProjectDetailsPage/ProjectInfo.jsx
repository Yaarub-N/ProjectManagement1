import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectInfo = ({ project, handleDelete, formatDate }) => {
  const navigate = useNavigate();

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <div className="project-info">
        <div className="info-item">
          <span className="info-label">Beskrivning:</span>
          <span className="info-value"> {project.description}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Status:</span>
          <span className="info-value">{project.status}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Tidsperiod:</span>
          <span className="info-value">
            {formatDate(project.startDate)} - {formatDate(project.endDate)}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Tjänst:</span>
          <span className="info-value">
            {project.serviceName || "Ingen tjänst"}
          </span>
        </div>
        <div className="info-item">
          <span className="info-label">Kund:</span>
          <span className="info-value">{project.customerName}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Projektledare:</span>
          <span className="info-value">{project.projectManagerName}</span>
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleDelete} className="delete-btn">
          Ta bort
        </button>
        <button
          onClick={() => navigate(`/edit/${project.projectNumber}`)}
          className="edit-btn"
        >
          Redigera
        </button>
        <button onClick={() => navigate("/project-list")} className="back-btn">
          Tillbaka till projektlista
        </button>
      </div>
    </div>
  );
};

export default ProjectInfo;
