import React,{useState} from 'react';
import './Device.css';
import Select from "react-select";

const options = [
    {
      id: 1,
      label: "Laptop",
    },
    {
      id: 2,
      label: "PC",
    },
    {
      id: 3,
      label: "Smartphone",
    },
    {
      id: 4,
      label: "Ipad",
    },
  ];

function Device() {

  
  const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
             <div className="deviceContainer">
        <div className="deviceContainer1">
            Select a Device for Demo Class
        </div>
        <div className="deviceContainer2">
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable
        placeholder='Device'
      />
        </div>
      </div>
        </div>
    )
}

export default Device
