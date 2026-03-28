from fastapi import APIRouter, Depends
from typing import List
from schemas.task_schema import TaskResponse
from sqlalchemy.orm import Session
from schemas.task_schema import TaskCreate, TaskUpdate
from services import task_services
from db.db_config import SessionLocal

router = APIRouter(prefix="/tasks", tags=["tasks"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[TaskResponse])
def read_tasks(db: Session = Depends(get_db)):
    return task_services.get_all_tasks(db)

@router.get("/{task_id}", response_model=TaskResponse)
def read_task(task_id: int, db: Session = Depends(get_db)):
    return task_services.get_task(db, task_id)
 
@router.post("/", response_model=TaskResponse)
def create_task(task: TaskCreate, db: Session = Depends(get_db)):
    return task_services.create_task(db, task)

@router.put("/{task_id}", response_model=TaskResponse)
def update_task(task_id: int, task: TaskUpdate, db: Session = Depends(get_db)):
    return task_services.update_task(db, task_id, task) 

@router.delete("/{task_id}", response_model=TaskResponse)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    return task_services.delete_task(db, task_id)
