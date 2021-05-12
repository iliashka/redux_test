import 'materialize-css'
import Header from "./components/header/Header";
import { Route } from 'react-router-dom'
import CreatePage from "./pages/createPage/CreatePage";
import BasePage from "./pages/basePage/BasePage";


function App({store}) {
  return (
    <div className="App">
      <Header/>
        <Route path='/createPage' render={() => <CreatePage/>}/>
        <Route path='/basePage' render={() => <BasePage/>}/>
    </div>
  );
}

export default App;
