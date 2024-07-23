import "./App.scss";
import { MainLayout } from "layouts";
import { HeaderWidget } from "widgets/header";
import { Lending } from "pages/lending";

function App() {
  return (
    <div className="App">
      <MainLayout header={<HeaderWidget />}>
        <Lending />
      </MainLayout>
    </div>
  );
}

export default App;
