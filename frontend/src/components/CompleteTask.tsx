import { useState } from 'react'
import { BiLoader } from 'react-icons/bi'
import { completeTask, type Task as TaskType } from '../api/task'


export default function CompleteTask({ task, onTaskAction }: { task: TaskType, onTaskAction: () => void }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isCompleted = task.completed
  const buttonText: string = isCompleted ? 'Completed' : 'Complete'

  const updateTask = async () => {
    try {
      setIsLoading(true)
      await completeTask(task.id)
      onTaskAction()
    } catch(e) {
      console.error(e)
      alert("Couldn't create new task")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <button disabled={isCompleted} onClick={updateTask}>
        {!isLoading && buttonText}
        {isLoading && <BiLoader />}
      </button>
    </>
  )
}