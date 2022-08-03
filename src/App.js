import styled from 'styled-components';
import { Header, SearchComponent, SearchInput, AppNameComponent, ButtonLogin, ButtonLogout } from './components/Header';
import { RecipeContainer, CoverImg, RecipeName, Dificult, Duration, Portion, SeeMore } from './components/RecipeComponent';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { auth } from './config/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

const api = 'https://masak-apa-tomorisakura.vercel.app';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [timeoutId, updateTimeoutId] = useState();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipeAll = async () => {
        try {
            const fetchRecipeAll = await axios.get(api + "/api/search/?q=");
            setRecipe(fetchRecipeAll.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    fetchRecipeAll();
  }, []);

  const fetchRecipe = async (searchString) => {
    try {
      const response = await axios.get(api + `/api/search/?q=${searchString}`);
        setRecipe(response.data.results);
    } catch (error) {
        console.log(error);
    }
  }

  const onSearchChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
    updateTimeoutId(timeout);
  }

  const getDetailsRecipe = async (key, thumb) => {
    if(user) {
      const data = await fetchData(key);
      return navigate("/recipedetail", { state: { recipe: data.results, thumb: thumb } });
    } else {
      return navigate("/login");
    }
  }

  const fetchData = async (key) => {
    const response = await axios.get(api + `/api/recipe/` + key)
    return response.data;
  }

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onLogin = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Container>
      <Header>
        <AppNameComponent>Resep Nusantara</AppNameComponent>
        <SearchComponent>
          <SearchInput placeholder='Cari Resep' onChange={onSearchChange}/>
        </SearchComponent>
        <div>
          <ButtonLogin onClick={onLogin}>Login</ButtonLogin>
          {
            user ? <ButtonLogout onClick={onLogout}>Logout</ButtonLogout>
              : ''
          }
        </div>
      </Header>
      <RecipeListContainer>
          {
              recipe.map(recipe => (
                  <RecipeContainer key={recipe.thumb}>
                    <CoverImg src={recipe.thumb}/>
                    <RecipeName key={recipe.title}>{recipe.title}</RecipeName>
                    <Duration key={recipe.times}>Duration : {recipe.times}</Duration>
                    <Portion key={recipe.serving}>Portion : {recipe.serving}</Portion>
                    <Dificult key={recipe.difficulty}>Dificulty : {recipe.difficulty}</Dificult>
                    <SeeMore onClick={() => getDetailsRecipe(recipe.key, recipe.thumb)}>Lihat Resep</SeeMore>
                  </RecipeContainer>
              ))
          }
      </RecipeListContainer>
      <Footer/>
    </Container>
  );
}

export default App;
