import SimpleBar from 'simplebar-react';
import Layout from '../components/layouts/Main';
import Kanban from '../components/projects/Kanban';
import SearchBar from '../components/projects/SearchBar';

const Home = () => {
  return (
    <Layout>
      <SimpleBar className="h-full">
        <div className="flex flex-col gap-8">
          <SearchBar />
          <Kanban />
        </div>
      </SimpleBar>
    </Layout>
  );
};

export default Home;
