import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import BackToTop from '../component/BackToTop';
import Icon from '../component/Icon';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="notfound">
          <div className="notfound-code">404</div>
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist or has been moved.</p>
          <Link to="/" className="btn btn--primary">
            Back To Home
            <Icon name="arrowRight" size={16} />
          </Link>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
