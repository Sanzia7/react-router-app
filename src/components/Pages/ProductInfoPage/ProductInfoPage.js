import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from "./ProductInfoPage.module.css"


function ProductInfoPage() {

   let [product, setProduct] = useState({})
   let { id } = useParams()
   let navigate = useNavigate()

   const goBack = () => {
      navigate(-1)
   }

   const goHome = () => {
      navigate('/')
   }

   useEffect(() => {
      let url = `https://fakestoreapi.com/products/${id}`
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data))
   }, [])

   console.log(product)

   return (
      <div className={styles.info_wrapper}>

         <button onClick={goBack}>Назад</button>
         <button onClick={goHome} >Домой</button>

         <h1>{product.title}</h1>
         <p>Rating: {product.rating?.rate}</p>
         <img width={350} height={350} src={product.image} />
         <p>Price: {product.price} $</p>
      </div>
   )
}

export default ProductInfoPage


/*
оператор ? опциональной последовательности выводит значение для undefined свойства: 
         <p>Rating: {product.rating?.rate}</p>*/ 