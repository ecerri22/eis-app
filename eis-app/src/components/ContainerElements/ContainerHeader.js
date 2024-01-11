import { useContext } from 'react'
import ContainerHeaderButton from './ContainerHeaderButton'
import ContainerHeaderTitle from './ContainerHeaderTitle'
import EisContext from '../context/eis'

function ContainerHeader({ headerTitle, path }) {
  const  {currentPath} = useContext(EisContext);

  return (
    <div className='flex flex-row justify-between px-5 py-3 bg-blue-900 rounded-t-xl'>
        <div>
          <ContainerHeaderTitle headerTitle={headerTitle}/>
        </div>
        <div>
          {currentPath === "/homepage" && <ContainerHeaderButton path={path}/>}
        </div>

    </div>
  )
}

export default ContainerHeader