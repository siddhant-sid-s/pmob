import { React } from "react";
import { BiArrowBack } from 'react-icons/bi';
import PcaPrediction from "./package/PcaPrediction";
import { useLocation,Link } from "react-router-dom";
import "./prediction.css"
export default function Prediction() {
  const location = useLocation();
  const formValues = location.state;
  const pstatus = PcaPrediction(formValues);
  const filteredStatus = Object.fromEntries(
    Object.entries(pstatus).filter(([key]) => key !== "mismatched")
  );

  return (
    <div className="pd">
    <div className="card">
        <section>
              <div>
                {pstatus.mismatched === false ? (
                  <div className="table-res">
                    
                    <table>
                      <thead>
                        <tr >
                          <th>Role</th>
                          <th>Status</th>
                          <th>Package (Approximately)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(filteredStatus).map(([role, { placed, salary }], index) => (
                          <tr key={index}>
                            <td id="role">{role.replace('_', ' ')}</td>
                            <td>{placed ? "Good to go" : "Need Training"}</td>
                            <td>{placed ? (salary ? `₹${salary} Lacs` : "N/A") : "N/A"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="sorry-message">
                    <h5>Sorry! Total Score is below 60%. Criteria Mismatched!</h5>
                  </div>
                )}
              </div>
              
        </section>
        <div className="goback">
        <Link to='/'  style={{textDecoration: 'none',}}>
        <button className='submit-button' style={{  padding: '7px 12px' }}>
          <BiArrowBack className='logout--icon' />&nbsp;Go Back
        </button>
        </Link>
        </div>
    </div>
    </div>
  );
}
