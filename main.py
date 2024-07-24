from fastapi import FastAPI
from pydantic import BaseModel
import psycopg2

# Definiendo el modelo de los datos
class Usuario(BaseModel):
    fecha: str
    nombre: str
    fechaNacimiento: str
    edad: int

app = FastAPI()

def get_db_connection():
    try:
        with psycopg2.connect(
            host="localhost",
            database="postgres",
            user="postgres",
            password="1230",
            port = 5432
        ) as conn:
            with conn.cursor() as cur:
                cur.execute("""
                CREATE TABLE IF NOT EXISTS Usuarios (
                    fecha DATE,
                    nombre VARCHAR(255),
                    fechaNacimiento DATE,
                    edad INT
                );
                """)
                conn.commit()
    except psycopg2.Error as e:
        print(f"Ocurrió un error al conectar con la base de datos: {e}")
    return conn

@app.post("/usuarios/")
async def create_usuario(usuario: Usuario):
    conn = get_db_connection()
    cur = conn.cursor()



    # Inserta los datos en la base de datos
    cur.execute(
        "INSERT INTO Usuarios (fecha, nombre, fechaNacimiento, edad) VALUES (%s, %s, %s, %s)",
        (usuario.fecha, usuario.nombre, usuario.fechaNacimiento, usuario.edad)
    )

    conn.commit()
    cur.close()
    conn.close()

    return {"message": "Usuario creado con éxito"}


