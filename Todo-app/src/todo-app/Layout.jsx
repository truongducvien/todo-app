import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './Style/Layout.css'

import Header from "./Components/Header";
import SideBar from './Components/SideBar';
import CreateTask from "./Components/CreateTask";
import AllTask from './Components/AllTask';
import NewTask from './Components/NewTask';
import EditTask from "./Components/EditTask";
import DoingTask from './Components/DoingTask';
import DoneTask from './Components/DoneTask';
import SearchResult from "./Components/SearchResult";



export default function Layout () {
   const [taskList, setTaskList] = useState([]);
   const [searchKey, setSearchKey] = useState('');

   useEffect(() => {
      const storedTaskList = localStorage.taskList;
      
      if(storedTaskList === undefined){
         setTaskList([])
         
         // return;
      } else {setTaskList(JSON.parse(storedTaskList))}

   }, [])




   const saveNewTask = (newTask) => {
      let newTaskList = [newTask, ...taskList]
      setTaskList(newTaskList)
      
      newTaskList.map((item, index) => {item.id = index})

      localStorage.setItem('taskList', JSON.stringify(newTaskList));
   }


   const updateTask = (taskItem, action) => {
      switch (action) {
         case 'saveChange':
            setTaskList(taskList => {
               taskList[taskItem.id] = taskItem;
               return taskList;
            })
            break;

         case 'deleteTask':
            setTaskList(taskList => {
               taskList.splice(taskItem.id, 1);
               return taskList;
            })
            break;

         default:
            console.log('Error'); 
      }

      taskList.map((item, index) => item.id = index)
      localStorage.setItem('taskList', JSON.stringify(taskList));
   }


   const searchTask = (inputVal) => {
      setSearchKey(inputVal)


      // console.log(inputVal);
   }


   return (
         <div className="app-area">
            <BrowserRouter>
               <Header searchTask={searchTask}/>
               <SideBar />

               <div className="content">
                  <Routes>
                     <Route 
                        path='/createTask' 
                        element={<CreateTask saveNewTask={saveNewTask}/>} 
                     />

                     <Route 
                        path='/' 
                        element={<AllTask taskList={taskList}/>} 
                     />

                     <Route 
                        path='/newtask' 
                        element={<NewTask taskList={taskList}/>} 
                     />

                     <Route 
                        path='/edittask' 
                        element={<EditTask 
                        updateTask={updateTask}/>} 
                     />

                     <Route 
                        path='/doingtask' 
                        element={<DoingTask taskList={taskList}/>} 
                     />

                     <Route 
                        path='/donetask' 
                        element={<DoneTask taskList={taskList}/>} 
                     />

                     <Route 
                        path='/searchresult' 
                        element={<SearchResult taskList={taskList} searchKey={searchKey}/>} 
                     />
                  </Routes> 
               </div>
            </BrowserRouter>
         </div>
   )
}