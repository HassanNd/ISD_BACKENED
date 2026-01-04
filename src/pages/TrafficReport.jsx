import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function TrafficReport() {
  const { token } = useContext(AuthContext);
  const [traffic, setTraffic] = useState([]);
  const [sort, setSort] = useState("desc"); // newest first

  const fetchTraffic = async (order) => {
    const res = await axios.get(
      `http://localhost:5000/api/traffic?sort=${order}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    setTraffic(res.data);
  };

  useEffect(() => {
    fetchTraffic(sort);
  }, [sort]);

  return (
    <div className="page fade">
      <h1>Traffic Report</h1>

      {/* 🔽 SORT CONTROL */}
      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px" }}>Sort:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="desc">Latest → Oldest</option>
          <option value="asc">Oldest → Latest</option>
        </select>
      </div>

      {traffic.length === 0 && <p>No traffic reports</p>}

      <div className="traffic-list">
        {traffic.map((item) => (
          <div className="traffic-card" key={item._id}>
            <div className="traffic-row">
              <span className="icon">🚦</span>
              <span className="label">Street:</span>
              <span className="value">{item.streetName}</span>
            </div>

            <div className="traffic-row">
              <span className="icon">📅</span>
              <span className="label">Date:</span>
              <span className="value">{item.date}</span>
            </div>

            <div className="traffic-row">
              <span className="icon">⏰</span>
              <span className="label">Time:</span>
              <span className="value">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficReport;
