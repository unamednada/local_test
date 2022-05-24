import { Header, Footer } from '../../components';
import { Banner } from '../../templates';
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
