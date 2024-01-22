import { StyledButton } from './styles/buttons'
import { StyledParagraph, StyledTitle } from './styles/typography'

function App () {
  return (
    <div className="App">
      <StyledTitle tag='h2' fontWeight={ 700 } fontSize='md'>
        Pokedashboard
      </StyledTitle>

      <StyledParagraph fontSize='md'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor libero vel ipsum quam exercitationem dolorum eum a explicabo, ipsam, architecto ea ad cum? Alias pariatur sit veniam magnam deleniti!
      </StyledParagraph>

      <StyledButton buttonSize='md' buttonStyle='solid' >
        Teste
      </StyledButton>
    </div>
  )
}

export default App
