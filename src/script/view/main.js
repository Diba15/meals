import '../component/meal-list.js';
import '../component/search-bar.js';
import '../component/app-bar';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealList = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };
    const showCategoryClick = async () => {
        try {
            const result = await DataSource.category();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        mealList.meals = results;
    };

    const fallbackResult = message => {
        mealList.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;