from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import projects,experience
from database import models
from database.database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(experience.router)