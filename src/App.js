import "./App.css";
import { MainLayout } from "layouts";
import { HeaderWidget } from "widgets/header";
import { InfoSection } from "sections/info";
import { DocumentSection } from "sections/documents";
import { Products } from "sections/products";

function App() {
  return (
    <div className="App">
      <MainLayout header={<HeaderWidget />}>
        {/*   <InfoSection />
        <DocumentSection /> */}
        <Products />
      </MainLayout>
    </div>
  );
}

export default App;
