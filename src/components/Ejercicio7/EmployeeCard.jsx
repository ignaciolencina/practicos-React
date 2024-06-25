import PropTypes from "prop-types";
import "./card.css"

const EmployeeCard = (props) => {
    const {employee} = props;
  return (
    <li className="card-body d-flex my-4 align-items-center border border-primary-subtle p-2">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        alt={employee.fullName}
        className="employee-img"
      />
      <div className="ms-2">
        <h1 className="fs-2">{employee.fullName}</h1>
        <div className="d-flex">
            <h3 className="m-0 fs-4 fw-light">{employee.title}</h3>
            <p className="m-0 ms-4 bg-primary text-white rounded p-1 fst-italic">{employee.department}</p>
        </div>
      </div>
    </li>
  )
}
export default EmployeeCard

EmployeeCard.propTypes = {
  employee: PropTypes.string.isRequired,
};