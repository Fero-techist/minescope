import { useState } from "react";
import { Input } from "../UI/Input";
import Button from "../partials/buttons/Button";
import { Link } from "react-router-dom";
import { Card } from "../UI/Card";
import { RoleSelector } from "../UI/Role-selector";

export const SignupForm = () => {
  const [role, setRole] = useState<"government" | "company" | "investor">(
    "government",
  );

  return (
    <Card>
      <h2 className="text-2xl text-white font-semibold mb-2">
        Create your account
      </h2>

      <p className="text-gray-400 mb-6">
        Join the network of professional geo-analysts.
      </p>

      <div className="flex flex-col gap-4">
        <Input
          label="Full Name"
          placeholder="John Doe"
        />
        <Input
          label="Email Address"
          placeholder="name@company.com"
        />
        <Input
          label="Password"
          type="password"
        />

        <div>
          <p className="text-sm text-gray-400 mb-2">Account Role</p>
          <RoleSelector
            value={role}
            onChange={setRole}
          />
        </div>

        <Button>Create Account</Button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-green-400 cursor-pointer">Sign In</span>
          </Link>
        </p>
      </div>
    </Card>
  );
};
