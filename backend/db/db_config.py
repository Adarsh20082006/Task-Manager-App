from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import urllib.parse 

safe_password = urllib.parse.quote_plus("Adarsh@2006")
DATABASE_URL = f"mysql+pymysql://root:{safe_password}@localhost:3306/task_manager_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()