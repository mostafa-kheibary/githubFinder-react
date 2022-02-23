import UserList from '../../components/UserList/UserList';
import './Home.css';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <div className='container'>
      <SearchForm />
      <UserList />
    </div>
  );
};
export default Home;
