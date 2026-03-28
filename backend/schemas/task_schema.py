from pydantic import BaseModel, Field
from typing import List, Optional
from enum import Enum
from datetime import datetime

class TaskStatus(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"

class TaskBase(BaseModel):
    title: str = Field(...,min_length=3, max_length=100, description="Title of the task")
    description: Optional[str] = Field(None, description="Description of the task")


class TaskCreate(TaskBase):
    pass

class TaskResponse(TaskBase):
    id: int = Field(..., description="Unique ID of the task")
    status: TaskStatus = Field(default=TaskStatus.PENDING, description="Status of the task")
    created_at: datetime = Field(default_factory=datetime.timezone.utcnow, description="Created time")
    class Config:
        orm_mode = True

class TaskUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=3, max_length=100, description="Title of the task")
    description: Optional[str] = Field(None, description="Description of the task")
    status: Optional[TaskStatus] = Field(None, description="Status of the task")