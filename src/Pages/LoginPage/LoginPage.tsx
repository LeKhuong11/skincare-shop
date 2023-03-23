import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TitleSection from "../../components/TitleSection";

const ContainerStyled = styled.div`

  form {
    padding: 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    & input {
      margin-top: 10px;
    }
    @media only screen and (max-width: 1024px) {
      padding: 0 15%;
    }

    @media only screen and (max-width: 768px) {
      padding: 0;
    }

    .createAccount {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      a {
        width: 50%;

        &:nth-child(1) {
          text-decoration: none;
        }

        &:nth-child(2) {
          font-size: 20px;
          line-height: 24px;
          font-weight: 400;

          color: var(--black);
        }
      }
    }
  }
`

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(user)

  return (
    <ContainerStyled>
      <TitleSection title="Login to Your Account" subTitle="Login" />
      <form>
        <div>
          <label htmlFor="">Email Address</label> <br />
          <Input type="text" placehoder="Enter your email" />
        </div>
        <div>
          <label htmlFor="">Password</label><br />
          <Input type="text" placehoder="Enter your password" />
        </div>
        <Button type="large" content="Login" />

        <div className="createAccount">
          <Link to="../sign-up">
            <Button type="transparent" content="Create Account" />
          </Link>

          <Link to="">Forgot Password?</Link>
        </div>
      </form>
    </ContainerStyled>
  );
}
