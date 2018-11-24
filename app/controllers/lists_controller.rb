require "pry"

class ListsController < ApplicationController

    def index
        lists = List.all
        respond_to do |format|
            format.html
            format.json { render json: lists }
        end
    end

    def show
        @list = List.find(params[:id])
    end

    def create
        list = List.new(list_params)
        if list.save
            render json: list
        else
            render json: { errors: list.errors.full_messages }
        end
    end

    def destroy
        List.destroy(params[:id])
    end

    private
    def list_params
        params.require(:list).permit(:id, :title)
    end

end
