
import Input from '../../../components/Input'
import root from '../checkout.module.scss'

function StepDetails() {
  return (
    <div className={root.stepDetails}>
        <div>
            <h3>Details</h3>
            <label>Email Address</label> <br />
            <Input type="email" /> <br />
        </div>
    </div>
  )
}

export default StepDetails