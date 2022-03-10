import Layout from '../components/layouts/Main';
import { Heading } from '../components/shared';

const Home = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-neutral-dark">
        <Heading type="DisplayLarge">
          <span className="text-neutral-lighter">404</span>
        </Heading>
        <Heading type="DisplaySmall">
          <span className="text-neutral-light">This page does not exist</span>
        </Heading>
      </div>
    </Layout>
  );
};

export default Home;
