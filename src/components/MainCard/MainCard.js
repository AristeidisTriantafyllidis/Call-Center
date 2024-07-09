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

export default function MainCard(props) {
  const [datePart, timePart] = props.date?.replace("Z", "").split("T") || [];
  const [year, month, day] = datePart.split("-");
  const formattedDate = day + "/" + month + "/" + year;
  const formattedTime = timePart?.slice(0, 5);

  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 border-l-4 border-l-blue-500 rounded-xl px-6 py-5 mb-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 hover:border-l-blue-700">
      <div
        className="flex-1 grid grid-cols-[120px_1.8fr_150px_80px] items-center gap-6 cursor-pointer"
        onClick={() => props.switch(props.id)}
      >
        <div className="flex flex-col gap-2">
          <span className={`font-semibold text-sm ${directionStyles[props.direction] || ""}`}>
            {props.direction === "inbound" ? "\u2199\ufe0f" : "\u2197\ufe0f"} {props.direction}
          </span>
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold w-max capitalize tracking-wide ${statusStyles[props.status] || ""}`}
          >
            {props.status}
          </span>
        </div>

        <div>
          <p className="font-semibold text-base text-slate-800">{props.from}</p>
          <p className="mt-1 text-gray-500 text-sm">To: {props.to}</p>
        </div>

        <div className="text-center text-gray-500 text-sm leading-relaxed">
          <p>
            {formattedDate} &bull; {formattedTime}
          </p>
        </div>

        <div className="text-center">
          <span className="block text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
            Duration
          </span>
          <span className="whitespace-nowrap text-base font-semibold text-gray-700">
            {props.duration > 0 ? `${props.duration}s` : "\u2014"}
          </span>
        </div>
      </div>

      <button
        className="ml-5 w-[88px] h-[38px] border-2 border-gray-200 rounded-lg bg-white text-gray-500 text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-red-500 hover:text-white hover:border-red-500 hover:shadow-md hover:shadow-red-500/25"
        onClick={() => props.deleteCall(props.id)}
      >
        Archive
      </button>
    </div>
  );
}
