from fastapi import FastAPI
from routes import task_routes
from db.db_config import engine, SessionLocal, Base
from sqlalchemy import text
from db.models import Task
app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(task_routes.router)