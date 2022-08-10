import { Link } from "react-router-dom";

import Pagination from "./Pagination";

export default function DoneTask ({taskList}) {
   const doneTaskList = taskList.filter((item) => item.status == 'DONE')
   return(
      <div className="container">
         <Pagination 
            taskList={doneTaskList}
            taskClassName='doneTask'
            itemsPerPage={12}
         />
      </div>
   )
}