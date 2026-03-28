from sqlalchemy import Column, Integer, String, DateTime, func
from .db_config import Base
from schemas.task_schema import TaskStatus

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True) #auto incrementing primary key
    title = Column(String(26), unique=True, nullable=False) #required
    description = Column(String(50), nullable=True) #optional
    status = Column(String(10), default=TaskStatus.PENDING.value) #pending , completed
    created_at = Column(DateTime, default=func.now()) #defult to current time and date