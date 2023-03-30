import React, { useState } from 'react';
import { Button, message, Steps as StepAntd } from 'antd';
import StepDetails from './StepDetails';
import StepShipping from './StepShipping';
import StepBilling from './StepBilling';
import StepPayment from './StepPayments';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const ContainerStyled = styled.div`
    &&& {
        .ant-steps {
            margin-bottom: 30px !important;
        }
        .ant-steps .ant-steps-item{
            padding-inline-start: 12px !important;
        }
        .ant-steps .ant-steps-item:first-child:first-child {
            padding-inline-start: 0 !important;
        }
        .ant-steps-item-container .ant-steps-item-icon {
            margin-right: 0 !important;
        }
        .ant-steps-item-process .ant-steps-item-icon {
            background: var(--green) !important;
            border: none !important;
            margin: 0 !important;
        }
        
        .steps-content {
            margin-bottom: 15px !important;
        }
        
        
        .ant-steps .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: rgba(5, 5, 5, 0.06) !important;
        }
        .ant-steps .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
            background-color: rgba(5, 5, 5, 0.06) !important;
        }
        
        .ant-steps-item-content .ant-steps-item-title {
        
            &::after {
                background: var(--green) !important;
            }
        }
        
        .ant-steps .ant-steps-item-finish .ant-steps-item-icon {
            background: var(--greenLight) !important;
            & .ant-steps-icon {
                color: var(--green);
            }
        }
        
        .steps-action .ant-btn-primary {
            background-color: var(--green);
            width: 85px;
            height: 40px;
            border-radius: 20px;
        }
        .steps-action .ant-btn-default {
            width: 95px;
            height: 40px;
            border-radius: 20px;
        }
        
        @media only screen and (max-width: 768px) {
            
        }
        @media only screen and (max-width: 660px) {
            .ant-steps .ant-steps-item{
                padding-inline-start: 0 !important;
            }
        }
        @media only screen and (max-width: 575px) {
            .ant-steps {
                width: 50px;
                height: 280px;
            }
            .steps-content-action {
                width: 100%;
            }
        }
        @media only screen and (max-width: 450px) {
           
        }
    }
`

function Steps() {
    const navigate = useNavigate();
    const steps: any[] = [
        {
          content: <StepDetails />,
        },
        {
          content: <StepShipping />,
        },
        {
          content: <StepBilling />,
        },
        {
          content: <StepPayment />,
        },    
      ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const handleClickOder = () => {
    navigate('../products')
    message.success('Processing complete!')
  }

  return (
    <ContainerStyled>
      <StepAntd current={current} items={items} />
        <div className='steps-content-action'>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
            {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                Next
                </Button>
            )}
            {current === steps.length - 1 && (
                <Button type="primary" onClick={() => handleClickOder()}>
                Done
                </Button>
            )}
            {current > 0 && (
                <Button
                style={{
                    margin: '0 8px',
                }}
                onClick={() => prev()}
                >
                Previous
                </Button>
            )}
            </div>
        </div>
    </ContainerStyled>
  )
}

export default Steps