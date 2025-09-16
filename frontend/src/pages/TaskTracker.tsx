import { useEffect, useState } from 'react'
import { fetchTasks, type Task as TaskType } from '../api/task'
import DeleteAllCompletedTasks from '../components/DeleteAllCompletedTasks'
import NewTaskButton from '../components/NewTaskButton'
import Task from '../components/Task'
import styles from './TaskTracker.module.css'

export default function TaskTracker() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  async function refreshTasks() {
    try {
      const newTasks = await fetchTasks()
      setTasks(newTasks)
    } catch (e) {
      console.error(e)
      alert("Couldn't load tasks")
    }
  }

  useEffect(() => {
    refreshTasks()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.tooling}>
        <NewTaskButton onTaskCreated={refreshTasks}/>
          {tasks.length > 0 && <DeleteAllCompletedTasks onTaskAction={refreshTasks}/>}
      </div>
      {tasks.length > 0 ?
        <div className={styles.tasks}>
          {tasks.map(task => (
            <Task key={task.id} task={task} onTaskAction={refreshTasks}/>
          ))}
        </div>
      : <h2>Nothing to show here... Create a new task.</h2>}
    </div>
  )
}