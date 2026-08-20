type Role = "government" | "company" | "investor";

export const RoleSelector = ({
  value,
  onChange,
}: {
  value: Role;
  onChange: (role: Role) => void;
}) => {
  const roles: Role[] = ["government", "company", "investor"];

  return (
    <div className="flex gap-3">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => onChange(role)}
          className={`flex-1 py-3 md:px-0 px-2 rounded-lg border transition
            ${
              value === role
                ? "bg-[#001C10] text-white border-[#4EDEA3]"
                : "bg-gray-800 text-gray-400 border-gray-700"
            }`}
        >
          {role}
        </button>
      ))}
    </div>
  );
};
