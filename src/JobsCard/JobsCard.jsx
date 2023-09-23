const JobsCard = ({ job }) => {
  const { logo, job_title } = job;
  return (
    <div>
      <img src={logo} />
      <p>{job_title}</p>
    </div>
  );
};

export default JobsCard;
