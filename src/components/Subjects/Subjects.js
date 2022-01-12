import React, { useState } from 'react';
import Select from 'react-select';
import './Subjects.css';
// import Select from "react-dropdown-select";

const options = [
    {
      id: 1,
      label: "English",
    },
    {
      id: 2,
      label: "Hindi",
    },
    {
      id: 3,
      label: "Punjabi",
    },
    {
      id: 4,
      label: "French",
    },
    {
      id: 5,
      label: "Spanish",
    },
    {
      id: 6,
      label: "Science",
    },
    {
      id: 7,
      label: "Maths",
    },
    {
        id: 8,
        label: "Arts",
      }
  ];

function Subjects() {

  const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
             <div className="subjectsContainer">
        <div className="subjectsContainer1">
            Subjects
        </div>
        <div className="subjectsContainer2">
         <Select
        isMulti={true}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable
        placeholder='Subjects'
      />
        </div>
      </div>
        </div>
    )
}

export default Subjects
