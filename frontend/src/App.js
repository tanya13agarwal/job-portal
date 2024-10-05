import Navbar from "./components/common/Navbar";
import About from "./components/core/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="bg-[#EAE4DD] w-screen min-h-screen flex flex-col font-inter">
      <Navbar/>
      {/* <Login/> */}
      <Home/>
      {/* <About/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
