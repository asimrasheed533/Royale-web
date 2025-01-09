"use client";
import { useRouter } from "next/navigation";
import "@/style/signin.scss";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader";
import loginImg from "@/public/loginImg.png";
import { toast } from "react-toastify";
import Image from "next/image";
import Input from "@/components/Input";
import usePostAction from "@/hooks/usePostAction";
import { loginWithGoogle, signIn } from "@/action";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const router = useRouter();
  const { action, isPending, data } = usePostAction({
    action: signIn,
    defaultState: {
      emailError: null,
      passwordError: null,
    },
    onError() {
      toast.error("Account creation failed");
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/");
    },
  });

  const {
    actionCallback,
    isPending: registerWithGooglePending,
    data: googleError,
  } = usePostAction({
    action: loginWithGoogle,
    defaultState: {
      emailError: null,
      passwordError: null,
    },
    onError() {
      toast.error("Account creation failed");
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/");
    },
  });

  return (
    <div className="create__container">
      <div className="create__container__img">
        <Image
          className="create__container__img__image"
          src={loginImg}
          alt="fast food"
        />
      </div>
      <form action={action} className="create__container__from__warper">
        <div className="create__container__from__heading">Welcome Back!</div>
        <div className="create__container__from__sub__heading">
          Don't have an account?{" "}
          <span>
            <Link href="/signUp" className="create__container__link">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="input__row__login">
          <Input
            label="Email"
            type="email"
            name="email"
            // error={data.emailError}
          />
        </div>
        <div className="input__row__login">
          <Input
            label="Password"
            type="password"
            name="password"
            // error={data.passwordError}
          />
        </div>

        <Link href="/forgot" className="forgot__password">
          Forgot Password?
        </Link>
        <div
          style={{
            marginBottom: "20px",
          }}
          className="signin__submit__btn"
        >
          <button
            disabled={isPending}
            type="submit"
            className="forgot__account__button"
          >
            {isPending ? <MoonLoader color="#fff" size={16} /> : "Sign In"}
          </button>
        </div>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            if (credentialResponse.credential) {
              await actionCallback(credentialResponse.credential);
            }
          }}
          onError={() => alert("Login Failed")}
          shape="pill"
        />
        {googleError.error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
            }}
          >
            {googleError.error}
          </p>
        )}
      </form>
    </div>
  );
}
