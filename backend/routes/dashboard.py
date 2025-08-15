from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi.responses import JSONResponse

SECRET_KEY = "107164a1e478d0a92745a90047daa96bb32803501168fb55352eb3611bad90e0"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter(default_response_class=JSONResponse)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/login")
def login():
    # هنا هتعمل تحقق من بيانات المستخدم
    return {"access_token": create_access_token({"sub": "admin"}), "token_type": "bearer"}

@router.get("/dashboard")
def dashboard(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    return {"message": "Welcome to Dashboard!"}
