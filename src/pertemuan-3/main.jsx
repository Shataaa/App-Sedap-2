import { createRoot } from "react-dom/client";

import "./tailwind.css";
import UserForm from "./UserForm";
import LoginForm from "./LoginForm";
import HitungGajiForm from "./HitungGajiForm";
import Card from "./components/Card";
import TailwindCSS from "./TailwindCSS";

createRoot(document.getElementById("root")).render(
  <div>
    <TailwindCSS />
    <LoginForm />

    <Card>
      <HitungGajiForm />
    </Card>
  </div>
);
