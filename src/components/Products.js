import { useParams } from 'react-router-dom';  //can only use Params from a route

const Product = () => {
    const {product} = useParams();  // takes the user input in the url /product/:product

    return (
        <> 
        <h1>
        <p> You are looking at a {product}</p>
        </h1>
        </>
    )
};

export default Product;