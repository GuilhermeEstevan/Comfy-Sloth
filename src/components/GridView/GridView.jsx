import { GridContainer } from "./index"
import Product from "../Product/Product"

const GridView = ({ products }) => {


    return (
        <GridContainer>
            <div className="products-container">
                {products.map((product) => {

                    return <Product key={product.id} {...product} />
                })}
            </div>
        </GridContainer>
    )
}
export default GridView