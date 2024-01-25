import { AiOutlineHeart } from "react-icons/ai"
import { GoHome } from "react-icons/go"
import { IoIosMenu } from "react-icons/io"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { MdOutlineSell } from "react-icons/md"
import { StyledMenuList } from './style'

const Menu = () => {
   return (
      <nav>
         <StyledMenuList>
            <li className='menu'>
               <a href="#" aria-label="Menu" >
                  <IoIosMenu color='white' size={ 40 } />
               </a>
            </li>
            <li className='home'>
               <a href="#" aria-label="Home" >
                  <GoHome color='white' size={ 40 } />
               </a>
            </li>
            <li className='favorite'>
               <a href="#" aria-label="Favorite" >
                  <AiOutlineHeart color='white' size={ 40 } />
               </a>
            </li>
            <li className='sell'>
               <a href="#" aria-label="Sell" >
                  <MdOutlineSell color='white' size={ 40 } />
               </a>
            </li>
            <li className='shopping'>
               <a href="#" aria-label="Shopping" >
                  <LiaShoppingBagSolid color='white' size={ 40 } />
               </a>
            </li>
         </StyledMenuList>
      </nav >
   )
}

export default Menu
