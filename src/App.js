import './App.css';
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import CardSlider from './components/CardSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from './components/Registration';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/register">
            <Registration/>
          </Route>
          <Route path="/movies/:movid">
            {/* <SingleMovie/> */}
            <SingleMovieFetch/>
          </Route>
          <Route path="/movies">
          {/* <Route exact path="/movies"> -> so that the url does not use the first path available but the exact one*/}
            {/* <AllMovies/> */}
            <AllMoviesFetch/>
          </Route>
          <Route path="/">
            <SliderImages/>
            <CardSlider/>
            <Premieres/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
