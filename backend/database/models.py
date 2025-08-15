from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.sql import func
from database.database import Base

class Projects(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    github_url=Column(String)
    image_url=Column(String)
    technologies = Column(String)
    start_date = Column(String)
    end_date = Column(String)
    created_at = Column(String, server_default=func.now())
    updated_at = Column(String, server_default=func.now())
class Experiences(Base):
    __tablename__ = "experiences"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    company = Column(String)
    start_date = Column(String)
    end_date = Column(String)
    created_at = Column(String, server_default=func.now())
    updated_at = Column(String, server_default=func.now())
        
