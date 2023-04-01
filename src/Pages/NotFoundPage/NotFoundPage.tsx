import { Result } from 'antd'
import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h3, p {
        color: var(--bodyColor);
    }
`
function NotFoundPage() {
    const navigate = useNavigate();
  return (
    <ContainerStyled>
        <Result status="404" />
        <h3>404</h3>
        <p>Sorry, the page you visited does not exist.</p>
        <Button type="small" content="Back Home" onClick={() => navigate('/')} />
    </ContainerStyled>
  )
}

export default NotFoundPage