import Menu from './components/navigation/Menu';
import ArticleList from './components/content/ArticleList';
import MoviesList from './components/movies/MoviesList';
import Lottery from './components/lottery/Lottery';
import Form from './components/storage/Form';
import CocktailContainer from './components/cocktails/CocktailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div style={{ margin: 10 }}>
        <CocktailContainer />
        <Form />
        <Lottery />
        <MoviesList />
        <ArticleList />
      </div>
    </div>
  );
}

export default App;
