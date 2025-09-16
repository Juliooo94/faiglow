import { API_BASE_URL } from "../config"


export interface Task {
  id: string
  title: string
  completed: boolean
}

const BASE_URL = `${API_BASE_URL}/tasks`

export async function fetchTasks(): Promise<Task[]> {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error("Failed to fetch tasks")
  return res.json()
}

export async function createTask(title: string): Promise<Task> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  })
  if (!res.ok) throw new Error("Failed to create task")
  return res.json()
}

export async function completeTask(id: string): Promise<Task> {
  const response = await fetch(`${BASE_URL}/${id}/complete`, { method: "PATCH" })
  if (!response.ok) throw new Error("Failed to complete task")
  return response.json()
}

export async function deleteTask(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
  if (!response.ok) throw new Error("Failed to delete task")
}

export async function deleteCompletedTask(): Promise<void> {
  const response = await fetch(`${BASE_URL}/completed`, { method: "DELETE" })
  if (!response.ok) throw new Error("Failed to delete tasks")
}