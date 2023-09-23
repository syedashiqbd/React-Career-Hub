import { useLoaderData, useParams } from 'react-router-dom';
import { saveApplication } from '../Utility/LocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id == intId);

  const handleApplyJob = () => {
    saveApplication(intId);
  };

  return (
    <div className="grid md:grid-cols-4 gap-6 my-16 ">
      <div className=" col-span-3 space-y-4 rounded p-4">
        <h1 className="text-2xl font-bold text-center">
          Job Details of: {job.job_title}
        </h1>
        <p>
          <span className="font-bold">Job Description:</span>{' '}
          {job.job_description}
        </p>
        <p>
          <span className="font-bold">Job Responsibility:</span>{' '}
          {job.job_responsibility}
        </p>
        <p>
          <span className="font-bold">Experience:</span> {job.experiences}
        </p>
        <p>
          <span className="font-bold">Salary:</span> {job.salary}
        </p>
      </div>
      <div>
        <div className="border bg-[#7e8ffe49] rounded p-4  space-y-8">
          <p className=" border-b border-white pb-4">
            <span className="font-bold mb-4 ">Job Details</span>
          </p>
          <h1 className="font-bold">{job.job_title}</h1>
          <p>
            <span className="font-bold">Experience:</span> <br />{' '}
            {job.experiences}
          </p>
          <p>
            <span className="font-bold">Salary:</span> <br /> {job.salary}
          </p>
        </div>
        <div>
          <button
            onClick={handleApplyJob}
            className="btn btn-primary w-full mt-4"
          >
            Apply Now
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
