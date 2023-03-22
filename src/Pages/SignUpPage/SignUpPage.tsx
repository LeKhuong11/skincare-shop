import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import TitleSection from "../../components/TitleSection";

const ContainerStyled = styled.div`
    form {
        padding: 0 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        @media only screen and (max-width: 1024px) {
            padding: 0 15%;
        }

        @media only screen and (max-width: 768px) {
            padding: 0;
        }

        .login {
            display: flex;

            gap: 20px;

            a {
                width: 50%;
                text-decoration: none;
            }

            @media only screen and (max-width: 375px) {
                flex-direction: column;

                a {
                    width: 100%;
                }
            }
        }
    }
`

export default function SignUppage() {
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
      <TitleSection title="Create Account" subTitle="Sign Up" />

      <form>
        <div>
            <label htmlFor="">Email Address</label> <br />
            <Input type="text" />
        </div>
        <div>
            <label htmlFor="">Email Address</label> <br />
            <Input type="text" />
        </div>

        <div className="login">
          <Button type="medium" content="Create Account" />
          <Link to="/login"><Button type="transparent" content="Login" /></Link>
        </div>
      </form>
    </ContainerStyled>
  );
}
