import { Wrapper } from "./index"
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useProductsContext } from "../../context/ProductsContext"


const Cart_LoginBtn = () => {

    const { closeSidebar } = useProductsContext()


    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to='/cart' className="cart-btn"
                onClick={closeSidebar}>
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">12</span>
                </span>
            </Link>
            <button type="button" className="auth-btn"
                onClick={closeSidebar}>
                Login <FaUserPlus />
            </button>
        </Wrapper>
    )
}
export default Cart_LoginBtn