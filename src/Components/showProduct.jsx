// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams , Link } from 'react-router-dom';

// export default function ShowProduct() {
//     const { id } = useParams();
//     let [product, setProduct ] = useState({});

//     let GetProductById = () => {
//         axios.get(`http://localhost:2000/products/${id}`)
//             .then((response) => {
//                 console.log(response.data)
//                 setProduct(response.data)
//             })
//             .catch(error => console.log(error))
//     }
    
//     useEffect(() => {
//         GetProductById();
//     }, [])

//     return (
//         <div>
//             <div class="card">
//                 <img src={product.imgUrl} class="" alt="..." className=' card-img-top w-50 mx-auto'></img>
//                 <hr />
//                 <div class="card-body">
//                     <h5 class="card-title">{product.name}</h5>
//                     <p class="card-text">Quantity: {product.quantity}</p>
//                     <p class="card-text">Price: {product.price} $</p>
//                     <Link to="/products" class="btn btn-info">Go to Products</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ShowProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProductById = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getProductById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); // Include 'id' as a dependency to re-run the effect when the id changes

    return (
        <div>
            <div className="card">
                <img src={product.imgUrl} alt="Product" className="card-img-top w-50 mx-auto" />
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Price: {product.price} $</p>
                    <Link to="/products" className="btn btn-info">Go to Products</Link>
                </div>
            </div>
        </div>
    );
}
