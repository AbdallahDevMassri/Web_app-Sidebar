import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HomeComponent } from "./components/Home/home.component";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated && (
        <div className="container-app">
          <button onClick={loginWithRedirect}> log in </button>
        </div>
      )}
      {isAuthenticated && <HomeComponent />}
    </div>
  );
}

export default App;
