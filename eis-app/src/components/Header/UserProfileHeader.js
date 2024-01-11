import UserProfileHeaderPic from './UserProfileHeaderPic';
import UserProfileHeaderName from './UserProfileHeaderName';

function UserProfileHeader() {
  
  return (
    <div className='flex flex-row content-center justify-center pt-2'>
      <div>
        <UserProfileHeaderPic/>
      </div>
      <div className='pl-2'>
        <UserProfileHeaderName/>
      </div>
    </div>
  )
}

export default UserProfileHeader;