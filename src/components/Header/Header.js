import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {

   const navigate = useNavigate()

   const goBack = () => {
      navigate(-1)
   }

   return (
      <div className={styles.header_wrapper}>
         <div className={styles.logo}></div>
         <button onClick={goBack} >Назад</button>
         <div className={styles.menu_wrapper}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/goods'>Goods</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
         </div>
      </div>
   )
}

export default Header