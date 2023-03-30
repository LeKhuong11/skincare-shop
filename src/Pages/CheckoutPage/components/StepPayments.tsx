import Input from '../../../components/Input'
import root from '../checkout.module.scss'
function StepPayment() {
  return (
    <div className={root.stepPayment}>
        <div>
            <h3>Payment Details</h3>
            <div>
                <div>
                    <input type="radio" />
                    <label>Credit Card  </label>
                </div>
                <div>
                    <input type="radio" />
                    <label>PayPal</label>
                </div>
                <div>
                    <label>Card Number</label> <br />
                    <Input type='text' />
                </div>
                <div>
                <div>
                    <label>Expiry Date</label> <br />
                    <Input type='date' />
                </div>

                <div>
                    <label>CVV</label> <br />
                    <Input type='text' /> <br />
                </div>
                </div>
            </div>
            <div>
              <div>
                <label>Country</label> <br />
                <Input type='text' />
              </div>

              <div>
                <label>ZIP Code</label> <br />
                <Input type='text' /><br />
              </div>
            </div>
        </div>
    </div>
  )
}

export default StepPayment