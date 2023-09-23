import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getPrvApplication } from '../Utility/LocalStorage';

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobsApplied, setJobsApplied] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilterJob = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(jobsApplied);
    } else if (filter === 'remote') {
      const remoteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === 'Remote'
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === 'onsite') {
      const onsiteJobs = jobsApplied.filter(
        (job) => job.remote_or_onsite === 'Onsite'
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const prvAppJob = getPrvApplication();
    if (jobs?.length > 0) {
      // const jobApplied = jobs.filter((job) => prvAppJob.includes(job.id));

      const appliedJobs = [];

      for (const id of prvAppJob) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }

      setJobsApplied(appliedJobs);
      setDisplayJobs(appliedJobs);
    }
  }, [jobs]);

  return (
    <div>
      <p className="text-center text-xl font-bold my-4">
        Total Applied Jobs: {jobsApplied?.length}
      </p>
      <div className="flex justify-between border rounded p-8">
        <ul>
          {displayJobs?.map((job) => (
            <li key={job.id}>
              <span className="font-bold text-lg">
                {job.job_title} : {job.company_name} : {job.salary} :{' '}
                {job.remote_or_onsite}
              </span>
            </li>
          ))}
        </ul>

        <details className="dropdown mb-32">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
            <li onClick={() => handleFilterJob('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterJob('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilterJob('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default AppliedJobs;
