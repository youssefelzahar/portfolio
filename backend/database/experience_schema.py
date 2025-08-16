from pydantic import BaseModel
from typing import Optional

class ExperienceBase(BaseModel):
    title: str
    description: str
    company: str
    start_date: str
    end_date: Optional[str] = None

class ExperienceCreate(ExperienceBase):
    pass

class ExperienceUpdate(ExperienceBase):
    pass

class Experience(ExperienceBase):
    id: int
    created_at: str
    updated_at: str

    class Config:
        from_attributes = True