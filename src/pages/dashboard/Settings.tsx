import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Lock,
  Mail,
  Shield,
  ShieldCheck,
  Users,
  Settings as SettingsIcon,
  KeyRound,
} from "lucide-react";
import DashboardLayout from "../../components/layout/DashboardLayout";

type ToggleProps = {
  enabled: boolean;
  onChange: () => void;
};

const Toggle = ({ enabled, onChange }: ToggleProps) => {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={enabled}
      className={`relative h-5 w-9 rounded-full transition-colors duration-200 ${
        enabled ? "bg-emerald-400" : "bg-slate-600"
      }`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          enabled ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
};

type AdminCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const AdminCard = ({ icon, title, description }: AdminCardProps) => {
  return (
    <button
      type="button"
      className="group flex w-full items-start gap-4 rounded-xl border border-white/5 bg-[#121c31] p-4 text-left transition hover:border-emerald-400/20 hover:bg-[#16223a]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-medium text-slate-200 group-hover:text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
    </button>
  );
};

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [fullName, setFullName] = useState("Alex Sterling");
  const [email, setEmail] = useState("alex.sterling@minescope.io");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [region, setRegion] = useState("North America - Central");

  const handleProfileUpdate = () => {
    console.log({
      fullName,
      email,
    });
  };

  const handlePasswordUpdate = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation password do not match.");
      return;
    }

    console.log("Password update requested");
  };

  return (
    <DashboardLayout
      component={
        <main>
          <div className="flex items-center  justify-between border-b border-white/5 px-5 py-4 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
                <span className="text-sm font-bold text-[#07101f]">M</span>
              </div>

              <span className="font-semibold">Minescope</span>
            </div>

            <button
              type="button"
              className="text-slate-400 hover:text-white"
            >
              <SettingsIcon size={20} />
            </button>
          </div>

          <div className="max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-8">
            <section>
              <SectionHeading
                title="Profile Settings"
                description="Manage your public identity and role within the MineScope ecosystem."
              />

              <div className="overflow-hidden rounded-xl border border-white/5 bg-[#121c31]">
                <div className="border-l-2 border-emerald-400 p-5 sm:p-6">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400"
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-10 w-full rounded-lg border border-white/5 bg-[#29334b] px-3 text-sm text-slate-300 outline-none transition placeholder:text-slate-500 focus:border-emerald-400/40"
                      />
                    </div>

                    {/* User Role */}
                    <div>
                      <label
                        htmlFor="userRole"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500"
                      >
                        User Role
                      </label>

                      <div className="relative">
                        <input
                          id="userRole"
                          type="text"
                          value="Senior Geological Analyst"
                          disabled
                          className="h-10 w-full rounded-lg border border-white/5 bg-[#0e172a] px-3 pr-10 text-sm text-slate-500 outline-none"
                        />

                        <Lock
                          size={12}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 w-full rounded-lg border border-white/5 bg-[#29334b] px-3 text-sm text-slate-300 outline-none transition focus:border-emerald-400/40"
                      />
                    </div>

                    {/* Update button */}
                    <div className="flex items-end justify-start md:justify-end">
                      <button
                        type="button"
                        onClick={handleProfileUpdate}
                        className="h-10 rounded-lg bg-emerald-400 px-6 text-sm font-semibold text-[#07101f] transition hover:bg-emerald-300"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                SECURITY
            ===================================================== */}
            <section className="mt-8">
              <SectionHeading
                title="Security"
                description="Maintain the integrity of your account and secure your data access."
              />

              <div className="overflow-hidden rounded-xl border border-white/5 bg-[#121c31]">
                {/* Passwords */}
                <div className="p-5 sm:p-6">
                  <div className="grid gap-4 md:grid-cols-3">
                    <PasswordInput
                      label="Current Password"
                      value={currentPassword}
                      onChange={setCurrentPassword}
                    />

                    <PasswordInput
                      label="New Password"
                      value={newPassword}
                      onChange={setNewPassword}
                    />

                    <PasswordInput
                      label="Confirm Password"
                      value={confirmPassword}
                      onChange={setConfirmPassword}
                    />
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={handlePasswordUpdate}
                      className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-emerald-400/30 hover:text-white"
                    >
                      <KeyRound size={14} />
                      Update Password
                    </button>
                  </div>
                </div>

                {/* 2FA */}
                <div className="flex flex-col gap-4 border-t border-white/5 bg-[#1a253b] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        twoFactorEnabled
                          ? "bg-emerald-400/10"
                          : "bg-cyan-400/10"
                      }`}
                    >
                      <ShieldCheck
                        size={18}
                        className={
                          twoFactorEnabled
                            ? "text-emerald-400"
                            : "text-cyan-400"
                        }
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Enable Two-Factor Authentication (2FA)
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-500">
                        Adds an extra layer of protection using a mobile
                        authenticator app.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-medium transition ${
                      twoFactorEnabled
                        ? "border-emerald-400 bg-emerald-400 text-[#07101f]"
                        : "border-emerald-400/70 text-emerald-400 hover:bg-emerald-400/10"
                    }`}
                  >
                    {twoFactorEnabled ? "Enabled" : "Configure 2FA"}
                  </button>
                </div>
              </div>
            </section>

            {/* =====================================================
                SYSTEM PREFERENCES
            ===================================================== */}
            <section className="mt-8">
              <SectionHeading
                title="System Preferences"
                description="Customize your interaction experience with the platform."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {/* Region */}
                <div className="rounded-xl border border-white/5 bg-[#121c31] p-5">
                  <label
                    htmlFor="region"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400"
                  >
                    Default Region
                  </label>

                  <div className="relative">
                    <select
                      id="region"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="h-10 w-full appearance-none rounded-lg border border-white/5 bg-[#29334b] px-3 pr-10 text-sm text-slate-300 outline-none focus:border-emerald-400/40"
                    >
                      <option>North America - Central</option>

                      <option>West Africa</option>

                      <option>East Africa</option>

                      <option>Southern Africa</option>

                      <option>Europe</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                    />
                  </div>
                </div>

                {/* Notifications */}
                <div className="rounded-xl border border-white/5 bg-[#121c31] p-5">
                  <PreferenceRow
                    icon={<Mail size={16} />}
                    title="Email Notifications"
                    description="Receive weekly summary reports via email."
                    enabled={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                  />

                  <div className="my-4 border-t border-white/5" />

                  <PreferenceRow
                    icon={<Bell size={16} />}
                    title="System Alerts"
                    description="Critical notifications regarding mine structural integrity."
                    enabled={systemAlerts}
                    onChange={() => setSystemAlerts(!systemAlerts)}
                  />
                </div>
              </div>
            </section>

            {/* =====================================================
                ADMIN SETTINGS
            ===================================================== */}
            <section className="mt-8 pb-10">
              <SectionHeading
                title="Admin Settings"
                description="High-level administrative controls for system-wide management."
              />

              <div className="grid gap-4 md:grid-cols-2">
                <AdminCard
                  icon={<Users size={18} />}
                  title="Manage Roles & Permissions"
                  description="Configure granular access levels for field teams and office personnel."
                />

                <AdminCard
                  icon={<Shield size={18} />}
                  title="Control System Access"
                  description="View active sessions and manage organization-wide API credentials."
                />
              </div>
            </section>
          </div>
        </main>
      }
    ></DashboardLayout>
  );
}

/* ===============================================================
   SECTION HEADING
================================================================= */

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold tracking-tight text-slate-200">
        {title}
      </h2>

      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  );
}

/* ===============================================================
   PASSWORD INPUT
================================================================= */

function PasswordInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
        {label}
      </label>

      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-lg border border-white/5 bg-[#29334b] px-3 text-sm text-slate-300 outline-none transition focus:border-emerald-400/40"
      />
    </div>
  );
}

/* ===============================================================
   PREFERENCE ROW
================================================================= */

function PreferenceRow({
  icon,
  title,
  description,
  enabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
            enabled
              ? "bg-emerald-400/10 text-emerald-400"
              : "bg-slate-700/40 text-slate-500"
          }`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-300">{title}</p>

          <p className="mt-0.5 truncate text-[10px] text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <Toggle
        enabled={enabled}
        onChange={onChange}
      />
    </div>
  );
}
