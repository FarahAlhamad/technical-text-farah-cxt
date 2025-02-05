import React from "react";

const NoteCard = () => {
  return (
    <div className="bg-blue-50 md:max-w-2xl shadow-md rounded-md p-4">
      <h2 className="font-semibold mb-1">Note title</h2>
      <p className="text-sm max-h-[200px] overflow-y-auto">
        Lorem ipsum dolor sit amet consectetur, adsciunt, illo! nsectetur,
        adsciunt, illo!
      </p>
    </div>
  );
};

export default NoteCard;
