from .db import db
from .routes import bp as task_bp

from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"

    db.init_app(app)

    from . import models

    with app.app_context():
        db.create_all()

    app.register_blueprint(task_bp)
    return app
