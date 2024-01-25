import GameList from './components/GameList'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import Menu from './components/Menu'
import MyGameList from './components/MyGameList'
import { StyledMainWrapper } from './styles/global'

function App () {
  return (
    <div className="App">
      <Menu />
      <StyledMainWrapper>
        <Header />
        <MainBanner />
        <GameList />
        <MyGameList />
      </StyledMainWrapper>
    </div>
  )
}

export default App
