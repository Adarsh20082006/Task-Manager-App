from sqlalchemy import Column, Integer, String, DateTime, func
from .db_config import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(26), unique=True, nullable=False)
    description = Column(String(50), nullable=True)
    status = Column(String(10), default="Pending") # Pending, Completed
    created_at = Column(DateTime, default=func.now())