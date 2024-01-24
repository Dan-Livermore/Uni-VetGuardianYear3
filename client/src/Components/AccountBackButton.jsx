import { useNavigate } from 'react-router-dom';

const BackButton = () => { 
    let navigate = useNavigate();
    return (
        <>
          <button className='bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white h-15 w-40' onClick={() => navigate(-1)}>Return to your Account</button>
        </>
    );
};

export default BackButton;