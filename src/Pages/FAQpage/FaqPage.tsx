import React, { useState } from 'react'
import styled from 'styled-components'
import FormSignup from '../../components/FormSignUp'
import CustomSelect from '../../components/Select'
import Topic from './components/Topic'

const topic = [
    {
      id: 1,
      name: 'General',
      questionsAndAnwsers: [
        {
            id: 1,
            question: "1. How do I place an order on your website?",
            anwser: 'All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.'
        },
        {
            id: 2,
            question: "2. What is your return policy?",
            anwser: ''
        },
        {
            id: 3,
            question: "3. Do you offer an option to send a product as a gift?",
            anwser: ''
        }
      ]
    },
    {
      id: 2,
      name: 'Checkout',
      questionsAndAnwsers: [
        {
            id: 1,
            question: "1. What payment methods do you accept?",
            anwser: ''
        },
        {
            id: 2,
            question: "2. Do you offer an option to pay for the product over time?",
            anwser: 'Yes, we do. We have partnered with a few companies that offer such option.'
        }
      ]
    },
    {
      id: 3,
      name: 'Shipping',
      questionsAndAnwsers: [
        {
            id: 1,
            question: "1. Do I have to pay for the shipping?",
            anwser: 'All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.'
        },
        {
            id: 2,
            question: "2. How long does it take for you to dispatch my order?",
            anwser: ''
        },
        {
            id: 3,
            question: "3. What shipping company do you use?",
            anwser: ''
        },
        {
            id: 4,
            question: "4. How long does it usually take for my order to arrive?",
            anwser: ''
        }
      ]
    },
    {
      id: 4,
      name: 'Discounts',
      questionsAndAnwsers: [
        {
            id: 1,
            question: "1. Do you offer any discounts on your website?",
            anwser: ''
        }
      ]
    },
    {
      id: 5,
      name: 'Other',
      questionsAndAnwsers: [
        {
            id: 1,
            question: "1. Where can I find the reviews?",
            anwser: 'Please visit our reviews page to find out more about that.'
        },
        {
            id: 2,
            question: "2. How do I contact you?",
            anwser: 'Yes, we do. We have partnered with a few companies that offer such option.'
        }
      ]
    }
]

const ContainerStyled = styled.div`
    &>div {
        margin-top: 40px;
        &>p {
            color: var(--blue);
            font-style: italic;
        }
    }
    & .selectTopic {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 40px 0;
        & select {
            margin: 15px;
            padding: 8px;
            border-radius: 19px;
            border: 1px solid rgb(224, 223, 223);
        }
    }
`



function FAQPage() {
    const [ valueSelectTopic, setValueSelectTopic ] = useState('Topic')
    const [ valueSelectCategories, setValueSelectCategories ] = useState('Category')
    const [ valueSelectSortBy, setValueSelectSortBy ] = useState('Sort By')

    const selectTopic = {
        items: ['General', 'Checkout', 'Discounts', 'Other'],
        onChange: (value: string) => {
            setValueSelectTopic(value)
        }
    }
    const selectCategories = {
        items: ['General', 'Checkout', 'Discounts', 'Other'],
        onChange: (value: string) => {
            setValueSelectCategories(value)
        }
    }
    const selectSortBy = {
        items: ['General', 'Checkout', 'Discounts', 'Other'],
        onChange: (value: string) => {
            setValueSelectSortBy(value)
        }
    }
  return (
    <ContainerStyled>
        <div>
          <p>- Find the Answers</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className='selectTopic'>
            <div>
                <CustomSelect 
                    items={selectTopic.items}
                    value={valueSelectTopic}
                    onChange={selectTopic.onChange}
                />
              <CustomSelect 
                    items={selectCategories.items}
                    value={valueSelectCategories}
                    onChange={selectCategories.onChange}
                />
            </div>
            <div>
                <CustomSelect 
                    items={selectSortBy.items}
                    value={valueSelectSortBy}
                    onChange={selectSortBy.onChange}
                />
            </div>
        </div>
        {topic.map(item => {
            return <Topic 
                      key={item.id} 
                      nameTopic={item.name} 
                      questionList={item.questionsAndAnwsers}
                    />
        })}
        
      <FormSignup />
    </ContainerStyled>
  )
}

export default FAQPage