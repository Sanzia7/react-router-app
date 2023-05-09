import { Link } from 'react-router-dom'
import styles from './GoodItem.module.css'


function GoodItem(props) {

   const { title, price, id, count } = props

   return (
      <div className={styles.goods_wrapper}>
         <Link to={`/goods/${id}`}>           
            <div style={{ display: 'flex', gap: '7px' }}>
               <h3>{`${id})`}</h3>
               <h3>{title}</h3>
            </div>
         </Link>
         <div style={{ display: 'flex', gap: '15px', color: 'red'}}>
            <p>Price: {price} $ </p>
            <p> Count: {count}</p>
         </div>
      </div>
   )
}

export default GoodItem


/* stars

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

.active {
	color: orange
}

*/
