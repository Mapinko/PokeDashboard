import { MdNotifications, MdSearch } from "react-icons/md"
import Avatar from "../../assets/Avatar1.png"
import { StyledHeader, StyledHeaderForm } from './style'

const Header = () => {
   return (
      <StyledHeader>
         <StyledHeaderForm >
            <button type="submit">
               <MdSearch size={ 30 } />
            </button>
            <input type="text" name="search" id="search" placeholder='Search...' />
         </StyledHeaderForm>
         <div className='userMenu'>
            <button>
               <MdNotifications size={ 30 } />
            </button>
            <img src={ Avatar } alt="User name" />
         </div>
      </StyledHeader>
   )
}

export default Header
