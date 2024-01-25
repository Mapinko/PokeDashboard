import GameList from './components/GameList'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Menu from './components/Menu'
import MyGameList from './components/MyGameList'
import { StyledMainWrapper } from './styles/wrapper'

function App () {
  return (
    <StyledMainWrapper>
      <Menu />
      <div className='main-content'>
        <Header />
        <MainBanner />
        <GameList />
        <MyGameList />
      </div>
    </StyledMainWrapper>
  )
}

export default App
