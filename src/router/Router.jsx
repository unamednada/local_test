import { Route, Routes } from 'react-router-dom';
import { Home, Projects } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/projects/" element={ <Projects /> } />
    </Routes>
  )
}