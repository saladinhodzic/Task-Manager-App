import Home from "./components/Home";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className=" h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
      {/* <Home /> */}
    </main>
  );
}

export default App;
