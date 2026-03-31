from fastapi import FastAPI
from routes import task_routes
from db.db_config import engine, SessionLocal, Base
from sqlalchemy import text
from db.models import Task
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/")    #just testing db connection
def db_test():
    with SessionLocal() as db:
        result = db.execute(text("SELECT 1")).fetchone()
        print("Database connection test result:", result)
        return {"db_connection": "successful" if result else "failed"}

app.include_router(task_routes.router) #/tasks/.. routes handler