from fastapi import HTTPException
from sqlalchemy.orm import Session
from schemas.task_schema import TaskCreate, TaskUpdate
from db import models

def create_task(db: Session, task: TaskCreate):
    db_task = models.Task(title=task.title, description=task.description)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def get_task(db: Session, task_id: int):
    return db.query(models.Task).filter(models.Task.id == task_id).first()

def get_all_tasks(db: Session):
    return db.query(models.Task).all()

def update_task(db: Session, task_id: int, task: TaskUpdate):
    db_task = get_task(db, task_id)
    allowed_fields = {"title", "description", "status"}
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    for key, value in task.dict(exclude_unset=True).items():
        if key in allowed_fields:
            setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task

def delete_task(db: Session, task_id: int):
    db_task = get_task(db, task_id)
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(db_task)
    db.commit()
    return db_task