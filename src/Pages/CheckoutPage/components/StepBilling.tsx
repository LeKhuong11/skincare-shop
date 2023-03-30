import root from '../checkout.module.scss'

function StepBilling() {
  return (
    <div className={root.stepBilling}>
        <div>
            <input type="radio" />
            <label>Same as shipping address</label>
        </div>
    </div>
  )
}

export default StepBilling