import React from 'react'

// Import the useSelector() and useDispatch() functions from React Redux.
import { useSelector, useDispatch } from 'react-redux'

import ProductComponent from './Product'
import { likeProduct, removeProduct } from '../redux/actions'
import { Product, RootState } from '../redux/types'

function ProductList() {

    // Call React Redux useSelector() function, to get access to "store" object in Redux Store.
    const { products } = useSelector((store: RootState) => store)

    // Call React Redux useDispatch() function, to get access to Redux Store dispatch() function.
    const dispatch = useDispatch()

    // In the code below, note in particular how we dispatch actions to Redux via the dispatch() function.
    return (
        <div>
            <h1>Totally Awesome Products</h1>
            {(products.length === 0) ?
                <div>No products</div> :
                products.map((p: Product) => {
                    return <ProductComponent
                        {...p}
                        onLike={() => { dispatch(likeProduct(p.id)) }}
                        onRemove={() => { dispatch(removeProduct(p.id)) }} />
                }
                )
            }
        </div>
    )
}
export default ProductList
