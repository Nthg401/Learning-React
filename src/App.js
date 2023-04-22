import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";

export default function App(){
  return(
    <>
    <NavBar title="PR" about ="About Me" />
  <div className="container">
    <TextArea/>
    {/* // <NavBar /> */}
    </div>
    </>
   );
}