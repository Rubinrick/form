import React, { useState } from "react";
import "./Form.css";
import profile from "../assets/profile.webp";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    state: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      gender,
      dateOfBirth,
      phoneNumber,
      address,
      state,
      country,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !gender ||
      !dateOfBirth ||
      !phoneNumber ||
      !address ||
      !state ||
      !country
    ) {
      setErrors({
        firstName: !firstName ? "Required" : "",
        lastName: !lastName ? "Required" : "",
        email: !email ? "Required" : "",
        gender: !gender ? "Required" : "",
        dateOfBirth: !dateOfBirth ? "Required" : "",
        phoneNumber: !phoneNumber ? "Required" : "",
        address: !address ? "Required" : "",
        state: !state ? "Required" : "",
        country: !country ? "Required" : "",
      });
      return;
    }

    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);
  };

  return (
    <>
      {/* profile pic */}
      <div className="image">
        <img src={profile} alt="profile pic" id="profile-pic" />
      </div>

      {/* form handling */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && (
            <div style={{ color: "red" }}>{errors.lastName}</div>
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleSelectChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <div style={{ color: "red" }}>{errors.gender}</div>}
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
          {errors.dateOfBirth && (
            <div style={{ color: "red" }}>{errors.dateOfBirth}</div>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {errors.phoneNumber && (
            <div style={{ color: "red" }}>{errors.phoneNumber}</div>
          )}
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && (
            <div style={{ color: "red" }}>{errors.address}</div>
          )}
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
          {errors.state && <div style={{ color: "red" }}>{errors.state}</div>}
        </div>

        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          {errors.country && (
            <div style={{ color: "red" }}>{errors.country}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
