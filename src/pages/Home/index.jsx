import { Header, Banner, Footer } from '../../components';
import './Home.css';

function Home() {
  return (
    <div className="Home" data-testid="home">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
