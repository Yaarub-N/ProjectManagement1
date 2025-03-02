import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createProject, getEmployees } from "../../services/ProjectService";
import ProjectForm from "../../Pages/createProjectPage/ProjectForm";
import { getStatuses } from "../../services/StatusService";
import { getServices } from "../../services/ProjectService";
import { getCustomers } from "../../services/CustomerService";
import "../../index.css";

const CreateProject = () => {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
    totalPrice: 0,
    statusId: 1,
    customerId: 1,
    serviceId: 1,
    projectManagerId: 1, // Standardvärde för projektledare
    startDate: "",
    endDate: "",
  });

  const [statuses, setStatuses] = useState([]);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]); // State för projektledare
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [statusesData, servicesData, customersData, employeesData] =
          await Promise.all([
            getStatuses(),
            getServices(),
            getCustomers(),
            getEmployees(), // Hämta projektledare
          ]);

        setStatuses(statusesData);
        setServices(servicesData);
        setCustomers(customersData);
        setEmployees(employeesData); // Sätt projektledare i state
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Kunde inte hämta data. Försök igen senare.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await createProject(project);
      navigate("/project-list");
    } catch (error) {
      console.error("API error:", error);
      setError("Misslyckades med att skapa projekt.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Laddar...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="create-project">
      <h2>Skapa nytt projekt</h2>
      <ProjectForm
        project={project}
        handleChange={handleChange}
        statuses={statuses}
        services={services}
        customers={customers}
        employees={employees} // Skicka med projektledare
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default CreateProject;
