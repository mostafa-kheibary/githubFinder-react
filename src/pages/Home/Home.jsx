import UserList from '../../components/UserList/UserList';
import './Home.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import ClearAll from '../../components/ClearAll/ClearAll';
const Home = () => {
  return (
    <div className='container'>
      <SearchForm />
      <ClearAll/>
      <UserList />
    </div>
  );
};
export default Home;
