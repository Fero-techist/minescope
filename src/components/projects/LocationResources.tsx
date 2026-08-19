import { Globe2, MapPin, Pickaxe } from "lucide-react";

import type { ProjectFormData } from "./ProjectForm";

type Props = {
  formData: ProjectFormData;
  errors: Record<string, string>;
  updateField: (field: keyof ProjectFormData, value: string) => void;
};

export default function LocationResources({
  formData,
  errors,
  updateField,
}: Props) {
  return (
    <div className="p-5 sm:p-7">
      <div className="mb-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
          <MapPin size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">
            Location & Resources
          </h2>

          <p className="mt-1 text-[10px] text-slate-500">
            Define where the project is located and its estimated resources.
          </p>
        </div>
      </div>

      {/* LOCATION */}

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Globe2
            size={15}
            className="text-emerald-400"
          />

          <h3 className="text-xs font-semibold text-slate-300">
            Project Location
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Select
            label="Region"
            value={formData.region}
            placeholder="Select region"
            options={[
              "Western Australia",
              "Northern Territory",
              "Queensland",
              "South Australia",
              "Western Africa",
              "East Africa",
              "Southern Africa",
              "North America",
              "South America",
              "Europe",
              "Asia",
            ]}
            error={errors.region}
            onChange={(value) => updateField("region", value)}
          />

          <Select
            label="Country"
            value={formData.country}
            placeholder="Select country"
            options={[
              "Nigeria",
              "Australia",
              "Canada",
              "United States",
              "South Africa",
              "Ghana",
              "Namibia",
              "Botswana",
              "Chile",
              "Brazil",
            ]}
            error={errors.country}
            onChange={(value) => updateField("country", value)}
          />

          <Input
            label="Latitude"
            value={formData.latitude}
            placeholder="-22.8424"
            error={errors.latitude}
            onChange={(value) => updateField("latitude", value)}
          />

          <Input
            label="Longitude"
            value={formData.longitude}
            placeholder="118.4238"
            error={errors.longitude}
            onChange={(value) => updateField("longitude", value)}
          />
        </div>
      </div>

      {/* MAP */}

      <div className="mb-8 overflow-hidden rounded-xl border border-white/5 bg-[#0d1729]">
        <div className="flex h-[220px] items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.08),_transparent_50%)]">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
              <MapPin size={22} />
            </div>

            <p className="text-xs font-medium text-slate-300">
              Project Location Map
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
              Interactive GIS map will appear here.
            </p>
          </div>
        </div>
      </div>

      {/* RESOURCES */}

      <div>
        <div className="mb-4 flex items-center gap-2">
          <Pickaxe
            size={15}
            className="text-emerald-400"
          />

          <h3 className="text-xs font-semibold text-slate-300">
            Estimated Resources
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_220px]">
          <Input
            label="Estimated Resource Quantity"
            value={formData.estimatedResources}
            placeholder="e.g. 125000"
            onChange={(value) => updateField("estimatedResources", value)}
          />

          <Select
            label="Unit"
            value={formData.resourceUnit}
            options={["Tonnes", "Kilograms", "Metric Tons", "Cubic Metres"]}
            onChange={(value) => updateField("resourceUnit", value)}
          />
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  placeholder,
  error,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`h-11 w-full rounded-lg border bg-[#18233a] px-4 text-sm text-slate-300 outline-none placeholder:text-slate-600 ${
          error
            ? "border-red-400/50"
            : "border-white/5 focus:border-emerald-400/40"
        }`}
      />

      {error && <p className="mt-1 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}

function Select({
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
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
          <option key={option}>{option}</option>
        ))}
      </select>

      {error && <p className="mt-1 text-[10px] text-red-400">{error}</p>}
    </div>
  );
}
