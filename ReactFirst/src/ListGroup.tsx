import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface PProps {
  items: String[];
  heading: String;
}

function ListGroup({ items, heading }: PProps) {
  const [selectedIndex, SetSelectedIndex] = useState(-1);
  const [name, setNmame] = useState("");

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 ? (
        <p>items not found</p>
      ) : (
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex == index
                  ? "list-group-item list-group-item-action active "
                  : "list-group-item list-group-item-action "
              }
              //  key={item}
              onClick={() => {
                SetSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
