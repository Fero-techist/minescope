import type { JSX } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/hero";
import Login from "./pages/Login";
import Signup from "./pages/Sign-up";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/dashboard/Projects";
import Analytics from "./pages/analytics/Analytics";
import SpatialSection from "./pages/Spatial-section";
import EcosystemSection from "./pages/Ecosystem-section";
import NewProject from "./pages/new-project/New-project";
import Insights from "./pages/Insights";
import CTASection from "./pages/Cta-section";
import SubsurfaceInsightsCard from "./pages/Sub-ssurface";
import Footer from "./components/Footer";
import Reports from "./pages/dashboard/Reports";
import ThemeToggle from "./components/toggle/ThemeToggle";
import { useTheme } from "./context/useTheme";
import Settings from "./pages/dashboard/Settings";
import EditProject from "./pages/edit-project/Edit-project";

function AppContent(): JSX.Element {
  const { theme } = useTheme();

  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={`min-h-screen ${theme === "dark" ? "theme-dark" : "theme-light"}`}
            >
              <Navbar />
              <Hero />
              <SpatialSection />
              <EcosystemSection />
              <SubsurfaceInsightsCard />
              <Insights />
              <CTASection />
              <Footer />
            </div>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/projects/new"
          element={<NewProject />}
        />

        <Route
          path="/projects/:projectId/edit"
          element={<EditProject />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />
      </Routes>
    </>
  );
}

function App(): JSX.Element {
  return <AppContent />;
}

export default App;
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./pages/hero";
// import Login from "./pages/Login";
// import Signup from "./pages/Sign-up";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Projects from "./pages/dashboard/Projects";
// import Analytics from "./pages/analytics/Analytics";
// import SpatialSection from "./pages/Spatial-section";
// import EcosystemSection from "./pages/Ecosystem-section";
// import Insights from "./pages/Insights";
// import CTASection from "./pages/Cta-section";
// import SubsurfaceInsightsCard from "./pages/Sub-ssurface";
// import Footer from "./components/Footer";
// import Reports from "./pages/dashboard/Reports";
// import { ThemeProvider, useTheme } from "./context/ThemeContext";
// import ThemeToggle from "./components/toggle/ThemeToggle";

// function AppContent(): JSX.Element {
//   const { theme } = useTheme();

//   const pageClass =
//     theme === "dark"
//       ? "bg-[#090E1C] min-h-screen text-white"
//       : "bg-white min-h-screen text-[#090E1C]";

//   return (
//     <>
//       <ThemeToggle />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className={pageClass}>
//               <Navbar />
//               <Hero />
//               <SpatialSection />
//               <EcosystemSection />
//               <SubsurfaceInsightsCard />
//               <Insights />
//               <CTASection />
//               <Footer />
//             </div>
//           }
//         />

//         <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route
//           path="/signup"
//           element={<Signup />}
//         />
//         <Route
//           path="/dashboard"
//           element={<Dashboard />}
//         />
//         <Route
//           path="/projects"
//           element={<Projects />}
//         />
//         <Route
//           path="/analytics"
//           element={<Analytics />}
//         />
//         <Route
//           path="/reports"
//           element={<Reports />}
//         />
//       </Routes>
//     </>
//   );
// }

// function App(): JSX.Element {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }

// export default App;
