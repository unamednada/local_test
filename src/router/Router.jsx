import { Route, Routes } from 'react-router-dom';
import { Home, Projects } from '../pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
  )
}