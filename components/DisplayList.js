import React from "react";
import cx from "classNames";

function DisplayList({ Todo, OnClick }) {
  return (
    <div>
      <ul className="pt-12">
        {Todo.filter(({ done }) => !done).map(
          ({ id, message, done }) =>
            message && (
              <li
                key={id}
                onClick={() => {
                  OnClick(id);
                }}
                className={cx("item", { done })}
              >
                {message}
              </li>
            )
        )}
        {Todo.filter(({ done }) => done).map(
          ({ id, message, done }) =>
            message && (
              <li
                key={id}
                onClick={() => {
                  handleToggle(id);
                }}
                className={cx("item", { done })}
              >
                {message}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default DisplayList;
