import { AmountBtnsContainer } from "./index"
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {


  return (
    <AmountBtnsContainer className="amount-btns">
      <button type="button" className="amount-btn"
        onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn"
        onClick={increase}>
        <FaPlus />
      </button>
    </AmountBtnsContainer>
  )
}
export default AmountButtons