import { data } from 'autoprefixer';
import { useEffect } from 'react';
import { useState } from 'react';
import JobsCard from '../JobsCard/JobsCard';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="w-10/12 md:w-9/12 mx-auto my-8">
      <div>
        {jobs.map((job) => (
          <JobsCard key={job.id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
