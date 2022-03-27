import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPhoneAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';

const SingleManPdInfo = ({ productInfo }) => {
    const dispatch = useDispatch()
    
    const { cart } = useSelector(state => state.CartReducer);
    console.log(cart)
    const [isTrue, setIsTrue] = useState(false)
    // const [cart, setCart] = useState(false);
    let [quantity, setQuantity] = useState(1)
    let [pdDetails, setPdDetails] = useState({ color: '', size: '', quantities: quantity })

   
        

    const detailAboutProduct = e => {
        setQuantity(parseInt(e.target.value))
    }
    const detailAboutProducts = e => {
        const newPdDetails = { ...pdDetails }
        newPdDetails[e.target.name] = e.target.value;
        console.log(quantity)
        newPdDetails.quantities = quantity;
        setPdDetails(newPdDetails)
    }
    console.log(pdDetails)
    const addToCart = () =>{
        dispatch({ type: 'ADD_TO_CART', paylod: { productInfo, pdDetails } });
        dispatch({type:'OPEN_CART',payload: true})
        
    }

    return (
        <div>
            <div>
                {cart == true && <Cart id={productInfo._id}></Cart>}
            </div>
            <div className='p-5' style={{ backgroundColor: '#f7f8fa' }}>
                <div className='row shadow rounded Single-man-pd-container'>
                    <div className='col-md-4 bg-white'>
                        <img className='img-fluid ' src={`data:image/jpeg;base64,${productInfo.image.img}`} alt="" />
                    </div>
                    <div className='col-md-4 bg-white'>
                        <h4>{productInfo.title}</h4>
                        <p>Catagoary : {productInfo.catagoary}</p>
                        <h4>$ {productInfo.price}</h4>
                        <p><small>Starting price</small></p>

                        <div className='d-flex justify-content-around flex-wrap'>
                            <div
                            //  className='col-md-4'
                             >
                                <h6> Quantity:</h6>
                                <select class="form-select px-4 py-2" name='quantity' aria-label="Default select example" onChange={detailAboutProduct}>

                                    <option>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            {( productInfo.catagoary == 'Fashion for Men') &&
                            <div
                            //  className='col-md-4 '
                             >
                                <h6> Size:</h6>
                                <select class="form-select px-4 py-2" name='size' aria-label="Default select example" onChange={detailAboutProducts} >
                                    <option>Select</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>}
                            <div
                            //  className='col-md-4 ' 
                             onChange={detailAboutProducts}>
                                <h6> Color:</h6>
                                <select class="form-select px-4 py-2" name='color' aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black">Black</option>
                                </select>
                            </div>
                            <div className='cart-button ml-3'>
                                <button className="btn btn-primary  my-2 ShopBtn" onClick={() => addToCart()}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Check Avilable Shop</button>
                            </div>
                            <hr />
                            <div className='py-4 ml-3 cart-button pr-4'>
                                <p><b>Have questions about this product (SKU: 0x7fd03)</b></p>
                                <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> 23454345434543</p>
                            </div>
                            {
                                isTrue === true && <h1>Please Select</h1>
                            }
                        </div>
                    </div>
                    <div className='col-md-4 warranty'>
                        <h3>Warranty</h3>
                        <h5><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> 100% Authentic</h5>
                    </div>
                </div>
            </div>

            <div className='mt-5 p-5'>
                <h3>Product details of {productInfo.title}</h3>
                <div>

                    <p style={{ whiteSpace: 'pre-wrap' }}>{productInfo.description}</p>
                </div>
            </div>



        </div>
    );
};

export default SingleManPdInfo;




































































































































































// import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faPhoneAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react';
// import { userContext } from '../../App';
// import { useContext } from 'react';
// import Cart from '../Cart/Cart';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart, numberOfQuantity } from '../../Redux/Actions/cartAction';

// const SingleManPdInfo = ({ productInfo }) => {
//     const dispatch = useDispatch()
//     const [productDetails, setProductDetails] = useContext(userContext)
//     const [inceraseQuantity, setInceraseQuantity] = useContext(userContext);
//     const [id, setID] = useContext(userContext);
//     const [isDelete, setIsDelete] = useState(true);
//     const [filterData, setFilterDataa] = useState([]);



//     const [pdDetails, setPdDetails] = useState({})
//     let number = parseInt(pdDetails.quantity)
//     let [detailProductInfo, setDetailProductInfo] = useState({})
//     let [updatedProductInfo, setUpdateProductInfo] = useState({})
//     const [isTrue, setIsTrue] = useState(false)
//     const [cart, setCart] = useState(false);
//     const [dataForPass, setDataForPass] = useState([])


// const handleCart = () => {
//     let emptyArray = JSON.parse(localStorage.getItem('cartInfo'))
//     if (emptyArray.length == 0) {
//         let newDetailProductInfo = { ...productInfo }
//         newDetailProductInfo.quantity = 1;

//         newDetailProductInfo.totalPrice = parseInt(productInfo.price);
//         setDetailProductInfo(newDetailProductInfo)
//         console.log(detailProductInfo)
//         console.log(newDetailProductInfo)
//         emptyArray.push(newDetailProductInfo)
//         setUpdateProductInfo(detailProductInfo)
//         setDataForPass(emptyArray)
//         let productsJson = JSON.stringify(emptyArray)
//         localStorage.setItem("cartInfo", productsJson)

