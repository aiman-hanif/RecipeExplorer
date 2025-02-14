import  React, { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [recipes, setRecipe] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [filters, setFilters] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const [ selectedDiet, setSelectedDiet] = useState(null);
    const [ selectedHealth, setSelectedHealth ] = useState(null);
    const [ selectedMeal, setSelectedMeal ] = useState(null);
    const [ selectedDish, setSelectedDish ] = useState(null);

    return (
        <UserContext.Provider value={{
            recipes, setRecipe, 
            searchString, setSearchString,
            filters, setFilters,
            modalOpen, setModalOpen,
            selectedCuisine, setSelectedCuisine, 
            selectedDiet, setSelectedDiet,
            selectedDish, setSelectedDish,
            selectedHealth, setSelectedHealth, 
            selectedMeal, setSelectedMeal,
        }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);