import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversation from '../../zustand/useConversation'

const Sidebar = () => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <>
    <div className={` border-r  w-full overflow-scroll border-slate-500 p-4   md:flex flex-col ${selectedConversation ? "hidden" : ""}`}>
    <SearchInput />
    <div className='divider px-3'></div>
    <Conversations />
    <LogoutButton />
    </div>
    </>
  )
}

export default Sidebar


// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;