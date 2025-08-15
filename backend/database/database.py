from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, Float

engine = create_engine('sqlite:///database.db', echo=False)
Sessionlocal=sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db=Sessionlocal()
    try:
        yield db
    finally:
        db.close()

