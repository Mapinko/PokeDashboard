import GameList from './components/GameList'
import Header from './components/Header'
import MainBanner from './components/MainBanner'
import MyGameList from './components/MyGameList'

function App () {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <GameList />
      <MyGameList />
    </div>
  )
}

export default App
