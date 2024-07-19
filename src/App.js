import "./App.css";
import { MainLayout } from "layouts";
import { HeaderWidget } from "widgets/header";

function App() {
  return (
    <div className="App">
      <MainLayout header={<HeaderWidget />}>
        <div></div>
      </MainLayout>
    </div>
  );
}

export default App;
