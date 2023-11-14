import Input from "../../Input"
import "./Price.css"
function Price({handlechange}) {
  return (
    <div className="ml">
<h2 className="sidebar-title price-title">Price</h2>
<label className="sidebar-label-container">
      <input onChange={handlechange} type="radio" value="" name="test2" />
      <span className="checkmark"></span>All
     </label>

<Input handlechange={handlechange}
value={50}
title="$0-50"
name="test2"
/>
<Input handlechange={handlechange}
value={100}
title="$50-100"
name="test2"
/>
<Input handlechange={handlechange}
value={150}
title="$100-200"
name="test2"
/>
<Input handlechange={handlechange}
value={200}
title="Over $150"
name="test2"
/>


</div>
  )
}

export default Price;