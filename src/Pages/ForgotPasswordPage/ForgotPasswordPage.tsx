import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../components/Input'
import Button from '../../components/Button';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import TitleSection from '../../components/TitleSection';


const ContainerStyled = styled.div`

    & .main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & form {
            & input {
                margin: 20px 0;
            }
            & .button {
                display: flex;
                margin-right: 10px;
            }
        }
    }
`

function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');

     //Forgot password 
    const handleClickForgotPassword = async (e: any) => {
        e.preventDefault();
        const data = {
            email: email
        }
        
        await axios.post('https://backend-skincare-shop.vercel.app/forgot-password/send-mail', data)
        .then(res => {
            message.success(res.data.message)
            navigate('/login')
        })
        .catch(err => {
            message.warning(err.response.data.message)
        })
    }
  return (
    <ContainerStyled>
        <div>
            <TitleSection title='Fotgot password' subTitle='Send with email' />
        </div>
        <div className='main'>
            <form>
                <p>Your Email Address</p>
                <Input type='email' placehoder='Enter your email...' setValue={(e: any) => setEmail(e.value)} />
                <div className='button'>
                    <Button type='medium' content='Submit Email' onClick={handleClickForgotPassword} />
                    <Button type='transparent' content='Go Back' onClick={() => navigate('../login')} />
                </div>
            </form>
        </div>
    </ContainerStyled>
  )
}

export default ForgotPasswordPage