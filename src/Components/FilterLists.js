import React from 'react';
import Select from 'react-select';
import customStyles from './SelectStyling';
import './FilterList.css';

const capitalizeFirstLetter = (string) => {
    let words = string.split(' ');
    let sep = ' ';
    if (words.length === 1) {
        words = string.split('-');
        sep = '-';
    }
    if (words.length === 1) {
        words = string.split('/');
        sep = '/';
    }
    let capitalized = '';
    words.forEach((word) => {
        capitalized = capitalized + word.charAt(0).toUpperCase() + word.slice(1) + sep;
    });
    return capitalized.slice(0, capitalized.length - 1);
};

const FilterList = (props) => {
    

    const handleReset = () => {
        props.setValue(null);
    };

    const handleSelect = (selectedOption) => {
        props.setValue(selectedOption?.value || null);
    };

    const createOptions = (list) => {
        return list.map((item) => ({ value: item, label: capitalizeFirstLetter(item) }));
    };

    return (
        <div className='dropdown'>
                <button className='resetBtn' onClick={handleReset}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
                <Select
                    classNamePrefix='react-select'
                    id={props.id}
                    value={props.value ? createOptions([props.value])[0] : null}
                    placeholder={props.name}
                    options={createOptions(props.list)}
                    onChange={handleSelect}
                    styles={customStyles}
                />
        </div>
    );
};

export default FilterList;
