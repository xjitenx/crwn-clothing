import Button from "../../components/button/button.component.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        SIGN IN WITH GOOGLE
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
