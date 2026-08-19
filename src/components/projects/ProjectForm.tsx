import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  //   FileText,
  //   MapPin,
  //   Plus,
  //   Upload,
  //   X,
} from "lucide-react";

import BasicInformation from "./BasicInformation";
import LocationResources from "./LocationResources";
import ProjectDetails from "./ProjectDetails";
import ReviewProject from "./ReviewProject";

export type ProjectFormData = {
  name: string;
  projectType: string;
  mineralType: string;
  region: string;
  country: string;
  description: string;

  latitude: string;
  longitude: string;

  estimatedResources: string;
  resourceUnit: string;

  startDate: string;
  expectedCompletion: string;

  status: string;
};

type ProjectFormProps = {
  mode?: "create" | "edit";
  initialData?: Partial<ProjectFormData>;
  onSubmit?: (data: ProjectFormData) => void;
  onCancel?: () => void;
};

const defaultData: ProjectFormData = {
  name: "",
  projectType: "Exploration",
  mineralType: "",
  region: "",
  country: "",
  description: "",

  latitude: "",
  longitude: "",

  estimatedResources: "",
  resourceUnit: "Tonnes",

  startDate: "",
  expectedCompletion: "",

  status: "Active",
};

const steps = [
  {
    id: 1,
    title: "Basic Information",
    description: "Project identity and mineral details",
  },
  {
    id: 2,
    title: "Location & Resources",
    description: "Geographic and resource information",
  },
  {
    id: 3,
    title: "Project Details",
    description: "Timeline and supporting documents",
  },
  {
    id: 4,
    title: "Review",
    description: "Review before submitting",
  },
];

export default function ProjectForm({
  mode = "create",
  initialData,
  onSubmit,
  onCancel,
}: ProjectFormProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<ProjectFormData>({
    ...defaultData,
    ...initialData,
  });

  const [documents, setDocuments] = useState<File[]>([]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof ProjectFormData, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Project name is required.";
      }

      if (!formData.mineralType) {
        newErrors.mineralType = "Select a mineral type.";
      }

      if (!formData.description.trim()) {
        newErrors.description = "Add a short description for this project.";
      }
    }

    if (currentStep === 2) {
      if (!formData.region) {
        newErrors.region = "Select a region.";
      }

      if (!formData.country) {
        newErrors.country = "Select a country.";
      }

      if (!formData.latitude) {
        newErrors.latitude = "Latitude is required.";
      }

      if (!formData.longitude) {
        newErrors.longitude = "Longitude is required.";
      }
    }

    if (currentStep === 3) {
      if (!formData.startDate) {
        newErrors.startDate = "Select a start date.";
      }

      if (!formData.expectedCompletion) {
        newErrors.expectedCompletion = "Select the expected completion date.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    setCurrentStep((previous) => Math.min(previous + 1, steps.length));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    if (!validateStep()) return;

    onSubmit?.(formData);
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);

    setDocuments((previous) => [...previous, ...files]);
  };

  const removeDocument = (index: number) => {
    setDocuments((previous) => previous.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen theme-surface text-slate-200">
      <div className="mx-auto w-full max-w-7xl px-0 py-2 sm:px-2 sm:py-6 lg:px-8">
        {/* HEADER */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <button
              type="button"
              onClick={onCancel}
              className="mb-4 flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </button>

            <h1 className="text-2xl font-semibold text-white">
              {mode === "edit" ? "Edit Project" : "Create New Project"}
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              {mode === "edit"
                ? "Update project information and configuration."
                : "Add a new mineral resource project to MineScope."}
            </p>
          </div>

          <div className="rounded-lg border border-white/5 bg-[#111b2e] px-4 py-2.5">
            <p className="text-[9px] uppercase tracking-wider text-slate-600">
              Step
            </p>

            <p className="mt-0.5 text-sm font-medium text-white">
              {currentStep}{" "}
              <span className="text-slate-600">/ {steps.length}</span>
            </p>
          </div>
        </div>

        {/* STEPPER */}

        <div className="mb-6 overflow-x-auto pb-1 sm:mb-8">
          <div className="flex min-w-[500px] items-center sm:min-w-[650px]">
            {steps.map((step, index) => {
              const completed = currentStep > step.id;

              const active = currentStep === step.id;

              return (
                <div
                  key={step.id}
                  className="flex flex-1 items-center"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition ${
                        completed
                          ? "border-emerald-400 bg-emerald-400 text-[#07101f]"
                          : active
                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                            : "border-white/10 bg-[#111b2e] text-slate-600"
                      }`}
                    >
                      {completed ? <Check size={15} /> : step.id}
                    </div>

                    <div className="hidden sm:block">
                      <p
                        className={`text-xs font-medium ${
                          active || completed ? "text-white" : "text-slate-600"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`mx-4 h-px flex-1 ${
                        currentStep > step.id
                          ? "bg-emerald-400/50"
                          : "bg-white/5"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* FORM */}

        <div className="rounded-xl border border-white/5 theme-surface">
          {currentStep === 1 && (
            <BasicInformation
              formData={formData}
              errors={errors}
              updateField={updateField}
            />
          )}

          {currentStep === 2 && (
            <LocationResources
              formData={formData}
              errors={errors}
              updateField={updateField}
            />
          )}

          {currentStep === 3 && (
            <ProjectDetails
              formData={formData}
              errors={errors}
              updateField={updateField}
              documents={documents}
              onUpload={handleDocumentUpload}
              onRemoveDocument={removeDocument}
            />
          )}

          {currentStep === 4 && (
            <ReviewProject
              formData={formData}
              documents={documents}
            />
          )}

          {/* FOOTER */}

          <div className="flex flex-col-reverse gap-3 border-t border-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <button
              type="button"
              onClick={currentStep === 1 ? onCancel : handleBack}
              className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 px-5 text-xs font-medium text-slate-400 transition hover:border-white/20 hover:text-white"
            >
              <ArrowLeft size={14} />

              {currentStep === 1 ? "Cancel" : "Previous"}
            </button>

            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 text-xs font-semibold text-[#07101f] transition hover:bg-emerald-300"
              >
                Continue
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 text-xs font-semibold text-[#07101f] transition hover:bg-emerald-300"
              >
                <Check size={15} />

                {mode === "edit" ? "Save Changes" : "Create Project"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
