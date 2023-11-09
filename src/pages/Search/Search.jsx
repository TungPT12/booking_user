import SignupForm from '../../../components/client/SignupForm/SubscribeForm';
import Footer from '../../../components/client/Footer/Footer';
import SearchPopup from '../../../components/client/SearchPopup/SearchPopup';
import SearchList from '../../../components/client/SearchList/SearchList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import search from '../../../data/search.json';
const Search = (props) => {
  return (
    <div>
      <div id="search">
        <div className='container d-flex'>
          <SearchPopup />
          <SearchList searchData={search} />
        </div>
      </div>
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Search;
