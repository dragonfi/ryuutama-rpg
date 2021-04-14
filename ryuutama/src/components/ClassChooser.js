import React from "react";

function ClassChooser({ setClass }) {
  const classes = ["Minstrel", "Merchant", "Healer", "Hunter", "Artisan", "Farmer", "Noble"];
  return (
    <select name="class-selector">
      {classes.map((class_) => (
        <option key={class_} value={class_} onClick={(e) => setClass(e.target.value)}>
          {class_}
        </option>
      ))}
    </select>
  );
}

export default ClassChooser;
