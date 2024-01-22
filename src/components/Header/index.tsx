import { MdNotifications, MdSearch } from "react-icons/md"
import Avatar from "../../assets/Avatar1.png"
import { StyledHeader, StyledHeaderForm } from './style'

const Header = () => {
   return (
      <StyledHeader>
         <StyledHeaderForm>
            <button type='submit'>
               <MdSearch size={ 30 } color='rgba(255, 255, 255, .5)' />
               <input type="text" name="search" id="search" placeholder='Search' />
            </button>
         </StyledHeaderForm>

         <div className='userMenu'>
            <button>
               <MdNotifications size={ 30 } color='#FFF' />
            </button>
            <img src={ Avatar } alt="User name" />
         </div>
      </StyledHeader>
   )
}

export default Header
