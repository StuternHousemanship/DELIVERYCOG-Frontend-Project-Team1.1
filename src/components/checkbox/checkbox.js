import { useState } from "react";

function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="">
      <label>
        <input type="checkbox" checked={isChecked} />
        <span>{label}</span>
      </label>
    </div>
  );
}
export default Checkbox;
