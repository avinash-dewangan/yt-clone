import React, { useEffect, useState } from "react";
import Header from "./componetns/header/Header.js";
import CategoriesBar from "./componetns/categoriesBar/CategoriesBar.js";
import Sidebar from "./componetns/sidebar/Sidebar.js";
import Video from "./componetns/video/Video.js";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/HomeScreen.js";
import "./_app.scss";
import LoginScreen from "./screens/loginScreen/LoginScreen.js";

import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidbar] = useState(false);

  const handletoggleSidebar = () => toggleSidbar((value) => !value);
  return (
    <>
      <Header handletoggleSidebar={handletoggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handletoggleSidebar={handletoggleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
 
 let navigate = useNavigate();
 
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      ></Route>
      <Route path="/auth" element={<LoginScreen />}></Route>
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Search Result</h1>
          </Layout>
        }
      ></Route>
      {/* <Route path="*" element={<Navigate to="not-found"/>} /> */}
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="*" element={<NotFound/>} /> */}
    </Routes>
  );
}

export default App;
