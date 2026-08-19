import { AuthLayout } from "../components/auth/AuthLayout";
import { SignupForm } from "../components/auth/SignupForm";
import signupBg from "../assets/sign-up.png";

const Signup = () => {
  return (
    <AuthLayout
      bgImage={signupBg}
      heading={
        <>
          Start Your <span className="text-[#34D399]">Exploration</span>
        </>
      }
      description="Create an account and begin mapping mineral intelligence."
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
