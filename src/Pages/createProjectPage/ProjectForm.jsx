import React from "react";

const ProjectForm = ({
  project,
  handleChange,
  statuses,
  services,
  customers,
  employees,
  handleSubmit,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Namn:
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Beskrivning:
        <input
          type="text"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Totalpris:
        <input
          type="number"
          name="totalPrice"
          value={project.totalPrice}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Startdatum:
        <input
          type="date"
          name="startDate"
          value={project.startDate}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Slutdatum:
        <input
          type="date"
          name="endDate"
          value={project.endDate}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Status:
        <select
          name="statusId"
          value={project.statusId}
          onChange={handleChange}
          required
        >
          {statuses.map((status) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Tjänst:
        <select
          name="serviceId"
          value={project.serviceId}
          onChange={handleChange}
          required
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} ({service.hourlyRate} kr/h)
            </option>
          ))}
        </select>
      </label>

      <label>
        Kund:
        <select
          name="customerId"
          value={project.customerId}
          onChange={handleChange}
          required
        >
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.profileName}
            </option>
          ))}
        </select>
      </label>

      <label>
        Projektledare:
        <select
          name="projectManagerId"
          value={project.projectManagerId}
          onChange={handleChange}
          required
        >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.firstName}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Skapar..." : "Skapa Projekt"}
      </button>
    </form>
  );
};

export default ProjectForm;
