import { type Task as TaskType } from '../api/task'
import styles from './Tasks.module.css'
import TaskTool from './TaskTool'

export default function Task({ task, onTaskAction } : { task: TaskType, onTaskAction: () => void }) {
  const className: string = `${styles.container} ${task.completed ? styles.completed : styles.pending}`
  return (
    <div className={className}>
      <div className={styles.title}>
        {task.title}
      </div>
      <div>
        <TaskTool task={task} onTaskAction={onTaskAction}/>
      </div>
    </div>
  )
}