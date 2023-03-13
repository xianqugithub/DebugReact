import {React, createRoot, ReactDOM} from "./whichReact";
import "./index.css";

import jsx from "./pages/ExamplePage";
import UseMemoPage from "./pages/UseMemoPage";

ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

root.render(jsx);
root.render(<UseMemoPage />);

console.log("React", React.version); //sy-log
