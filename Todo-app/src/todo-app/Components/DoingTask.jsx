import { Link } from "react-router-dom";

import Pagination from "./Pagination";

export default function DoingTask ({taskList}) {
   const doingTaskList = taskList.filter((item) => item.status == 'DOING')
   
   return(
      <div className="container">
         <Pagination 
            taskList={doingTaskList}
            taskClassName='doingTask'
            itemsPerPage={12}
         />
      </div>
   )
}