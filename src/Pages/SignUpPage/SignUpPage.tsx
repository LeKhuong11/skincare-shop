import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TitleSection from "../../components/TitleSection";

const ContainerStyled = styled.div`
    & .form-register {
        padding: 0 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        @media only screen and (max-width: 1024px) {
            padding: 0 15%;
            & .form {
              flex-direction: column;
  
            }
        }

        @media only screen and (max-width: 768px) {
            padding: 0;

            .login-btn {
            }
        }

        & .form {
          display: flex;
          justify-content: space-around;

          & p {
            margin-bottom: 5px;
            color: var(--bodyColor);
          }
        }

        .login-btn {
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
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
    userName: '',
    displayname: '',
    birthDay: '',
    avatar: null
  });

  const handleClickUserRegister = async (e: any) => {
    e.preventDefault();
    
    await axios.post("https://backend-skincare-shop.vercel.app/auth/register", userRegister)
      .then((res) => {
        message.success('Register susscessfully!')
        navigate('../login')
      })
      .catch((err) => {
        console.log(err);
        message.warning('Register fail!')
      })
  }

  const handleChangeSetValueRegister = (e: any) => {
    setUserRegister({
      ...userRegister,
      [e.name]: e.value,
    });
  };

  
  return (
    <ContainerStyled>
      <TitleSection title="Create Account" subTitle="Sign Up" />

      <form className="form-register">
        <div className="form">
          <div>
            <div className="input">
                <p>Username</p> 
                <Input 
                  type="text" 
                  name="userName"
                  setValue={handleChangeSetValueRegister}
                />
            </div>
            <div className="input">
                <p>Email Address</p>
                <Input 
                  type="text" 
                  name="email"
                  setValue={handleChangeSetValueRegister}
                />
            </div>
            <div className="input">
                <p>Password</p>
                <Input 
                  type="password" 
                  name="password"
                  setValue={handleChangeSetValueRegister}
                />
            </div>
          </div>
          <div>
            <div className="input">
                <p>Full Name</p>
                <Input 
                  type="text" 
                  name="displayName"
                  setValue={handleChangeSetValueRegister}
                />
            </div>
            <div className="input">
                <p>Birthday</p>
                <Input 
                  type="date" 
                  name="birthDay"
                  setValue={handleChangeSetValueRegister}
                />
            </div>
          </div>
        </div>
        

        <div className="login-btn">
          <Button type="medium" content="Create Account" onClick={handleClickUserRegister} />
          <Link to="/login"><Button type="transparent" content="Login" /></Link>
        </div>
      </form>
    </ContainerStyled>
  );
}
