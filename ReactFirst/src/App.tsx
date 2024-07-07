import "bootstrap/dist/css/bootstrap.min.css";

import ListGroup from "./ListGroup";
function App() {
  var items = ["New york", "shani", "meni", "shan"];
  return (
    <div>
      <ListGroup items={items} heading={"shagahgshga"}></ListGroup>
    </div>
  );
}

export default App;
