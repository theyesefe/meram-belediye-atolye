import ProductItem from "./ProductItem"
import ProductData from "./ProductData"

const Products = (props) => {
  return (
    <div className="grid grid-cols-3 p-10 m-10 ">
        
        
        {ProductData.map((product) => 

            <ProductItem key={product.id} product={product} setCart={props.setCart} />
        )}


    </div>
  )
}

export default Products