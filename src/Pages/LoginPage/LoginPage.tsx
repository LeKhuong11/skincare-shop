import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TitleSection from "../../components/TitleSection";
import { addUser } from "../../redux/slice/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const ContainerStyled = styled.div`

  form {
    padding: 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    & label {
      color: var(--bodyColor);
    }
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
          color: var(--bodyColor);
        }
      }
    }
  }
`

interface User {
  username: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user)
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if(user) navigate('../dashboard')
  }, [])

  const handleChangeSetLogin = (e: any) => {
    const name = e.name;
    const value = e.value;

    setLogin({
      ...login,
      [name]: value,
    });
  }

  const handleClickLogin = async (e: any) => {
    e.preventDefault();
    try {
      const {data, status} = await axios.post<User>('https://backend-skincare-shop.vercel.app/auth/login',
        {
          userName: login.username,
          password: login.password
        }
      );
      if(status === 200){
        dispatch(addUser(data))
        navigate('../')
        message.success("Logined susscessfully!")
        return
      } 
      message.warning("Login fail!")
      

    } catch(err) {
      message.warning("Login fail!")
    }
  }

  //Forgot password 
  const handleClickForgotPassword = async (e: any) => {
    e.preventDefault();
    const data = {
      email: '11lekhuong@gmail.com'
    }
    await axios.post('http://localhost:3000/forgot-password/send-mail', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
        
      })
  }


  return (
    <ContainerStyled>
      <TitleSection title="Login to Your Account" subTitle="Login" />
      <form>
        <div>
          <label htmlFor="">Email Address</label> <br />
          <Input 
            type="text" 
            placehoder="Enter your username" 
            setValue={handleChangeSetLogin}
            name="username"
          />
        </div>
        <div>
          <label htmlFor="">Password</label><br />
          <Input 
            type="password" 
            placehoder="Enter your password" 
            setValue={handleChangeSetLogin}
            name="password"
          />
        </div>
        <Button 
          type="large" 
          content="Login" 
          onClick={handleClickLogin}
        />

        <div className="createAccount">
          <Link to="../sign-up">
            <Button 
              type="transparent" 
              content="Create Account" 
            />
          </Link>

          <Button type="transparent" content="Forgot Password?" onClick={handleClickForgotPassword}></Button>
        </div>
      </form>
    </ContainerStyled>
  );
}
