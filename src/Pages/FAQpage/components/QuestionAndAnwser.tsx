import { Collapse } from 'antd';
const { Panel } = Collapse;

interface IQuestionAndAnwser {
    question: string,
    anwser: string
}

function QuestionAndAnwser({question, anwser}: IQuestionAndAnwser) {
    
  const styleCssQuestions = {
    fontSize: 20, 
    fontWeight: 550, 
    fontFamily: "Montserrat", 
    color: '#1A202C' 
  }
  const styleCssAnwser = {
    lineHeight: 1.8,
    fontWeight: 400,
    fontSize: 16,
    width: '100%'
  }
  const text = `All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to cart and pay for it using any of the supported payment methods.`;

  return (
    <Collapse defaultActiveKey={['1']} ghost>
    <Panel style={styleCssQuestions} header={question} key="1">
      <p style={styleCssAnwser}>{anwser ? anwser : text}</p>
    </Panel>
  </Collapse>
  )
}

export default QuestionAndAnwser