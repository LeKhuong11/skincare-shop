
import Input from '../../../components/Input'
import root from '../checkout.module.scss'

function StepShipping() {
  return (
    <div className={root.stepShipping}>
        <div>
            <h3>Shipping Details</h3>
            <label>Full Name</label> <br />
            <Input width={510} type="email" /> <br />

            <label>Street Name</label> <br />
            <Input width={510} type="email" /> <br />
            <div style={{display: 'flex'}}>
              <div>
                <label>House Number</label> <br />
                <Input width={250} type="email" />
              </div>

              <div>
                <label>City</label> <br />
                <Input width={250} type="email" /> <br />
              </div>
            </div>

            <div style={{display: 'flex'}}>
              <div>
                <label>Country</label> <br />
                <Input width={250} type="email" /> 
              </div>

              <div>
                <label>ZIP Code</label> <br />
                <Input width={250} type="email" /> <br />
              </div>
            </div>
        </div>
    </div>
  )
}

export default StepShipping