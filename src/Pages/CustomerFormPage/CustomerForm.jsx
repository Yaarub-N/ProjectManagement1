import React from "react";

const CustomerForm = ({
  customer,
  handleChange,
  handleSubmit,
  loading,
  error,
}) => {
  return (
    <div className="create-customer">
      <h2>Skapa ny kund</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Profilnamn:
          <input
            type="text"
            name="profileName"
            value={customer.profileName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Profil-e-post:
          <input
            type="email"
            name="profileEmail"
            value={customer.profileEmail}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gatuadress:
          <input
            type="text"
            name="addressStreet"
            value={customer.addressStreet}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Stad:
          <input
            type="text"
            name="addressCity"
            value={customer.addressCity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Postnummer:
          <input
            type="text"
            name="addressPostalCode"
            value={customer.addressPostalCode}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Land:
          <input
            type="text"
            name="addressCountry"
            value={customer.addressCountry}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Skapar..." : "Skapa Kund"}
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
