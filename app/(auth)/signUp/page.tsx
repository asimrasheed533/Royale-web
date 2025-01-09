"use client";
import "@/style/signin.scss";

import { useRouter } from "next/navigation";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader";
import loginImg from "@/public/loginImg.png";
import { toast } from "react-toastify";
import Image from "next/image";
import usePostAction from "@/hooks/usePostAction";
import { register } from "@/actions/action";
import Input from "@/components/Input";
export default function SignUp() {
  const router = useRouter();
  const { action, isPending, data } = usePostAction({
    action: register,
    defaultState: {
      nameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null,
    },
    onError() {
      toast.error("Account creation failed");
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      router.push("/signIn");
    },
  });

  return (
    <>
      <div className="create__container">
        <div className="create__container__img">
          <Image
            width={1000}
            height={100}
            className="create__container__img__image"
            src={loginImg}
            alt="fast food"
          />
        </div>
        <form action={action} className="create__container__from__warper">
          <div className="create__container__from__heading">Welcome Back!</div>
          <div className="create__container__from__sub__heading">
            Already have an account?
            <span>
              <Link href="/signIn" className="create__container__link">
                Sign In
              </Link>
            </span>
          </div>
          <div className="input__row__login">
            <Input
              label="Full Name"
              type="text"
              name="name"
              // error={data.nameError}
            />
          </div>
          <div className="input__row__login">
            <Input
              label="Email"
              type="text"
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
          <div className="input__row__login">
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              // error={data.confirmPasswordError}
            />
          </div>
          <div className="signin__submit__btn">
            <button type="submit" className="forgot__account__button">
              {isPending ? (
                <MoonLoader color="#ffffff" size={20} />
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
