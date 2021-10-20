import React from "react";

function InputField({
  Type,
  ClassName,
  PlaceHolder,
  Value,
  OnChange,
  OnKeyDown,
}) {
  return (
    <div>
      <input
        type={Type}
        className={ClassName}
        placeholder={PlaceHolder}
        value={Value}
        onChange={(e) => OnChange(e.target.value)}
        onKeyDown={OnKeyDown}
      />
    </div>
  );
}

export default InputField;
