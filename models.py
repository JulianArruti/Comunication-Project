from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database import Base

class Usuario(Base):
    __tablename__= 'Usuarios'
    id = Column(Integer, primary_key=True, index=True)
    #completar con los demas valores
    Fecha = Column(String)
    Nombre = Column(String)
    FechaNacimiento = Column(String)
    Edad = Column(int)




'''
 with conn.cursor() as cur:
                cur.execute("""
                CREATE TABLE IF NOT EXISTS Usuarios (
                    fecha DATE,
                    nombre VARCHAR(255),
                    fechaNacimiento DATE,
                    edad INT
                );
                """)
'''

