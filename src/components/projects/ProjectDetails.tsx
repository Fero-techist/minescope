import { CalendarDays, FileText, Upload, X } from "lucide-react";

import type { ProjectFormData } from "./ProjectForm";

type Props = {
  formData: ProjectFormData;
  errors: Record<string, string>;
  updateField: (field: keyof ProjectFormData, value: string) => void;

  documents: File[];

  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onRemoveDocument: (index: number) => void;
};

export default function ProjectDetails({
  formData,
  errors,
  updateField,
  documents,
  onUpload,
  onRemoveDocument,
}: Props) {
  return (
    <div className="p-5 sm:p-7">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-400/10 text-purple-400">
          <CalendarDays size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Project Details</h2>

          <p className="mt-1 text-[10px] text-slate-500">
            Define project timelines and attach supporting documents.
          </p>
        </div>
      </div>

      {/* TIMELINE */}

      <div className="mb-8 grid gap-5 md:grid-cols-2">
        <DateInput
          label="Project Start Date"
          value={formData.startDate}
          error={errors.startDate}
          onChange={(value) => updateField("startDate", value)}
        />

        <DateInput
          label="Expected Completion"
          value={formData.expectedCompletion}
          error={errors.expectedCompletion}
          onChange={(value) => updateField("expectedCompletion", value)}
        />
      </div>

      {/* DOCUMENTS */}

      <div>
        <div className="mb-3">
          <h3 className="text-xs font-semibold text-slate-300">
            Supporting Documents
          </h3>

          <p className="mt-1 text-[10px] text-slate-600">
            Upload geological reports, licenses, environmental documents or
            other project files.
          </p>
        </div>

        <label className="group flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0d1729] px-5 text-center transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.02]">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={onUpload}
          />

          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400 transition group-hover:scale-105">
            <Upload size={19} />
          </div>

          <p className="text-xs font-medium text-slate-300">
            Drop files here or <span className="text-emerald-400">browse</span>
          </p>

          <p className="mt-2 text-[9px] text-slate-600">
            PDF, XLSX, CSV, ZIP up to 50MB
          </p>
        </label>

        {/* FILE LIST */}

        {documents.length > 0 && (
          <div className="mt-4 space-y-2">
            {documents.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#18233a] p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <FileText size={15} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-slate-300">
                    {file.name}
                  </p>

                  <p className="mt-1 text-[9px] text-slate-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveDocument(index)}
                  className="text-slate-600 hover:text-red-400"
                >
                  <X size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DateInput({
  label,
  value,
  error,
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </label>

      <input
        type="date"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`h-11 w-full rounded-lg border bg-[#18233a] px-4 text-sm text-slate-300 outline-none ${
          error
            ? "border-red-400/50"
            : "border-white/5 focus:border-emerald-400/40"
        }`}
      />

      {error && <p className="mt-1 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}
