import { type Task as TaskType } from '../api/task'

import CompleteTask from "./CompleteTask"
import DeleteTask from "./DeleteTask"
import styles from './TaskTool.module.css'

export default function TaskTool({ task, onTaskAction }: { task: TaskType, onTaskAction: () => void }) {
  return(
    <div className={styles.tooling}>
      <CompleteTask task={task} onTaskAction={onTaskAction}/>
      <DeleteTask taskId={task.id} onTaskAction={onTaskAction}/>
    </div>
  )
}
