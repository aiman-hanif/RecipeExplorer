import axios from 'axios';

const app_id = process.env.REACT_APP_ID;
const app_key = process.env.REACT_APP_KEY;


const formatFilter = (string) => {
    const words = string.split(' ');
    let result = '';
    words.map(word => {
        result = result + word + '%20';
    })
    return result.slice(0, result.length - 3).toLowerCase();
}

const handleFilters = (key, value) => {
    if (value === null) {
        return '';
    }
    let filter = '&' + key + '=' + formatFilter(value);
    return filter;
}

const searchRecipes = (search, filters, setRecipe) => {
    //search = 'egg';
    search = search.toLowerCase();
    let url = 'https://api.edamam.com/search?q=' + search + 
    '&app_id=' + app_id + '&app_key=' + app_key;
    

    Object.entries(filters).map(([key, value]) => {
        url = url + handleFilters(key, value);
    });

    console.log(url);

    axios.get(url)
        .then(response => {
            console.log(response);
            setRecipe(response.data.hits);
        });
    }

  export default searchRecipes;