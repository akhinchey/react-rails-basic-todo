class ListsController < ApplicationController
    def index
        @lists = List.all
    end

    def show
        @list = List.find(params[:id])
    end

    def new
        @list = List.new(list_params)
        if @list.save
        else
        end
    end

    def create
    end

    private
    def list_params
        params.require(:list).permit(:title)
    end

end
