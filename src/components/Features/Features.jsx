import React from "react";

function Features({ camper }) {
  return (
    <div>
      <h3>Features</h3>
      <ul>
        {camper.AC && (
          <li>
            <svg width="15px" height="15px">
              <use href="../../assets/icons.svg#icon-wind"></use>
            </svg>
            <p>AC</p>
          </li>
        )}
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
