import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const EmployeeListing = () => {
  const [employeeData, setEmployeeData] = useState<Employee[] | null>(null);
  const navigate = useNavigate();

  const LoadDetails = (id: number) => {
    navigate("/employee/details/" + id);
  };

  const LoadEdits = (id: number) => {
    navigate("/employee/edit");
  };

  const DeleteFunction = (id: number) => {
    if (window.confirm("Are you sure you want to Delete this Employee?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Employee Deleted Successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        setEmployeeData(resp); // Set the fetched data in state
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listings</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {employeeData &&
                employeeData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdits(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          DeleteFunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListing;
