import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { StripeContainer } from './index'



const CheckoutForm = () => {
    return <h4>hello from Stripe Checkout </h4>
}

const StripeCheckout = () => {
    return (
        <StripeContainer>
            <CheckoutForm />
        </StripeContainer>
    )
}

export default StripeCheckout