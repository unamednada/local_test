import { Header, Footer } from '../../components';
import { Meeting } from '../../templates';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact" data-testid="contact">
      <Header />
      <Meeting />
      <Footer />
    </div>
  );
}

export default Contact;
