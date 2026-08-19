import { FileText } from "lucide-react";
import type { ProjectFormData } from "./ProjectForm";

type Props = {
  formData: ProjectFormData;
  errors: Record<string, string>;
  updateField: (field: keyof ProjectFormData, value: string) => void;
};

export default function BasicInformation({
  formData,
  errors,
  updateField,
}: Props) {
  return (
    <div className="p-5 sm:p-7">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
          <FileText size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">
            Basic Information
          </h2>

          <p className="mt-1 text-[10px] text-slate-500">
            Tell us about the project and the resource being explored.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Project Name"
          required
          value={formData.name}
          placeholder="e.g. Emerald Basin Alpha"
          error={errors.name}
          onChange={(value) => updateField("name", value)}
        />

        <FormSelect
          label="Project Type"
          value={formData.projectType}
          options={["Exploration", "Extraction", "Processing", "Research"]}
          onChange={(value) => updateField("projectType", value)}
        />

        <FormSelect
          label="Mineral Type"
          required
          value={formData.mineralType}
          placeholder="Select mineral"
          options={[
            "Lithium",
            "Gold",
            "Copper",
            "Iron Ore",
            "Cobalt",
            "Rare Earth Elements",
            "Uranium",
            "Other",
          ]}
          error={errors.mineralType}
          onChange={(value) => updateField("mineralType", value)}
        />

        <FormSelect
          label="Project Status"
          value={formData.status}
          options={["Active", "Paused", "Completed"]}
          onChange={(value) => updateField("status", value)}
        />

        <div className="md:col-span-2">
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Project Description
            <span className="ml-1 text-emerald-400">*</span>
          </label>

          <textarea
            value={formData.description}
            onChange={(event) => updateField("description", event.target.value)}
            rows={5}
            placeholder="Describe the project, its purpose, current exploration activities and expected outcomes..."
            className={`w-full resize-none rounded-lg border bg-[#18233a] px-4 py-3 text-sm text-slate-300 outline-none transition placeholder:text-slate-600 ${
              errors.description
                ? "border-red-400/50"
                : "border-white/5 focus:border-emerald-400/40"
            }`}
          />

          {errors.description && (
            <p className="mt-1 text-[10px] text-red-400">
              {errors.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FormInput({
  label,
  value,
  placeholder,
  required,
  error,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}

        {required && <span className="ml-1 text-emerald-400">*</span>}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`h-11 w-full rounded-lg border bg-[#18233a] px-4 text-sm text-slate-300 outline-none transition placeholder:text-slate-600 ${
          error
            ? "border-red-400/50"
            : "border-white/5 focus:border-emerald-400/40"
        }`}
      />

      {error && <p className="mt-1 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

function FormSelect({
  label,
  value,
  options,
  placeholder,
  required,
  error,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}

        {required && <span className="ml-1 text-emerald-400">*</span>}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-11 w-full rounded-lg border bg-[#18233a] px-4 text-sm text-slate-300 outline-none ${
          error
            ? "border-red-400/50"
            : "border-white/5 focus:border-emerald-400/40"
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}
