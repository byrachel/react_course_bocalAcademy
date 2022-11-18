import { useState, useEffect } from 'react';
import cocktailsList from './cocktailsList.json';

interface Props {
  setSearch: (arg: string | null) => void;
  setCocktailsSuggestion: (arg: { show: boolean; list: string[] }) => void;
}

export default function CocktailInput({
  setSearch,
  setCocktailsSuggestion,
}: Props) {
  const [myCocktailSearch, setMyCocktailSearch] = useState<null | string>(null);
  const cocktailsToSuggest = cocktailsList.cocktails;

  useEffect(() => {
    if (myCocktailSearch) {
      const search = myCocktailSearch.toLowerCase();
      const suggestions = cocktailsToSuggest.filter((cocktail: string) =>
        cocktail.includes(search),
      );
      setCocktailsSuggestion({ show: true, list: suggestions });
    }
  }, [myCocktailSearch]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => setMyCocktailSearch(e.target.value)}
        style={{ padding: 12, borderRadius: 7, borderWidth: 1, width: '50%' }}
      />
      <button
        type="submit"
        onClick={() => setSearch(myCocktailSearch)}
        style={{ marginLeft: 10 }}
      >
        Rechercher
      </button>
    </>
  );
}
