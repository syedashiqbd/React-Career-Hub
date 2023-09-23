import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import SectionTitle from '../SectionTitle/SectionTitle';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle
        sectionTitle={'Job Category List'}
        titleDescription={
          'Explore thousands of job opportunities with all the information you need. Its your future'
        }
      ></SectionTitle>
      <SectionTitle
        sectionTitle={'Featured Jobs'}
        titleDescription={
          'Explore thousands of job opportunities with all the information you need. Featured Jobs'
        }
      ></SectionTitle>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
