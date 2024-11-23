import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) return null;

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  return (
    <Button
      variant="secondary"
      className="w-full text-white border-zinc-200 h-11"
      onClick={signInWithGoogle}
    >
      <img src="/google.svg" alt="Google Logo" className="w-5 h-5" />
      Continue with Google
    </Button>
  );
};

export default SignInAuthButton;
