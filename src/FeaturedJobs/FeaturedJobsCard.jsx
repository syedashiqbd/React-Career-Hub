/* eslint-disable react/prop-types */

const FeaturedJobsCard = ({ job }) => {
  const { logo } = job;
  return (
    <div>
      <img src={logo} />
    </div>
  );
};

export default FeaturedJobsCard;
