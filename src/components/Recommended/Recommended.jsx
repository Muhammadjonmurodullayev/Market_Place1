import Buttons from "../Buttons"
import "./Recommended.css"
function Recommended({handleCilick}) {
  return (
  <>
<h2 className="Recommended-title">Recommended</h2>
<div className="Recommended-flex">
<Buttons onClickHandler={handleCilick} value="" title="All Products" />  
<Buttons onClickHandler={handleCilick} value="Nike" title="Nike" />
<Buttons onClickHandler={handleCilick} value="adidas"title="Adidas" />
<Buttons onClickHandler={handleCilick} value="Puma" title="Puma" />
<Buttons onClickHandler={handleCilick} value="Vans" title="Vans" />
</div>
</>
    )
}

export default Recommended;