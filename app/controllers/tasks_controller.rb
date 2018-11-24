class TasksController < ApplicationController

    def create
        list = List.find(params[:list_id])
        task = list.tasks.new(task_params)
        task.completed = false
        if task.save
            render json: task
        end
    end

    def update
        task = Task.find(params[:id])
        if !task.completed
            task.completed = true
            task.save
        end
    end

    private
    def task_params
        params.require(:task).permit(:desc)
    end
end
