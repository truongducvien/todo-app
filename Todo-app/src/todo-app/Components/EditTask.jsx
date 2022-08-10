import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function EditTask ({updateTask}) {
   const location = useLocation();
   const navigate = useNavigate();
   const taskItem = location.state;
   

   const formElement = useRef();
   const titleElement = useRef();
   const creatorElement = useRef();
   const createTimeElement = useRef();
   const descriptionElement = useRef();
   const status_new = useRef();
   const status_doing = useRef();
   const status_done = useRef();

   
   let handleStatusChange = (e) => {
      taskItem.status = e.target.id;
   }
   
   const handleInputChange = () => {
      // console.log('Form changed');
   }


   const handleSaveTask = (e) => {
      e.preventDefault();

      taskItem.title = titleElement.current.value != ''? titleElement.current.value : titleElement.current.placeholder;
      taskItem.creator = creatorElement.current.value != ''? creatorElement.current.value : creatorElement.current.placeholder;
      taskItem.createTime = createTimeElement.current.value;
      taskItem.description = descriptionElement.current.value != ''? descriptionElement.current.value : descriptionElement.current.placeholder;

      updateTask(taskItem,'saveChange')
      navigate(-1)
   }


   const handleResetTask = (e) => {
      e.preventDefault();
      formElement.current.reset();
   }


   const handleDeleteTask = (e) => {
      e.preventDefault();
      if(window.confirm("Are you sure to delete this task?") == true){
         updateTask(taskItem, 'deleteTask')
         navigate(-1)
      }
   }

   return(
      <div className="editTask">
         <form action="#" ref={formElement}>
            <div className="form-item">
               <p>Title</p>
               <input onChange={handleInputChange} type="text" placeholder={taskItem.title} ref={titleElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Creator</p>
               <input onChange={handleInputChange} type="text" placeholder={taskItem.creator} ref={creatorElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <p>Create at</p>
               <input onChange={handleInputChange} type="datetime-local" defaultValue={taskItem.createTime} ref={createTimeElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item"> 
               <p>Description</p>
               <input onChange={handleInputChange} type="text" placeholder={taskItem.description} ref={descriptionElement}/>
               <span className="error-message"></span>
            </div>

            <div className="form-item">
               <input 
                  type="radio" 
                  id='NEW' 
                  name='status' 
                  ref={status_new}
                  onChange={handleStatusChange}
               /> 
               <label htmlFor="new">New</label>

               <input 
                  type="radio" 
                  id='DOING' 
                  name='status'
                  ref={status_doing}
                  onChange={handleStatusChange}
               /> 
               <label htmlFor="doing">Doing</label>

               <input 
                  type="radio" 
                  id='DONE' 
                  name='status'
                  ref={status_done}
                  onChange={handleStatusChange}
               /> 
               <label htmlFor="done">Done</label>
            </div>


            <button onClick={handleSaveTask}>Save</button>
            <button onClick={handleResetTask}>Reset</button>
            <button onClick={handleDeleteTask}>Delete</button>
         </form>
      </div>
   )
}