import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import FormSignup from '../../components/FormSignUp'
import Input from '../../components/Input'
import TitleSection from '../../components/TitleSection'

const ContainerStyled = styled.div`

    & .contact-title {
        display: grid;
        grid-template-columns: 50% 50%;
        &>div {
            width: 100%;
            &>div {
                padding: 15px;
                width: 80%;
                margin: 25px 0;
                & strong {
                    font-weight: var(--fontWeightSemibold);
                }
                & h4 {
                    margin-bottom: 10px;
                }
            }
        }
    }

    & .contact-form {
        display: grid;
        grid-template-columns: 50% 50%;
        margin-top: 50px;

        &>div {
            width: 50%;
            
            & form {
                
                &>div {
                    margin: 30px 0;

                    & input {
                        margin-top: 10px;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        & .contact-title {
            grid-template-columns: 1fr;
        }
        & .contact-form {
            grid-template-columns: 1fr;
            &>div {
                width: 100%;
            }
        }
    }
`

function ContactPage() {
  return (
    <ContainerStyled>
        <TitleSection title='We are always here to help you' subTitle='Ask Questions' />
        <div className='contact-title'>
            <div>
                <div>
                    <h4>Customer Service</h4>
                    <p>Please send us an email at <strong>customercare@hygge.com</strong></p>
                </div>
                <div>
                    <h4>Large Orders</h4>
                    <p>If you are thinking of making a very large order, please feel free to contact us at <strong>sales@hygge.com</strong> and we will give you a special discount</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>Public Relations</h4>
                    <p>You can contact our media team by sending an email <strong>media@hygge.com</strong></p>
                </div>
                <div>
                    <h4>Other Enquiries</h4>
                    <p>For all of your other questions, please send us an email at <strong>general@hygge.com</strong></p>
                </div>
            </div>
        </div>
        <div className='contact-form'>
            <div>
                <TitleSection title='Please fill out the contact form' subTitle='Reach Out to Us' />
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="">Full Name</label> <br />
                        <Input type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label> <br />
                        <Input type='email  ' />
                    </div>
                    <div>
                        <label htmlFor="">Subject</label><br />
                        <Input type='text' placehoder='Enter Your Subject' />
                    </div>
                    <div>
                        <label htmlFor="">Message</label><br />
                        <Input type='text' />
                    </div>

                    <Button type="medium" content='Send'/>
                </form>
            </div>
        </div>
        <FormSignup />
    </ContainerStyled>
  )
}

export default ContactPage