"use client";
import { useRouter } from "next/navigation";
import "@/style/signin.scss";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader";
import banner from "@/public/banner_1.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const result = await axios.post("/api/login", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error || "Failed to sign in");
      } else {
        toast.success("Signed in successfully!");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error("An error occurred", error);
      toast.error("Failed to sign in");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="create__container">
      <div className="create__container__img">
        <Image
          className="create__container__img__image"
          src={banner}
          alt="fast food"
        />
      </div>
      <form onSubmit={handleSubmit} className="create__container__from__warper">
        <div className="create__container__from__heading">Welcome Back!</div>
        <div className="create__container__from__sub__heading">
          Don't have an account?{" "}
          <span>
            <Link href="/signUp" className="create__container__link">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="create__account__input">
          <div className="create__account__input_svg">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.5C15 0.675 14.325 0 13.5 0H1.5C0.675 0 0 0.675 0 1.5V10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5ZM13.5 1.5L7.5 5.25L1.5 1.5H13.5ZM13.5 10.5H1.5V3L7.5 6.75L13.5 3V10.5Z"
                fill="#AAAAAA"
              />
            </svg>
          </div>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmailError(!e.target.value ? "Enter the email" : "");
              setEmail(e.target.value);
            }}
            className="create__account__input__entry"
            type="email"
          />
          {emailError && <div className="error__input">{emailError}</div>}
          <div className="create__account__input__label">Email</div>
        </div>
        <div className="create__account__input">
          <div className="create__account__input_svg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10.7996C1 8.82001 1 7.82951 1.6153 7.21491C2.2299 6.59961 3.2204 6.59961 5.2 6.59961H10.8C12.7796 6.59961 13.7701 6.59961 14.3847 7.21491C15 7.82951 15 8.82001 15 10.7996C15 12.7792 15 13.7697 14.3847 14.3843C13.7701 14.9996 12.7796 14.9996 10.8 14.9996H5.2C3.2204 14.9996 2.2299 14.9996 1.6153 14.3843C1 13.7697 1 12.7792 1 10.7996Z"
                stroke="#AAAAAA"
                strokeWidth="1.05"
              />
              <path
                d="M3.80078 6.6V5.2C3.80078 4.08609 4.24328 3.0178 5.03093 2.23015C5.81859 1.4425 6.88687 1 8.00078 1C9.11469 1 10.183 1.4425 10.9706 2.23015C11.7583 3.0178 12.2008 4.08609 12.2008 5.2V6.6"
                stroke="#AAAAAA"
                strokeWidth="1.05"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            required
            value={password}
            onChange={(e) => {
              setPasswordError(!e.target.value ? "Enter the password" : "");
              setPassword(e.target.value);
            }}
            className="create__account__input__entry"
            type="password"
          />
          {passwordError && <div className="error__input">{passwordError}</div>}
          <div className="create__account__input__label">Password</div>
        </div>

        <Link href="/forgot" className="forgot__password">
          Forgot Password?
        </Link>
        <div className="signin__submit__btn">
          <button
            type="submit"
            disabled={processing}
            className="forgot__account__button"
          >
            {processing ? <MoonLoader color="#fff" size={16} /> : "Sign In"}
          </button>
        </div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </form>
    </div>
  );
}
