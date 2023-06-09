import { useState, useEffect } from 'react'
import { CheckoutFormContainer } from './index'
import { formatPrice } from '../../Utils/Helpers'
import { useCartContext } from '../../context/CartContext'
import { useUserContext } from '../../context/UserContext'


const CheckoutForm = () => {

    const { cart, totalAmount, shipping, clearCart } = useCartContext()
    const { myUser } = useUserContext()

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleCardNumber = (e) => {
        let value = e.target.value
        value = value.replace(/\s/g, "").replace(/\D/g, "");
        value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
        value = value.slice(0, 19);
        setCardNumber(value)
    }
    const handleCvvNumber = (e) => {
        let value = e.target.value
        value = value.slice(0, 3);
        setCVV(value)
    }
    return (
        <CheckoutFormContainer className='page-100'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cardNumber">
                    Number <br />
                    <input
                        type='text'
                        className='input'
                        name='cardNumber'
                        id='cardNumber'
                        value={cardNumber}
                        onChange={handleCardNumber}
                    />
                </label>
                <label htmlFor="cardName">
                    Name <br />
                    <input
                        type='text'
                        className='input'
                        name='cardName'
                        id='cardName'
                    />
                </label>
                <div className='expiration'>
                    <label htmlFor="month">
                        Month <br />
                        <select name="month" id="month" >
                            <option value="" disabled>Month</option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="year">
                        Year <br />
                        <select name="year" id="year">
                            <option value="" disabled>Year</option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="cvv">
                        CVV <br />
                        <input
                            type="number"
                            name='cvv'
                            id='cvv'
                            value={cvv}
                            onChange={handleCvvNumber}
                        />
                    </label>
                </div>
                <button
                    className='btn'
                    type='submit'
                    onClick={handleSubmit}>
                    Submit Payment
                </button>
            </form>
        </CheckoutFormContainer>
    );

}


export default CheckoutForm