import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getPrvApplication = () => {
  const storedApplication = localStorage.getItem('job_application');
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};

const saveApplication = (id) => {
  const storedApplication = getPrvApplication();
  const exist = storedApplication.find((appId) => appId === id);
  if (!exist) {
    storedApplication.push(id);
    localStorage.setItem('job_application', JSON.stringify(storedApplication));
    toast('You have applied Successfully in this job !!!');
  } else {
    toast('Already applied');
  }
};

<ToastContainer />;

export { getPrvApplication, saveApplication };
