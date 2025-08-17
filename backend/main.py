from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import projects, experience, dashboard
from database import models
from database.database import engine
from mangum import Mangum

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
handler = Mangum(app)

@app.get("/api/health")
def health():
    return {"status": "ok"}
# Add this for Vercel
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# Add your production frontend URL to CORS origins
origins = [
    "http://localhost:3000",
    "https://portfolio-frontend-*.vercel.app",  # Your actual frontend URL
]