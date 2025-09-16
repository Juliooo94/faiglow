import { useState } from "react"
import CreateNewTask from "./CreateNewTask"

export default function NewTaskButton({ onTaskCreated }: { onTaskCreated: () => void }) {
  const [showInput, setShowInput] = useState<boolean>(false)
  return (
  <>
    {!showInput && <button onClick={() => setShowInput(true)}>Create a new task</button>}
    {showInput && 
      <CreateNewTask 
        onTaskCreated={onTaskCreated} 
        hideInput={() => setShowInput(false)} 
      />
    }
  </>
  )
}