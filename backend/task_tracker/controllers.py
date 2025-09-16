from . import db
from .models import Task
from .types import TaskType


class TaskController:
    def get_all_tasks(self) -> list[TaskType]:
        return [task.to_dict() for task in Task.query.all()]

    def create_task(self, title: str) -> TaskType:
        task = Task(title=title)
        db.session.add(task)
        db.session.commit()
        return task.to_dict()

    def set_task_as_completed(self, id: str) -> TaskType:
        if task := Task.query.get(id):
            task.completed = True
            db.session.commit()
            return task.to_dict()
        raise ValueError('Task not found')

    def delete_task(self, id: str) -> None:
        if task := Task.query.get(id):
            db.session.delete(task)
            db.session.commit()
            return
        raise ValueError('Task not found')

    def delete_completed_tasks(self) -> None:
        Task.query.filter_by(completed=True).delete()
        db.session.commit()
