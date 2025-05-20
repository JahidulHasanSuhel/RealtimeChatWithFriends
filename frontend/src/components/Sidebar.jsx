import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"


function Sidebar() {
    const {getUsers, users, selectedUsers, setSelectedUser, isUserLoading} = useChatStore();

    const onLineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers]);


  return (
    <div>Sidebar</div>
  )
}

export default Sidebar