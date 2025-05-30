// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customer";
// import Error404 from "./pages/Error404";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import Forgot from "./auth/Forgot";
// import AuthLayout from "./layouts/AuthLayouts";
// import Loading from "./components/Loading";

import { Routes, Route } from "react-router-dom";
import { Suspense, useState } from "react";
import React from "react";
import "./assets/tailwind.css";
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customer"))
const User = React.lazy(() => import("./pages/User"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const Loading = React.lazy(() => import("./components/Loading"))
const Login = React.lazy(() => import("./auth/Login"))
const Register = React.lazy(() => import("./auth/Register"))
const Forgot = React.lazy(() => import("./auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayouts"))



function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
        <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route>
          <Route
            path="*"
            element={
              <ErrorPage
                img="/img/gummy.png"
                code={404}
                title={"HALAMAN TIDAK DITEMUKAN"}
                description={
                  "Pastikan kamu memasukkan alamat halaman dengan benar!"
                }
              />
            }
          />
          <Route
            path="/401"
            element={
              <ErrorPage
                img="/img/dog.png"
                code={401}
                title={"TIDAK ADA AKSES"}
                description={"Kamu tidak memiliki akses untuk halaman ini!"}
              />
            }
          />
          <Route
            path="/403"
            element={
              <ErrorPage
                img="/img/girl.png"
                code={403}
                title={"TIDAK ADA AKSES KE SERVER"}
                description={
                  "Silahkan hubungi pemilik situs ini untuk mengetahui lebih lanjut"
                }
              />
            }
          />
          <Route
            path="/400"
            element={
              <ErrorPage
                img="/img/pinkdude.png"
                code={400}
                title={"PERMINTAAN HTTP TIDAK SESUAI"}
                description={
                  "Pastikan anda mengisi data sesuai dengan yang diminta"
                }
              />
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/Loading" element={<Loading />} />
        </Route>
        
      </Routes>
    </Suspense>
  );
}

export default App;
