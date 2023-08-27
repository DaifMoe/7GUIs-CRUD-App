import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const EmployeeDetails = () => {
  const { employeeId } = useParams<{ employeeId: string }>();

  const [employeeData, changeEmployeeData] = useState<Employee | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + employeeId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        changeEmployeeData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [employeeId]);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Employee Details</h2>
          </div>
          <div className="card-body"></div>

          {employeeData && (
            <div key={employeeData.id}>
              <h2>
                The Employee name is: <b>{employeeData.name}</b> (
                {employeeData.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is: {employeeData.email}</h5>
              <h5>Phone is: {employeeData.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
