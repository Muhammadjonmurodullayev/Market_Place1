import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css"
function Sidebar({handlechange}) {
  return (
  <>
  <section className="sidebar">
    <div className="logo-container">
      <h1>🛒</h1>
    </div>
    <Category handlechange={handlechange}/>
    <Price handlechange={handlechange}/>
    <Colors handlechange={handlechange}/>
  </section>
  </>
  )
}

export default Sidebar;