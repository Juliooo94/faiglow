from typing import TypedDict


class TaskType(TypedDict):
    id: str
    title: str
    completed: bool
