import React from "react";

export default function DetailCard(props) {
  const [date, hour] = props.date?.replace("Z", "").split("T");
  const notes = props.notes?.[0]?.content || "No notes ";

  return (
    <div className="detailPage">
      <button className="backBtn" onClick={() => props.switch(props.id)}>
        ← Back to Calls
      </button>

      <div className="detailCard">
        <h2>Call Details</h2>

        <div className="detailRow">
          <span className="label">Direction</span>
          <span className={props.direction}>{props.direction}</span>
        </div>

        <div className="detailRow">
          <span className="label">From</span>
          <span>{props.from}</span>
        </div>

        <div className="detailRow">
          <span className="label">To</span>
          <span>{props.to}</span>
        </div>

        <div className="detailRow">
          <span className="label">Call Type</span>
          <span className={props.status}>{props.status}</span>
        </div>

        <div className="detailRow">
          <span className="label">Duration</span>
          <span>{props.duration}s</span>
        </div>

        <div className="detailRow">
          <span className="label">Date</span>
          <span>{date}</span>
        </div>

        <div className="detailRow">
          <span className="label">Time</span>
          <span>{hour}</span>
        </div>

        <div className="detailRow">
          <span className="label">Archived</span>
          <span>{props.archive ? "Yes" : "No"}</span>
        </div>

        <div className="notesSection">
          <h3>Notes</h3>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
}
