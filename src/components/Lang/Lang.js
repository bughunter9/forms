import React,{ useState } from 'react';
import './Lang.css';
import Select from "react-select";

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
    label: "German",
  }
];


function Lang() {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
            <div className="langContainer">
        <div className="langContainer1">
            Pref. Lang. for Teacher
        </div>
        <div className="langContainer2">
        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable
        placeholder='Language'
      />
        </div>
      </div>
        </div>
    )
}

export default Lang
