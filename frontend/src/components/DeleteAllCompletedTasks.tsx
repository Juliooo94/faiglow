import { useState } from "react"
import { BiLoader } from "react-icons/bi"
import { deleteCompletedTask } from "../api/task"

export default function DeleteAllCompletedTasks({ onTaskAction }: { onTaskAction: () => void }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const removeCompletedTasks = async () => {
    try {
      setIsLoading(true)
      await deleteCompletedTask()
      onTaskAction()
    } catch (e) {
      console.error(e)
      alert("Something went wrong deleting tasks")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <button onClick={removeCompletedTasks}>
        {isLoading ? <BiLoader /> : 'Delete completed tasks'}
      </button>
    </>
  )
}