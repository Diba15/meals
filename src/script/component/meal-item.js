class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
               }
              
               .thumb {
                   width: 60%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .info {
                   padding: 24px;
                   background-color: #ccc;
                   animation: ease-in-out 5s;
               }
              
               .info > h2 {
                   font-weight: lighter;
               }
              
               .info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
               }
               .itemTampung {
                    display: flex;
                    animation: ease-in-out 5s;
               }
               .instruction {
                    padding: 24px;
               }
               p {
                    font-family: Anna,sans-serif;
               }
               h2 {
                    font-family: "Bebas Neue",sans-serif;
               }
               a {
                    color: rosybrown;
               }
               @media screen and (max-width: 720px) {
                   .itemTampung {
                        flex-direction: column;
                   }
                   .thumb {
                        width: 100%;
                   }
               }
           </style>
           <div class="itemTampung">
               <img class="thumb" src="${this._meal.strMealThumb}" alt="Fan Art">
               <div class="info">
                   <h2>${this._meal.strMeal}</h2>
                   <p>Category: ${this._meal.strCategory}</p>
                   <p>Tags: ${this._meal.strTags}</p>
                   <p>Area: ${this._meal.strArea}</p>
                   <p>Source: <a href='${this._meal.strSource}'>${this._meal.strSource}</a></p>
                   <p>Youtube: <a href='${this._meal.strYoutube}'>${this._meal.strYoutube}</a></p>
               </div>
           </div>
           <div class="instruction">
                 <h2>Instructions: </h2>
                 <p>${this._meal.strInstructions}</p>
                 <div class="theBahan">
                    <div class="ingredients">
                         <h2>Ingredients: </h2>
                         <p>${this._meal.strMeasure1} ${this._meal.strIngredient1}</p>
                         <p>${this._meal.strMeasure2} ${this._meal.strIngredient2}</p>
                         <p>${this._meal.strMeasure3} ${this._meal.strIngredient3}</p>
                         <p>${this._meal.strMeasure4} ${this._meal.strIngredient4}</p>
                         <p>${this._meal.strMeasure5} ${this._meal.strIngredient5}</p>
                         <p>${this._meal.strMeasure6} ${this._meal.strIngredient6}</p>
                         <p>${this._meal.strMeasure7} ${this._meal.strIngredient7}</p>
                         <p>${this._meal.strMeasure8} ${this._meal.strIngredient8}</p>
                         <p>${this._meal.strMeasure9} ${this._meal.strIngredient9}</p>
                    </div>
                </div>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);