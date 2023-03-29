import React from 'react'
import { Avatar, Button as ButtonAntd, Form, message, Upload, UploadFile, UploadProps } from 'antd'
import styled from 'styled-components'
import TitleSection from '../../components/TitleSection'
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { deleteUser } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
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
                }
            }
        }
    }
`

const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

function DashboardPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.user)
    const props: UploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        async onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.fileList[0]);
            }
            if (info.file.status === 'done') {
                console.log(info.fileList[0]);
                
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
                console.log(info.file, info.fileList);
            }
        },
      };

    const handleClickLogout = () => {
        dispatch(deleteUser())
        navigate('../login')
    }

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
                        size={140}
                        style={{background: 'orange', fontSize: 35}}
                    >{user?.avatar ?? user?.displayName.charAt(0).toUpperCase()}</Avatar>
                </div>
                <Form>
                    <Upload {...props}>
                        <ButtonAntd icon={<UploadOutlined />}>Click to Upload</ButtonAntd>
                    </Upload>
                </Form>
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
                    <Button type='small' content='Change password' />
                    <Button 
                        type='small' 
                        content='Logout' 
                        onClick={handleClickLogout}
                    />
                </div>
            </div>
        </div>
    </ContainerStyled>
  )
}

export default DashboardPage