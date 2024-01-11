import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import EisContext from "../components/context/eis";

function MyProfilePage() {

    const {currentUser} = useContext(EisContext);

  return (
    <div className='flex flex-row h-full flex-1 p-8 gap-8'>
        <div className='flex-1 flex flex-col overflow-hidden rounded-lg bg-white '>
            <div className='mx-auto w-24 h-28 m-4 rounded-lg overflow-hidden'>
                <FaUser className='text-blue-900' size={100}/>
            </div>

            <div className='relative overflow-x-auto shadow-sm h-full '>
                <table className='h-full w-full text-sm text-left rtl:text-right text-gray-500'>
                    <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                    </colgroup>

                    <tbody>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Name</td>
                            <td className='px-6'>{currentUser?.firstname}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Surname</td>
                            <td className='px-6'>{currentUser?.middlename}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Surname</td>
                            <td className='px-6'>{currentUser?.lastname}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Email</td>
                            <td className='px-6'>{currentUser?.primaryemail}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Birthplace</td>
                            <td className='px-6'>{currentUser?.birthplace}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Birthday</td>
                            <td className='px-6'>{currentUser?.birthday.slice(0, 10)}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Gender</td>
                            <td className='px-6'>{currentUser?.gender === "M" ? "Male" : "Female"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='flex-1 overflow-hidden rounded-lg'>
            <div className='relative overflow-x-auto shadow-sm h-full '>
                <table className='h-full w-full text-sm text-left rtl:text-right text-gray-500'>
                    <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                    </colgroup>

                    <tbody>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Student ID No.</td>
                            <td className='px-6'>{currentUser?.studentidnumber}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Address</td>
                            <td className='px-6'>{currentUser?.address}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Citizenship</td>
                            <td className='px-6'>{currentUser?.citizenship}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Martial Status</td>
                            <td className='px-6'>{currentUser?.maritalstatus}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Blood Group</td>
                            <td className='px-6'>{currentUser?.bloodgroup}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>ID CARD No.</td>
                            <td className='px-6'>{currentUser?.idcardnumber}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Primary Email</td>
                            <td className='px-6'>{currentUser?.primaryemail}</td>
                        </tr>
                        <tr className='bg-white border-b hover:bg-gray-50 '>
                            <td className='px-6'>Secondary Email</td>
                            <td className='px-6'>{currentUser?.secondaryemail}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default MyProfilePage