import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import {
    CardElement,
    useStripe,
    Elements,
    useElements,
} from '@stripe/react-stripe-js'
import axios from 'axios'
import { StripeContainer } from './index'



const CheckoutForm = () => {
    return <h4>hello from Stripe Checkout </h4>
}

const StripeCheckout = () => {
    return (
        <Wrapper>
            <CheckoutForm />
        </Wrapper>
    )
}