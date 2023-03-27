import { Avatar, Button as ButtonAntd, Upload, UploadFile } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TitleSection from '../../components/TitleSection'
import { UploadOutlined } from '@ant-design/icons';
import Button from '../../components/Button';


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

function DashboardPage() {

    const fileList: UploadFile[] = [
       
        {
          uid: '-1',
          name: 'yyy.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ];

  return (
    <ContainerStyled>
        <div>
            <TitleSection subTitle='Infor User' title='View and Edit Infor User' />
        </div>
        <div className='dashboard-body'>
            <div className='avatar-user'>
                <div className='avatar'>
                    <Avatar size={140}>T</Avatar>
                </div>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    defaultFileList={[...fileList]}
                    className="upload-list-inline"
                >
                    <ButtonAntd icon={<UploadOutlined />}>Upload</ButtonAntd>
                </Upload>
            </div>
            <div className='infor-user'>
                <div>
                    <h5>Email: </h5>
                    <p>11lekhuong@gmail.com</p>
                </div>
                <div>
                    <h5>Display Name: </h5>
                    <p>Le Duy Khuong</p>
                </div>
                <div>
                    <h5>Birth Day: </h5>
                    <p>11/02/2001</p>
                </div>
                <div>
                    <h5>Number Phone: </h5>
                    <p>+84 123 456 7890</p>
                </div>
                <div>
                    <h5>UserName: </h5>
                    <p>khuongkk123</p>
                </div>
                <div>
                    <h5>Role: </h5>
                    <p>User</p>
                </div>
                <div>
                    <Button type='small' content='Edit Information' />
                    <Button type='small' content='Change password' />
                    <Button type='small' content='Add products' />
                </div>
            </div>
        </div>
    </ContainerStyled>
  )
}

export default DashboardPage