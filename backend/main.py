from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import projects, experience, dashboard
from database import models
from database.database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Update CORS for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this with your actual frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(dashboard.router)
app.include_router(experience.router)

# Add this for Vercel
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)