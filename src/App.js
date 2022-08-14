import logo from './logo.svg';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInComponent from './signin';
import SignupComponent from './signup';
import RecipeList from './recipeList';
import Recipe from './recipe';
import AddRecipe from './addRecipe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList/>}/>
          <Route path="/sign-in" element={<SignInComponent/>} />
          <Route path="/sign-up" element={<SignupComponent/>} />
          <Route path="/recipe/:id" element={<Recipe/>} />
          <Route path="/add-recipe" element={<AddRecipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
