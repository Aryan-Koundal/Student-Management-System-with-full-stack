from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes.routes_1 import blueprint

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "mysql+mysqlconnector://root:%40%23aryan_3039@localhost/student_management"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


app.register_blueprint(blueprint)


with app.app_context():
    try:
        db.engine.connect()
        print("Database connected successfully!")
    except Exception as e:
        print("Database connection failed:", e)

if __name__=="__main__":
    app.run(debug=True)