import React from "react";
import cx from "classnames";

function DisplayList({ Todo, HandleToggle }) {
  return (
    <div>
      <ul className="pt-12">
        {Todo.filter(({ done }) => !done).map(
          ({ id, message, done }) =>
            message && (
              <li
                key={id}
                onClick={() => {
                  HandleToggle(id);
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
                  HandleToggle(id);
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
