from fastapi import FastAPI, Depends
from pydantic import BaseModel
import psycopg2
from typing import List, Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

# Definiendo el modelo de los datos
class Usuario_Model(BaseModel):
    Fecha: str
    Nombre: str
    FechaNacimiento: str
    Edad: int

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)

@app.post("/usuarios/", response_model=Usuario_Model)
async def create_usuario(Usuario_post: Usuario_Model, db: db_dependency):
    db_usuarios =  models.Usuario(**Usuario_post.model_dump())
    db.add(db_usuarios)
    db.commit()
    db.refresh(db_usuarios)
    return db_usuarios

# Inserta los datos en la base de datos



