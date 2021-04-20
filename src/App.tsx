import { GlobalStyle } from './styles/global';
import { Header } from './Components/Header'
import { EmailBox } from './Components/BoxEmail';
import { Menu } from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu/>
      <EmailBox/>
      <GlobalStyle />
    </div>
  );
}

export default App;
