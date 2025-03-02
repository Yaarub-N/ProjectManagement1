import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreateProject from "./Pages/createProjectPage/CreateProject";
import ProjectList from "./Pages/projectListPage/ProjectList";
import ProjectDetails from "./Pages/ProjectDetailsPage/ProjectDetails";
import EditProject from "./Pages/editProjectFormPage/EditProject";
import Header from "./Components/sections/Header";
import Footer from "./Components/sections/Footer";
import CreateCustomer from "./Pages/CustomerFormPage/CreateCustomer";
import CreateEmployee from "./Pages/CreateEmployeePage/CreateEmployee";
import { ThemeProvider } from "./Components/ThemeProvider";

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className="main-content">{children}</div>
    <Footer />
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/create-project"
              element={
                <Layout>
                  <CreateProject />
                </Layout>
              }
            />
            <Route
              path="/project-list"
              element={
                <Layout>
                  <ProjectList />
                </Layout>
              }
            />
            <Route
              path="/projects/:projectNumber"
              element={
                <Layout>
                  <ProjectDetails />
                </Layout>
              }
            />
            <Route
              path="/edit/:projectNumber"
              element={
                <Layout>
                  <EditProject />
                </Layout>
              }
            />
            <Route
              path="/create-customer"
              element={
                <Layout>
                  <CreateCustomer />
                </Layout>
              }
            />
            <Route
              path="/create-employee"
              element={
                <Layout>
                  <CreateEmployee />
                </Layout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
