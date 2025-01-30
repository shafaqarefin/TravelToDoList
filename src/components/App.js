import { Logo } from "./Logo.js";
import { PackingList } from "./Packinglist.js";
import { Stats } from "./Stat.js";
import { AddForm } from "./Form.js";

function App() {
  return (
    <div className="app">
      <Logo />
      <AddForm />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
