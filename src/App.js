import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar/navbar'
import RecipeReviewCard from './components/pages/homepage'
function App() {
  return (<>
  
   <ResponsiveAppBar/>
   <div style={{display : 'flex',justifyContent :'center',alignItems:'center'}}>
   <RecipeReviewCard/>
   </div>

   </>
  );
}

export default App;
