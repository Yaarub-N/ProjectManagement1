import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProjectById,
  updateProject,
  getServices,
} from "../../services/ProjectService";
import { getCustomers } from "../../services/CustomerService";

import { getEmployees } from "../../services/ProjectService";

import { getStatuses } from "../../services/StatusService";
import EditProjectForm from "./EditProjectForm";

const EditProject = () => {
  const { projectNumber } = useParams();
  const [project, setProject] = useState({
    name: "",
    description: "",
    totalPrice: 0,
    statusId: 1,
    customerId: 1,
    serviceId: 1,
    startDate: "",
    endDate: "",
    projectManagerId: 1,
  });
  const [statuses, setStatuses] = useState([]);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProject();
    fetchStatusesAndServices();
    fetchCustomersAndEmployees();
  }, [projectNumber]);

  const fetchProject = async () => {
    try {
      const data = await getProjectById(projectNumber);
      setProject({
        name: data.name,
        description: data.description,
        totalPrice: data.totalPrice,
        statusId: data.statusId || 1,
        customerId: data.customerId || 1,
        serviceId: data.serviceId || 1,
        startDate: data.startDate ? data.startDate.split("T")[0] : "",
        endDate: data.endDate ? data.endDate.split("T")[0] : "",
        projectManagerId: data.projectManagerId || 1,
      });
    } catch (error) {
      console.error("Error fetching project:", error);
      setError("Kunde inte hämta projektinformation.");
    }
  };

  const fetchStatusesAndServices = async () => {
    try {
      setStatuses(await getStatuses());
      setServices(await getServices());
    } catch (error) {
      console.error("Error fetching statuses/services:", error);
      setError("Kunde inte hämta statusar eller tjänster.");
    }
  };

  const fetchCustomersAndEmployees = async () => {
    try {
      setCustomers(await getCustomers());
      setEmployees(await getEmployees());
    } catch (error) {
      console.error("Error fetching customers/employees:", error);
      setError("Kunde inte hämta kunder eller projektledare.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProject(projectNumber, project);
      navigate(`/projects/${projectNumber}`);
    } catch (error) {
      console.error("Error updating project:", error);
      setError("Misslyckades med att uppdatera projektet.");
    }
  };

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="edit-project">
      <h2>Redigera Projekt: {project.name}</h2>
      <EditProjectForm
        project={project}
        statuses={statuses}
        services={services}
        customers={customers}
        employees={employees}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditProject;
