import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const AddEdeit= () => {
  const { id } = useParams();
  console.log(id, "id");
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: " ",
    phone: " ",
  });
  const { name, username, email, phone } = users;
  // useEffect(() => {
  //   loadUser();
  // }, []);

  const dataChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    if (!id) {
      const res = await axios.post("http://localhost:3500/users/", users);
      navigate("/");
    } else {
      const res = await axios.put(`http://localhost:3500/users/${id}`, users);
      navigate("/");
    }
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3500/users/${id}`);
    setUsers(result.data);
  };

  return (

        <div className="card">
          <div className="card-body p-4">
            <h5 className="card-title">
              {!id ? "Add New Product" : "Edit Product "}{" "}
            </h5>
            <hr />
            <div className="form-body mt-4"></div>
            <h2 className="text-center mb-4">
              {!id ? "Add New Product" : "Edit Product "}
            </h2>
            <form className="d-flex justify-content-center flex-column align-items-center">
              <div className="from-group mt-1">
                <TextField
                  id="fullWidth"
                  type="text"
                  className="from-form-control form-control-lg mx-5"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => dataChange(e)}
                />
              </div>
              <div className=" mt-1">
                <TextField
                  id="fullWidth"
                  type="text"
                  className="from-form-control form-control-lg"
                  placeholder="Enter Your  username"
                  name="username"
                  value={username}
                  onChange={(e) => dataChange(e)}
                />
              </div>
              <div className="from-group mt-1">
                <TextField
                  id="fullWidth"
                  type="email"
                  className="from-form-control form-control-lg"
                  placeholder="Enter Your email id"
                  name="email"
                  value={email}
                  onChange={(e) => dataChange(e)}
                />
              </div>
              <div className="from-group mt-1">
                <TextField
                  type="text"
                  className="from-form-control form-control-lg"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={(e) => dataChange(e)}
                />
              </div>
              <Link to="/product">
                {" "}
                <button
                  type="submit"
                  onClick={() => handleSubmit()}
                  className="btn btn-primary btn block mt-1"
                >
                  Update data
                </button>
              </Link>
            </form>
          </div>
        </div>
  );
};

export default AddEdeit;
