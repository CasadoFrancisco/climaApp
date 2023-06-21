import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";

const App = () => {
 
  

  return (
    <div>

      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>

    </div>
  );
};

export default App;