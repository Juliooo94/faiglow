from .controllers import TaskController
from flask import Blueprint, request, jsonify

task_controller = TaskController()
bp = Blueprint('tasks', __name__, url_prefix='/tasks')


@bp.route("", methods=["GET"])
def list_tasks():
    tasks = task_controller.get_all_tasks()
    return jsonify(tasks)


@bp.route('', methods=['POST'])
def create_task():
    data = request.json
    if not data or 'title' not in data:
        return {"error": "Missing title"}, 400
    task = task_controller.create_task(data['title'])
    return jsonify(task), 201


@bp.route('/<task_id>/complete', methods=['PATCH'])
def complete_task(task_id: str):
    try:
        task = task_controller.set_task_as_completed(task_id)
        return jsonify(task)
    except ValueError:
        return {"error": "Task not found"}, 404


@bp.route('/<task_id>', methods=['DELETE'])
def delete_task(task_id: str):
    try:
        task_controller.delete_task(task_id)
        return '', 204
    except ValueError:
        return {"error": "Task not found"}, 404


@bp.route('/completed', methods=['DELETE'])
def delete_completed_tasks():
    task_controller.delete_completed_tasks()
    return '', 204
