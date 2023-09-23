import { useEffect, useState } from 'react';
import FeaturedJobsCard from './FeaturedJobsCard';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch('/public/jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div className="w-10/12 md:w-9/12 mx-auto my-8">
      <h1>Jobs: {jobs.length}</h1>
      {<h1>Bismillah</h1>}
      <div>
        {jobs.map((job) => (
          <FeaturedJobsCard key={job.id} job={job}></FeaturedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
