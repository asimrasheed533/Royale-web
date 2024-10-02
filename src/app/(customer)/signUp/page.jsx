"use client";
import { useRouter } from "next/navigation";
import "@/style/signin.scss";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader";
// import axios from "@/utils/axios";
import banner from "@/public/banner_1.jpg";
import { toast } from "react-toastify";
import { useState } from "react";
import Image from "next/image";
// import useUser from "@/hooks/useUser";

export default function signIn() {
  const router = useRouter();

  //   const [_, setUser, isLoggedIn] = useUser();

  //   const from = new URLSearchParams(window.location.search).get("from");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      if (!name) {
        setNameError("Enter name");
      }
      if (!email) {
        setEmailError("Enter email");
      }
      if (!password) {
        setPasswordError("Enter password");
      }
      if (!confirmPassword) {
        setConfirmPasswordError("Enter confirm password");
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError("Password not match");
      }
      if (name && email && email.includes("@") && password && confirmPassword) {
        const res = await axios.post("/customers/register", {
          name,
          email,
          password,
        });

        if (res.data.error) {
          toast.error(res.data.error);
          return;
        }

        toast.success("Account created successfully");

        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        navigate("/signin?from=createaccount", {
          replace: true,
        });
      }
    } catch (err) {
      toast.error(err.response.data.error);
    } finally {
      setProcessing(false);
    }
  };
  return (
    <>
      <div className="create__container">
        <div className="create__container__img">
          <Image
            className="create__container__img__image"
            src={banner}
            alt="fast food"
          />
        </div>
        <form
          //   onSubmit={handleLogin}
          className="create__container__from__warper"
        >
          <div className="create__container__from__heading">
            {/* {from === "createaccount" ? "Sign In" : "Welcome Back!"}*/}
            Welcome Back!
          </div>
          <div className="create__container__from__sub__heading">
            Already have an account?
            <span>
              <Link href="/signIn" className="create__container__link">
                Sign In
              </Link>
            </span>
          </div>
          <div className="create__account__input">
            <div className="create__account__input_svg">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 15.9993V15.166C1 12.4046 3.23857 10.166 6 10.166H9.33333C12.0947 10.166 14.3333 12.4046 14.3333 15.166V15.9993"
                  stroke="#AAAAAA"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
                <path
                  d="M7.66536 7.66667C5.82441 7.66667 4.33203 6.17428 4.33203 4.33333C4.33203 2.49238 5.82441 1 7.66536 1C9.50628 1 10.9987 2.49238 10.9987 4.33333C10.9987 6.17428 9.50628 7.66667 7.66536 7.66667Z"
                  stroke="#AAAAAA"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              required
              maxLength={50}
              value={name}
              onChange={(e) => {
                if (!e.target.value) {
                  setNameError("Enter the name");
                } else {
                  setNameError("");
                }
                setName(e.target.value);
              }}
              className="create__account__input__entry"
              type="text"
            />
            {nameError !== "" ? (
              <div className="error__input">{nameError}</div>
            ) : null}
            <div className="create__account__input__label">Full Name</div>
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
                if (!e.target.value) {
                  setEmailError("Enter the email");
                } else {
                  setEmailError("");
                }
                setEmail(e.target.value);
              }}
              className="create__account__input__entry"
              type="text"
            />
            {emailError !== "" ? (
              <div className="error__input">{emailError}</div>
            ) : null}
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
                <path
                  d="M5.19922 10.8008H5.20552M7.99292 10.8008H7.99922M10.7929 10.8008H10.7992"
                  stroke="#AAAAAA"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              required
              value={password}
              onChange={(e) => {
                if (!e.target.value) {
                  setPasswordError("Enter the password");
                } else {
                  setPasswordError("");
                }
                setPassword(e.target.value);
              }}
              className="create__account__input__entry"
              type="password"
            />
            {passwordError !== "" ? (
              <div className="error__input">{passwordError}</div>
            ) : null}
            <div className="create__account__input__label">Password</div>
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
                <path
                  d="M5.19922 10.8008H5.20552M7.99292 10.8008H7.99922M10.7929 10.8008H10.7992"
                  stroke="#AAAAAA"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              required
              value={confirmPassword}
              onChange={(e) => {
                if (!e.target.value) {
                  setConfirmPasswordError("Enter the password");
                } else {
                  setConfirmPasswordError("");
                }
                setConfirmPassword(e.target.value);
              }}
              className="create__account__input__entry"
              type="password"
            />
            {confirmPasswordError !== "" ? (
              <div className="error__input">{confirmPasswordError}</div>
            ) : null}
            <div className="create__account__input__label">
              Confirm Password
            </div>
          </div>

          <div className="signin__submit__btn">
            <button
              type="submit"
              disabled={processing}
              className="forgot__account__button"
            >
              {processing ? <MoonLoader color="#fff" size={16} /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
