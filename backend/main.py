from fastapi import FastAPI
from db.db_config import engine, SessionLocal, Base
from sqlalchemy import text
from db.models import Task
app = FastAPI()

#TEST DB CONNECTION
Base.metadata.create_all(bind=engine)

#log db connection

@app.get("/")   
def index():
    try:
        db = SessionLocal()
        query = text("SELECT 1")
        db.execute(query)
        print("Database connection successful!")
    except Exception as e:
        print(f"Database connection failed: {e}")
    return {"message": "Hello, World!"}