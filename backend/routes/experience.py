from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import models
from database import experience_schema as schemas
from database.database import get_db
router = APIRouter(
    prefix="/experiences",
    tags=["experiences"]
)
@router.post("/", response_model=schemas.Experience)
def create_experience(experience: schemas.ExperienceCreate, db: Session = Depends(get_db)):
    db_experience = models.Experiences(**experience.dict(exclude={"live_url"}))
    db.add(db_experience)
    db.commit()
    db.refresh(db_experience)
    return db_experience
@router.delete("/{experience_id}")
def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    experience = db.query(models.Experiences).filter(models.Experiences.id == experience_id).first()
    if experience is None:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(experience)
    db.commit()
@router.get("/", response_model=List[schemas.Experience])
def get_experience(db: Session = Depends(get_db)):
    experience = db.query(models.Experiences).all()
    return experience
@router.put("/{experience_id}", response_model=schemas.Experience)
def update_experience(experience_id: int, experience: schemas.ExperienceCreate, db: Session = Depends(get_db)):
    db_experience = db.query(models.Experiences).filter(models.Experiences.id == experience_id).first()
    if db_experience is None:
        raise HTTPException(status_code=404, detail="Experience not found")
    for key, value in experience.dict(exclude={"live_url"}).items():
        setattr(db_experience, key, value)
    db.commit()
    db.refresh(db_experience)
    return db_experience