//     }
//     if (emptyArray.length > 0) {
//         let a = emptyArray.find(productsId => productsId._id == productInfo._id)
//         console.log(a)
//         console.log(productInfo)
//         if (a == undefined) {
//             let newDetailProductInfo = { ...productInfo }
//             newDetailProductInfo.quantity = 1;
//             newDetailProductInfo.totalPrice = parseInt(productInfo.price);
//             setDetailProductInfo(newDetailProductInfo)
//             console.log(detailProductInfo)
//             console.log(newDetailProductInfo)
//             emptyArray.push(newDetailProductInfo)
//             setUpdateProductInfo(detailProductInfo)
//             setDataForPass(emptyArray)
//             let productsJson = JSON.stringify(emptyArray)
//             localStorage.setItem("cartInfo", productsJson)

//         }
//         else {
//             let newDetailProductInfo = { ...productInfo }
//             let newPrice = parseInt(newDetailProductInfo.price)
//             console.log(newPrice)

//             newDetailProductInfo.quantity = number || 1; //count will be added

//             console.log(newDetailProductInfo.quantity)
//             newDetailProductInfo.totalPrice = newPrice * newDetailProductInfo.quantity;
//             let isNull = newPrice * newDetailProductInfo.quantity;
//             console.log(isNull)
//             if (isNull != NaN) {
//                 let updatedArray = emptyArray.filter(emptyaRray => emptyaRray._id !== productInfo._id)
//                 updatedArray.push(newDetailProductInfo);
//                 setDataForPass(updatedArray)
//                 console.log(updatedArray)
//                 let jsonUpdatedArray = JSON.stringify(updatedArray)
//                 localStorage.setItem('cartInfo', JSON.stringify(updatedArray))
//             }
//             else {
//                 console.log("this is Null")
//                 setIsTrue(true)
//                 console.log(isTrue)
//             }

//         }
//     }
//     dispatch(addToCart(productInfo))
//     setCart(true)

// }

//     const detailAboutProduct = e => {
//         // const newProductsDetail = { ...pdDetails }
//         // newProductsDetail[e.target.name] = e.target.value;
//         // setPdDetails(newProductsDetail)
//         // setProductDetails(newProductsDetail)
//         dispatch(numberOfQuantity(parseInt(e.target.value)))
//     }

//     // if (id) {
//     //         //  const newDataForPass = [...dataForPass]
//     var filterDataa = dataForPass.filter(newForPassData => newForPassData._id !== id)
//     //     // console.log(newDataForPass)
//     //     console.log(id)
//     console.log(filterDataa)
//     // setDataForPass(filterDataa)
//     // }


//     return (
//         <div>
//             <div>
//                 {cart === true && <Cart dataForPass={dataForPass}></Cart>}
//             </div>
//             <div className='p-5' style={{ backgroundColor: '#f7f8fa' }}>
//                 <div className='row shadow rounded Single-man-pd-container'>
//                     <div className='col-md-4 bg-white'>
//                         <img src={`data:image/jpeg;base64,${productInfo.image.img}`} alt="" />
//                     </div>
//                     <div className='col-md-4 bg-white'>
//                         <h4>{productInfo.title}</h4>
//                         <p>Catagoary : {productInfo.catagoary}</p>
//                         <h4>$ {productInfo.price}</h4>
//                         <p><small>Starting price</small></p>

//                         <div className='row'>
//                             <div className='col-md-4'>
//                                 <h6> Quantity:</h6>
//                                 <select class="form-select px-4 py-2" name='quantity' aria-label="Default select example" onChange={detailAboutProduct}>

//                                     <option>Select</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>
//                             <div className='col-md-4 '>
//                                 <h6> Size:</h6>
//                                 <select class="form-select px-4 py-2" name='size' aria-label="Default select example" >
//                                     <option>Select</option>
//                                     <option value="M">M</option>
//                                     <option value="L">L</option>
//                                     <option value="XL">XL</option>
//                                     <option value="XXL">XXL</option>
//                                 </select>
//                             </div>
//                             <div className='col-md-4 '>
//                                 <h6> Color:</h6>
//                                 <select class="form-select px-4 py-2" name='color' aria-label="Default select example">
//                                     <option>Select</option>
//                                     <option value="Red">Red</option>
//                                     <option value="Blue">Blue</option>
//                                     <option value="Black">Black</option>
//                                 </select>
//                             </div>
//                             <div className='cart-button ml-3'>
//                                 {/* <button className="btn btn-primary  my-2 ShopBtn" onClick={() => handleCart()}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Check Avilable Shop</button> */}
//                                 <button className="btn btn-primary  my-2 ShopBtn" onClick={() =>handleCart()}> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Check Avilable Shop</button>
//                             </div>
//                             <hr />
//                             <div className='py-4 ml-3 cart-button pr-4'>
//                                 <p><b>Have questions about this product (SKU: 0x7fd03)</b></p>
//                                 <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> 23454345434543</p>
//                             </div>
//                             {
//                                 isTrue === true && <h1>Please Select</h1>
//                             }
//                         </div>
//                     </div>
//                     <div className='col-md-4 warranty'>
//                         <h3>Warranty</h3>
//                         <h5><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon> 100% Authentic</h5>
//                     </div>
//                 </div>
//             </div>

//             <div className='mt-5 p-5'>
//                 <h3>Product details of {productInfo.title}</h3>
//                 <div>

//                     <p style={{ whiteSpace: 'pre-wrap' }}>{productInfo.description}</p>
//                 </div>
//             </div>



//         </div>
//     );
// };

// export default SingleManPdInfo;