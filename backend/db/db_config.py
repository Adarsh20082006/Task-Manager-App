from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import urllib.parse 
from dotenv import load_dotenv
import os

load_dotenv()

safe_password = urllib.parse.quote_plus(os.getenv("DATABASE_PASSWORD"))
DATABASE_URL = f"mysql+pymysql://{os.getenv('DATABASE_USER')}:{safe_password}@localhost:3306/task_manager_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()