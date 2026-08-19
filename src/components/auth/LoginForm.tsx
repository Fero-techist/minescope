import { Input } from "../UI/Input";
import Button from "../partials/buttons/Button";
import { Card } from "../UI/Card";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold text-white mb-2">Welcome Back</h2>
      <p className="text-gray-400 mb-6">
        Access your geological intelligence dashboard.
      </p>

      <div className="flex flex-col gap-4">
        <Input
          label="Email Address"
          placeholder="name@company.com"
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
        />

        <Link to="/dashboard">
          <Button>Sign In</Button>
        </Link>

        <div className="text-center text-gray-500 text-sm mt-2">
          OR CONTINUE WITH
        </div>

        <Button variant="primary">Continue with Google</Button>

        <p className="text-sm text-gray-400 text-center mt-4">
          Don’t have an account?{" "}
          <Link
            className="text-green-400 cursor-pointer"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </Card>
  );
};
