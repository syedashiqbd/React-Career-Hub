/* eslint-disable react/prop-types */
import { MdLocationOn } from 'react-icons/md';
import { AiFillDollarCircle, AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const JobsCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
  } = job;
  return (
    <div className="rounded-lg  bg-base-100 border">
      <figure className="mt-6 ml-8">
        <img src={logo} alt="" />
      </figure>
      <div className=" flex flex-col p-8 ">
        <h2 className="card-title">{job_title}!</h2>

        <p>{company_name}</p>
        <div className="my-4">
          <button className="py-2 px-5 border border-[#7E90FE] rounded text-[#7E90FE] mr-4 font-bold">
            {remote_or_onsite}
          </button>
          <button className="py-2 px-5 border border-[#7E90FE] rounded text-[#7E90FE] mr-4 font-bold">
            {job_type}
          </button>
        </div>
        <div className="mb-4 flex gap-6">
          <h2 className="flex items-center gap-2">
            <MdLocationOn className="text-xl"></MdLocationOn>
            {location}
          </h2>
          <h2 className="flex items-center gap-2">
            <AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>
            {salary}
          </h2>
        </div>

        <div className="card-actions ">
          <Link to={`/jobs/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
