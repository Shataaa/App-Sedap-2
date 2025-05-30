import { createRoot } from "react-dom/client";
import FrameworkList from "./components/FrameworkList";
import './tailwind.css';
import FrameworkListSearchFilter from "./components/FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter/>
            
        </div>
    )