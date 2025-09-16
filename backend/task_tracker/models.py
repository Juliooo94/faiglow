import uuid
from .db import db
from .types import TaskType
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column


class Task(db.Model):
    __tablename__ = 'task'
    id: Mapped[str] = mapped_column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4()),
    )
    title: Mapped[str] = mapped_column()
    completed: Mapped[bool] = mapped_column(default=False)

    def to_dict(self) -> TaskType:
        return TaskType(
            id=self.id,
            title=self.title,
            completed=self.completed
        )
