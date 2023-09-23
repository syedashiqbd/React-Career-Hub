import { useEffect } from 'react';
import { useState } from 'react';
import JobsCard from '../JobsCard/JobsCard';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState();
  const [dataLength, setDataLength] = useState(2);

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="w-10/12 md:w-9/12 mx-auto my-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {jobs?.slice(0, dataLength).map((job) => (
          <JobsCard key={job.id} job={job}></JobsCard>
        ))}
      </div>
      <div
        className={
          dataLength === jobs?.length ? 'hidden' : 'flex justify-center'
        }
      >
        <button
          onClick={() => setDataLength(jobs?.length)}
          className="btn btn-primary mt-8"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
