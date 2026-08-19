import { CalendarDays, FileText, MapPin, Pickaxe } from "lucide-react";

import type { ProjectFormData } from "./ProjectForm";

type Props = {
  formData: ProjectFormData;
  documents: File[];
};

export default function ReviewProject({ formData, documents }: Props) {
  return (
    <div className="p-5 sm:p-7">
      <div className="mb-7">
        <h2 className="text-sm font-semibold text-white">Review Project</h2>

        <p className="mt-1 text-[10px] text-slate-500">
          Review the information below before creating the project.
        </p>
      </div>

      <div className="space-y-5">
        <ReviewSection
          icon={<Pickaxe size={16} />}
          title="Project Information"
        >
          <ReviewItem
            label="Project Name"
            value={formData.name}
          />

          <ReviewItem
            label="Project Type"
            value={formData.projectType}
          />

          <ReviewItem
            label="Mineral"
            value={formData.mineralType}
          />

          <ReviewItem
            label="Status"
            value={formData.status}
          />
        </ReviewSection>

        <ReviewSection
          icon={<MapPin size={16} />}
          title="Location"
        >
          <ReviewItem
            label="Region"
            value={formData.region}
          />

          <ReviewItem
            label="Country"
            value={formData.country}
          />

          <ReviewItem
            label="Coordinates"
            value={`${formData.latitude}, ${formData.longitude}`}
          />

          <ReviewItem
            label="Resources"
            value={
              formData.estimatedResources
                ? `${formData.estimatedResources} ${formData.resourceUnit}`
                : "Not specified"
            }
          />
        </ReviewSection>

        <ReviewSection
          icon={<CalendarDays size={16} />}
          title="Timeline"
        >
          <ReviewItem
            label="Start Date"
            value={formData.startDate}
          />

          <ReviewItem
            label="Expected Completion"
            value={formData.expectedCompletion}
          />
        </ReviewSection>

        <ReviewSection
          icon={<FileText size={16} />}
          title="Documents"
        >
          {documents.length === 0 ? (
            <p className="text-xs text-slate-600">No documents attached.</p>
          ) : (
            <div className="space-y-2">
              {documents.map((document) => (
                <div
                  key={document.name}
                  className="flex items-center gap-2 text-xs text-slate-400"
                >
                  <FileText
                    size={13}
                    className="text-emerald-400"
                  />

                  {document.name}
                </div>
              ))}
            </div>
          )}
        </ReviewSection>
      </div>
    </div>
  );
}

function ReviewSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-[#0d1729] p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-emerald-400">{icon}</span>

        <h3 className="text-xs font-semibold text-white">{title}</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-wider text-slate-600">
        {label}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-300">
        {value || "Not specified"}
      </p>
    </div>
  );
}
