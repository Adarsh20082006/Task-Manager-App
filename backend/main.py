from fastapi import FastAPI
from routes import task_routes
from db.db_config import engine, SessionLocal, Base
from sqlalchemy import text
from db.models import Task
app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/db-test")#just test db connection
def db_test():
    with SessionLocal() as db:
        result = db.execute(text("SELECT 1")).fetchone()
        return {"db_connection": "successful" if result else "failed"}

app.include_router(task_routes.router)