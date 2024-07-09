import React from "react";

const statusStyles = {
  missed: "bg-red-50 text-red-600 border border-red-200",
  answered: "bg-green-50 text-green-600 border border-green-200",
  voicemail: "bg-amber-50 text-amber-600 border border-amber-200",
};

const directionStyles = {
  inbound: "text-blue-600",
  outbound: "text-violet-600",
};

export default function DetailCard(props) {
  const [date, hour] = props.date?.replace("Z", "").split("T");
  const notes = props.notes?.[0]?.content || "No notes";

  return (
    <div>
      <button
        className="my-6 px-5 py-2.5 border-2 border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-300"
        onClick={() => props.switch(props.id)}
      >
        &larr; Back to Calls
      </button>

      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-slate-800 tracking-tight">
          Call Details
        </h2>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Direction</span>
          <span className={`font-semibold ${directionStyles[props.direction] || ""}`}>
            {props.direction}
          </span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">From</span>
          <span className="text-slate-800">{props.from}</span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">To</span>
          <span className="text-slate-800">{props.to}</span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Call Type</span>
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[props.status] || ""}`}>
            {props.status}
          </span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Duration</span>
          <span className="text-slate-800 font-medium">{props.duration}s</span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Date</span>
          <span className="text-slate-800">{date}</span>
        </div>

        <div className="flex justify-between py-4 border-b border-gray-100 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Time</span>
          <span className="text-slate-800">{hour}</span>
        </div>

        <div className="flex justify-between py-4 text-sm">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Archived</span>
          <span className="text-slate-800">{props.archive ? "Yes" : "No"}</span>
        </div>

        <div className="mt-7 pt-5 border-t border-gray-200">
          <h3 className="mb-3 text-lg font-bold text-slate-800">Notes</h3>
          <p className="leading-relaxed text-gray-500 text-sm">{notes}</p>
        </div>
      </div>
    </div>
  );
}
