import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/projects/ProjectForm";
import type { ProjectFormData } from "../../components/projects/ProjectForm";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function EditProject() {
  const navigate = useNavigate();

  /*
    TEMPORARY MOCK DATA

    Later this comes from:

    GET /api/projects/:projectId
  */

  const project = {
    name: "Emerald Basin Alpha",
    projectType: "Exploration",
    mineralType: "Lithium",
    region: "Western Australia",
    country: "Australia",
    description:
      "Large-scale lithium exploration project located within the Pilbara region.",
    latitude: "-22.8424",
    longitude: "118.4238",
    estimatedResources: "125000",
    resourceUnit: "Tonnes",
    startDate: "2026-01-15",
    expectedCompletion: "2028-12-31",
    status: "Active",
  };

  const handleUpdate = (data: ProjectFormData) => {
    console.log("UPDATED PROJECT:", data);

    /*
      Eventually:

      await api.patch(
        `/projects/${projectId}`,
        data
      );
    */

    navigate("/projects/project-001");
  };

  return (
    <DashboardLayout
      component={
        <ProjectForm
          mode="edit"
          initialData={project}
          onSubmit={handleUpdate}
          onCancel={() => navigate("/projects")}
        />
      }
    ></DashboardLayout>
  );
}
