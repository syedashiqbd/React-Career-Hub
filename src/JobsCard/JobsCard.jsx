const JobsCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salalry,
  } = job;
  return (
    <div>
      <img src={logo} />
      <p>{job_title}</p>
      <p>{company_name}</p>
    </div>
  );
};

export default JobsCard;
