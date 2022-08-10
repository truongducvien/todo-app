import { Link } from "react-router-dom";

import Pagination from "./Pagination";

export default function NewTask ({taskList}) {
   const newTaskList = taskList.filter((item) => item.status == 'NEW')
   return(
      <div className="container">
         <Pagination 
            taskList={newTaskList}
            taskClassName='newTask'
            itemsPerPage={12}
         />
      </div>
   )
}