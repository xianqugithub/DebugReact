import {React, createRoot} from "./whichReact";
import "./index.css";

import UseStatePage from "./pages/UseStatePage";

const root = createRoot(document.getElementById("root"));

root.render(<UseStatePage />);

console.log("React", React.version); //sy-log
//xqu: React 17.0.0 should be
