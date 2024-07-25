from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


URL_DATABASE = 'postgresql://postgres:1230@localhost:5432/ComunicacionesAPP'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit= False, autoflush=False, bind= engine)

Base = declarative_base()

'''
def get_db_connection():
    try:
        with psycopg2.connect(
            host="localhost",
            database="postgres",
            user="postgres",
            password="1230",
            port = 5432
'''