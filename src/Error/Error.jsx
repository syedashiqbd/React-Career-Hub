import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="w-full mx-auto text-center flex flex-col justify-center h-screen bg-blue-900 text-white">
      <h1 className="text-6xl mb-10">Oops !!!</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default Error;
