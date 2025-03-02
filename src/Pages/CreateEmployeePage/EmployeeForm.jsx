import React from "react";

const EmployeeForm = ({
  employee,
  handleChange,
  handleSubmit,
  loading,
  error,
}) => {
  return (
    <div className="create-employee">
      <h2>Skapa ny anställd</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Förnamn:
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Efternamn:
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefonnummer:
          <input
            type="text"
            name="phoneNumber"
            value={employee.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Roll-ID:
          <input
            type="number"
            name="roleId"
            value={employee.roleId}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Skapar..." : "Skapa Anställd"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
