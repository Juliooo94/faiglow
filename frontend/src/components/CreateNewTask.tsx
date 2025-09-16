import { useState } from "react"
import { BiLoader } from "react-icons/bi"
import { IoIosArrowBack, IoMdSend } from "react-icons/io"
import { createTask } from "../api/task"
import styles from './CreateNewTask.module.css'

export default function CreateNewTask({ hideInput, onTaskCreated } : { hideInput: () => void, onTaskCreated: () => void}) {
  const [title, setTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addTask = async () => {
    try {
      setIsLoading(true)
      await createTask(title)
      setTitle('')
      onTaskCreated()
    } catch(e) {
      console.error(e)
      alert("Couldn't create new task")
    } finally {
      setIsLoading(false)
    }
  }
  return (
  <div className={styles.container}>
    <input 
      value={title}
      onChange={e => setTitle(e.target.value)}
      type="text"
      placeholder="New task title"
    />
    <button
      className={styles.iconButton}
      disabled={!title.length}
      onClick={addTask}
    >
      {isLoading ? <BiLoader /> : <IoMdSend />}
    </button>
    <button className={styles.iconButton} onClick={hideInput}>
      <IoIosArrowBack />
    </button>
  </div>
  )
}