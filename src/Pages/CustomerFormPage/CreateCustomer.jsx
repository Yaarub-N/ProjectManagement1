import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../services/CustomerService"; 
import CustomerForm from "../../Pages/CustomerFormPage/CustomerForm"; 
import "../../index.css"; 

const CreateCustomer = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    profileName: "",
    profileEmail: "",
    addressStreet: "",
    addressCity: "",
    addressPostalCode: "",
    addressCountry: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };
  // chatgpt 4o 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createCustomer(customer);
      navigate("/customer-list"); // 🟢 Ändrade URL till lowercase för konsekvens
    } catch (error) {
      console.error("API error:", error);
      setError("Misslyckades med att skapa kund.");
    } finally {
      setLoading(false);
    }
  };
//
  return (
    <CustomerForm
      customer={customer}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default CreateCustomer;
