import styled from 'styled-components'
import QuestionAndAnwser from './QuestionAndAnwser'
import root from './QuestionAndAnwser.module.scss'

interface ITopic {
    nameTopic: string,
    questionList: any
}
const ContainerStyled = styled.div`
    margin-top: 10rem;
    & h3 {
      color: var(--bodyColor);
      height: 33px;
    }
    & .questions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
        &>div {
            margin-top: 2.5rem;
        }
    }
`
function Topic({nameTopic, questionList}: ITopic) {
    
  return (
    <ContainerStyled>
          <h3>{nameTopic}</h3>
          <div className='questions'>
            {questionList.map((item: any) => {
                return <QuestionAndAnwser 
                            key={item.id}
                            question={item.question}
                            anwser={item.anwser}
                        />
            })}
          </div>
        </ContainerStyled>
  )
}

export default Topic