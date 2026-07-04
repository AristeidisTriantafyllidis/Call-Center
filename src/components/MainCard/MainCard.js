import React from "react";

export default function MainCard(props) {
  const [datePart, timePart] = props.date?.replace("Z", "").split("T") || [];
  const [year, month, day] = datePart.split("-");
  const formattedDate = day + "/" + month + "/" + year;
  const formattedTime = timePart?.slice(0, 5);

  return (
    <div className="mainCard">
      <div className="main--Card" onClick={() => props.switch(props.id)}>
        <div className="status-card">
          <span className={props.direction}>
            {props.direction === "inbound" ? "↙️" : "↗️"} {props.direction}
          </span>

          <span className={props.status}>{props.status}</span>
        </div>

        <div className="caller-info">
          <p className="caller">{props.from}</p>
          <p className="receiver">To: {props.to}</p>
        </div>

        <div className="date-info">
          <p>
            {formattedDate} • {formattedTime}
          </p>
        </div>

        <div className="duration-info">
          <span className="duration-label">Duration </span>
          <span className="duration-value">
            {props.duration > 0 ? `${props.duration} s` : "—"}
          </span>
        </div>
      </div>

      <button className="arcBtn" onClick={() => props.deleteCall(props.id)}>
        Archive
      </button>
    </div>
  );
}
