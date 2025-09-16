import { useState } from "react"
import { BiLoader } from "react-icons/bi"
import { deleteTask } from "../api/task"

export default function DeleteTask({ taskId, onTaskAction }: {taskId: string, onTaskAction: () => void}) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const remove = async () => {
    try {
      setIsLoading(true)
      await deleteTask(taskId)
      onTaskAction()
    } catch(e) {
      console.error(e)
      alert("Couldn't delete task")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <button onClick={remove}>{isLoading ? <BiLoader /> : 'Delete'}</button>
    </>
  )
}