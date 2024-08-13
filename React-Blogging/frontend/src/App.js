import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Navbar";
import "./App.css";
import ComposePage from "./Pages/ComposePage";
import ArticlePage from "./Pages/ArticlePage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import AuthPage from "./Pages/AuthPage";
import ArticleEdit from "./Pages/ArticleEdit";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Compose" element=  {<ComposePage />}/>
        <Route path="/Article/:id" element={<ArticlePage />}/>
        <Route path="/Profile" element ={<ProfilePage />}/>
        <Route path="/Auth/:Method" element={<AuthPage />}/>
        <Route path="/Edit/:id" element ={<ArticleEdit />}/> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
