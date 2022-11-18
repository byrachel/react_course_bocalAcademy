import { useEffect, useState } from 'react';
import Cocktail from './cocktail';
import CocktailInput from './CocktailInput';
import { CocktailInterface } from './CocktailInterface';
import './Cocktails.css';

export default function CocktailContainer() {
  const [search, setSearch] = useState<string | null>('test');
  const [cocktails, setCocktails] = useState<CocktailInterface[] | null>(null);
  const [cocktailsSuggestion, setCocktailsSuggestion] = useState<{
    show: boolean;
    list: string[];
  }>({ show: false, list: [] });

  useEffect(() => {
    const getCocktails = (search: string) => {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
      )
        .then((res) => res.json())
        .then((data) => setCocktails(data.drinks))
        .catch(() => setCocktails(null));
    };
    if (search) {
      getCocktails(search);
    }
  }, [search]);

  const handleSuggestion = (suggestion: string) => {
    setSearch(suggestion);
    setCocktailsSuggestion({ show: false, list: [] });
  };

  return (
    <>
      <div className="title">
        <h2>Drinks</h2>
      </div>
      <p>Quelle recette cherchez-vous ?</p>
      <CocktailInput
        setSearch={setSearch}
        setCocktailsSuggestion={setCocktailsSuggestion}
      />
      {cocktailsSuggestion.show && cocktailsSuggestion.list.length > 0 ? (
        <ul className="suggestions">
          {cocktailsSuggestion.list.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestion(suggestion)}
              style={{ width: '50%' }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      ) : null}
      {cocktails ? (
        <>
          <p style={{ textAlign: 'center' }}>
            <img src="./images/cocktail-icon.png" height="20" />{' '}
            <b>{cocktails.length} cocktails trouvés</b>
          </p>
          {cocktails.map((cocktail) => (
            <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </>
      ) : null}
    </>
  );
}
