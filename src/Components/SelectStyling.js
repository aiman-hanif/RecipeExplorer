const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '150px',
      border: 'transparent',
      borderRadius: '5px',
      background: 'transparent',
      outline: 'none',
      transition: 'all 0.1s',
      color: '#6D2932',
      '&:hover': {
        outline: 'solid #6D2932',
      },
      '&.react-select__control--is-focused': {
        outline: 'solid #6D2932'
      },
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: '#6D2932',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        backgroundColor: '#6D2932',
    }),
    menuList: (provided, state) => ({
        ...provided,
        background: '#561C24',
        color: '#E8D8C4',
        "::-webkit-scrollbar": {
            width: "4px",
            height: "0px",
          },
          "::-webkit-scrollbar-track": {
            background: "#6D2932"
          },
          "::-webkit-scrollbar-thumb": {
            background: "#E8D8C4"
          },
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isFocused || state.isSelected ? '#E8D8C4' : '#561C24',
        color: state.isFocused || state.isSelected ? '#561C24' : '#E8D8C4',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: '#6D2932',
        fontWeight: '600',
    })
  };

  export default customStyles;