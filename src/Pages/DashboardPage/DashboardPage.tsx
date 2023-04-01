import React, { useState } from 'react'
import { Avatar, Button as ButtonAntd, message, Modal, Upload, UploadProps } from 'antd'
import styled from 'styled-components'
import TitleSection from '../../components/TitleSection'
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteUser, updateAvatarUser } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';


const ContainerStyled = styled.div`

    & .dashboard-body {
        display: flex;
        justify-content: center;
        & .avatar-user {
            width: 30%;
            text-align: center;

            & .avatar {
                margin-bottom: 15px;
            }
        }

        & .infor-user {
            width: 50%;
            
            &>div {
                display: flex;
                align-items: center;
                margin: 8px;
                & h5 {
                    margin-right: 35px;
                    min-width: 130px;
                    color: var(--bodyColor);
                }
                & p {
                    color: var(--bodyColor);
                }
            }
        }
    }
    
    & .input {
        margin: 15px 0;
    }
`

function DashboardPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.user)
    const [ userChangePassword, setUserChangePassword ] = useState({
        password: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [ openModalChangePassword, setOpenModalChangePassword ] = useState(false);
    

    const handleClickLogout = () => {
        dispatch(deleteUser())
        navigate('../login')
    }
    const handleClickChangePassword = () => {
        setOpenModalChangePassword(true)
    }
    const handleChangeSetValueChangePassword = (e: any) => {
        const name = e.name;
        const value = e.value

        setUserChangePassword({
            ...userChangePassword,
            [name]: value,
          });
    }

    //Update password
    const handleOkModalChangePassword = async () => {
        const dataUpdatePassword = {
            userName: user.userName,
            password: userChangePassword.password,
            newPassword: userChangePassword.newPassword,
            confirmPassword: userChangePassword.confirmPassword
        }
        await axios.put(`https://backend-skincare-shop.vercel.app/auth/change-password-user/${user._id}`, dataUpdatePassword) 
            .then(res => {
                setOpenModalChangePassword(false)
                
                message.success(res.data.message)
            })
            .catch(err => {
                setOpenModalChangePassword(true)
                message.warning(err.response.data.message)
            })
    };

    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        async onChange(info) {
          if (info.file.status === 'done') {
            const file: any = info.file.originFileObj
            const formData = new FormData();
            formData.append("avatar", file)
        
            //Call api to change avatar
            await axios.post(`https://backend-skincare-shop.vercel.app/auth/change-avatar/${user._id}`, formData)
                .then(res => {
                    dispatch(updateAvatarUser(res.data))
                    message.success("Change avatar susscessfully!")
                })
                .catch(err => {
                    message.warning("Change avatar fail!")
                })
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

  return (
    <ContainerStyled>
        <div>
            <TitleSection subTitle='Infor User' title='View and Edit Infor User' />
        </div>
        <div className='dashboard-body'>
            <div className='avatar-user'>
                <div className='avatar'>
                    <Avatar 
                        src={user?.avatar} 
                        size={160}
                        style={{fontSize: 35}}
                    >{user?.avatar ?? user?.displayName.charAt(0).toUpperCase()}</Avatar>
                </div>
                <div className='upload'>
                    <Upload {...props}>
                        <ButtonAntd icon={<UploadOutlined />}>Click to Upload</ButtonAntd>
                    </Upload>
                </div>
            </div>
            <div className='infor-user'>
                <div>
                    <h5>Email: </h5>
                    <p>{user?.email}</p>
                </div>
                <div>
                    <h5>Display Name: </h5>
                    <p>{user?.displayName}</p>
                </div>
                <div>
                    <h5>Birth Day: </h5>
                    <p>{user?.birthDay}</p>
                </div>
                <div>
                    <h5>UserName: </h5>
                    <p>{user?.userName}</p>
                </div>
                <div>
                    <h5>Role: </h5>
                    <p>{user?.isAdmin ? 'Admin' : 'User'}</p>
                </div>
                <div>
                    <Button type='small' content='Edit Information' />
                    <Button type='small' content='Change password' onClick={handleClickChangePassword} />
                    <Button 
                        type='small' 
                        content='Logout' 
                        onClick={handleClickLogout}
                    />
                </div>
            </div>
        </div>
        <Modal
            title="Title"
            open={openModalChangePassword}
            onOk={handleOkModalChangePassword}
            onCancel={() => setOpenModalChangePassword(false)}
        >
            <div className="input">
                <label htmlFor="">Password</label> <br />
                <Input 
                  type="password" 
                  name="password"
                  setValue={handleChangeSetValueChangePassword}
                />
            </div>
            <div className="input">
                <label htmlFor="">New Password</label> <br />
                <Input 
                  type="password" 
                  name="newPassword"
                  setValue={handleChangeSetValueChangePassword}
                />
            </div>
            <div className="input">
                <label htmlFor="">Confirm Password</label> <br />
                <Input 
                  type="password" 
                  name="confirmPassword"
                  setValue={handleChangeSetValueChangePassword}
                />
            </div>
        </Modal>
    </ContainerStyled>
  )
}

export default DashboardPage