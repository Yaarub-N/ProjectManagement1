import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../services/EmployeeService";
import EmployeeForm from "../../Pages/CreateEmployeePage/EmployeeForm";
import "../../index.css";

//använd chatgpt4o for useNavigate
const CreateEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roleId: 1,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Hantera ändringar i formuläret
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createEmployee(employee);
      navigate("/employee-list");
    } catch (error) {
      console.error("API error:", error);
      setError("Misslyckades med att skapa anställd.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmployeeForm
      employee={employee}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default CreateEmployee;
