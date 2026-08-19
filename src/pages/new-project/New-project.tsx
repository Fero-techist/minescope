import { useNavigate } from "react-router-dom";
import ProjectForm from "../../components/projects/ProjectForm";
import type { ProjectFormData } from "../../components/projects/ProjectForm";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function NewProject() {
  const navigate = useNavigate();

  const handleCreateProject = (data: ProjectFormData) => {
    console.log("PROJECT TO SEND TO BACKEND:", data);

    /*
      TEMPORARY

      Eventually this becomes:

      const response = await api.post(
        "/projects",
        data
      );

      navigate(`/projects/${response.data.id}`);
    */

    const fakeProjectId = "project-new-001";

    navigate(`/projects/${fakeProjectId}`);
  };

  return (
    <DashboardLayout
      component={
        <ProjectForm
          mode="create"
          onSubmit={handleCreateProject}
          onCancel={() => navigate("/projects")}
        />
      }
    />
  );
}
