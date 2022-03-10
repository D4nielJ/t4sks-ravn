import Layout from '../components/layouts/Main';
import { Heading } from '../components/shared';

const Home = () => {
  return (
    <Layout>
      <div className="flex h-full items-center justify-center rounded-2xl bg-neutral-dark">
        <Heading type="DisplayLarge">
          <span className="text-neutral-light">Section in construction</span>
        </Heading>
      </div>
    </Layout>
  );
};

export default Home;
