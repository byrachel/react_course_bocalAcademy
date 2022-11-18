import { Route, Routes } from 'react-router-dom';
import ArticleList from './components/content/ArticleList';
import MoviesList from './components/movies/MoviesList';
import Lottery from './components/lottery/Lottery';
import Form from './components/storage/Form';
import CocktailContainer from './components/cocktails/CocktailContainer';
import MenuContainer from './components/navigation/MenuContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuContainer />
      <div style={{ margin: 10 }}>
        <Routes>
          <Route path="/" element={<CocktailContainer />} />
          <Route path="/cocktails" element={<CocktailContainer />} />
          <Route path="/books" element={<ArticleList />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/form" element={<Form />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
