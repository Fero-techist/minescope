import mineralBg from "../assets/login.png";
import { AuthLayout } from "../components/auth/AuthLayout";
import { LoginForm } from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div>
      <AuthLayout
        bgImage={mineralBg}
        heading={
          <>
            Charting the <span className="text-[#34D399]">Unseen Depths</span>
          </>
        }
        description="Unlock high-fidelity geophysical insights with the industry's most advanced mineral cartography suite."
      >
        <LoginForm />
      </AuthLayout>
      ;
    </div>
  );
};

export default Login;
