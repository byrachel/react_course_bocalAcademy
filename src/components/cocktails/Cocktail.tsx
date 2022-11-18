import { CocktailInterface } from './CocktailInterface';

interface Props {
  cocktail: CocktailInterface;
}

export default function Cocktail({ cocktail }: Props) {
  const ingredientsList = [
    cocktail.strIngredient1,
    cocktail.strIngredient2,
    cocktail.strIngredient3,
    cocktail.strIngredient4,
    cocktail.strIngredient5,
    cocktail.strIngredient6,
    cocktail.strIngredient7,
    cocktail.strIngredient8,
    cocktail.strIngredient9,
    cocktail.strIngredient10,
    cocktail.strIngredient11,
    cocktail.strIngredient12,
    cocktail.strIngredient13,
    cocktail.strIngredient14,
    cocktail.strIngredient15,
  ];
  const ingredients = ingredientsList.filter((n: string | null) => n);

  return (
    <div className="card">
      <div className="columns">
        <img
          src={cocktail.strDrinkThumb}
          height="200"
          style={{ borderRadius: 7 }}
        />
        <div className="book-content">
          <h3>{cocktail.strDrink}</h3>
          <ul>
            {ingredients.map((ingredient: string | null, idx: number) =>
              ingredient ? <li key={idx}>{ingredient}</li> : null,
            )}
          </ul>
        </div>
      </div>
      <h4>{cocktail.strGlass}</h4>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
}
