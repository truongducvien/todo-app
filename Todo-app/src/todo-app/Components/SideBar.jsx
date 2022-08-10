import { NavLink } from 'react-router-dom';

export default function SideBar () {
   return (
      <div className="side-bar">
         <div className="side-bar__tab">
            <NavLink 
               to='/'
            >All Task</NavLink>
         </div>
         <div className="side-bar__tab">
            <NavLink 
               to='/newtask'
            >New Task</NavLink>
         </div>
         <div className="side-bar__tab">
            <NavLink 
               to='/doingtask'
            >Doing Task</NavLink>
         </div>
         <div className="side-bar__tab">
            <NavLink 
               to='/donetask'
            >Done Task</NavLink>
         </div>
      </div>
   )
}