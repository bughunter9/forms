import React,{useState} from 'react';
import './Grade.css';
import Select from "react-select";

const options = [
    {
      id: 1,
      label: "6",
    },
    {
      id: 2,
      label: "7",
    },
    {
      id: 3,
      label: "8",
    },
    {
      id: 4,
      label: "9",
    },
    {
      id: 5,
      label: "10",
    }
  ];

function Grade() {

  
  const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
             <div className="gradeContainer">
        <div className="gradeContainer1">
            Grade
        </div>
        <div className="gradeContainer2">
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable
        placeholder='Grade'
      />
        </div>
      </div>
        </div>
    )
}

export default Grade
