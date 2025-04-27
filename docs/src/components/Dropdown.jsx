import React from 'react'
import "./Dropdown.css"

/**
 * Props:
 * - Items: String Array
 */

const Dropdown = ({ items }) => {
    return (
      <select className='Dropdown' name="cars" id="cars">
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  };

export default Dropdown