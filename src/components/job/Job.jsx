import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {id,logo,job_title,company_name, location,salary}= job;
    return (
        <div className=" border p-5 space-y-4">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold">{job_title}</h1>
            <h2 className="text-xl font-medium text-gray-500">{company_name}</h2>
            <div className="flex gap-5">
                <button className=" border rounded font-semibold px-10 bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-[#9873FF]">full</button>
                <button className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] font-semibold rounded border border-[#9873FF] px-10">remote</button>
            </div>
            <div className="flex gap-5">
                <p className='flex items-center gap-2'><CiLocationOn className='text-xl'></CiLocationOn>{location}</p>
                <p className='flex items-center gap-2 '><AiOutlineDollar className='text-xl'></AiOutlineDollar>{salary}</p>
            </div>
            <div>
            <Link to={`/job/${id}`}>
                <button className="p-3 rounded text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Veiw details</button>
            </Link>
            </div>
        </div>
    );
};

export default Job;