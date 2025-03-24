import React from "react";

function Features({ camper }) {
  return (
    <div>
      <h3>Features</h3>
      <ul>
        {camper.AC && <li>AC</li>}
        {camper.bathroom && <li>Bathroom</li>}
        {camper.kitchen && <li>Kitchen</li>}
        {camper.TV && <li>TV</li>}
        {camper.radio && <li>Radio</li>}
        {camper.refrigerator && <li>Refrigerator</li>}
        {camper.microwave && <li>Microwave</li>}
        {camper.gas && <li>Gas</li>}
        {camper.water && <li>Water</li>}
      </ul>
    </div>
  );
}

export default Features;
