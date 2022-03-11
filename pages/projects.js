import Layout from '../components/layouts/Main';
import Kanban from '../components/projects/Kanban';
import SearchBar from '../components/projects/SearchBar';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <SearchBar />
        <Kanban />
      </div>
    </Layout>
  );
};

export default Home;
