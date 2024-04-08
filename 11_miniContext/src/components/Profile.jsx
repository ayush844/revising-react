import React, {useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {

    const {user} = useContext(UserContext);

    if(!user) return <div>PLEASE LOG IN</div>

  return (
    <div>
        WELCOME!!! {user.username}
    </div>
  )
}

export default Profile