class ListsController < ApplicationController

    def index
        @lists = List.all
        respond_to do |format|
            format.html
            format.json { render json: @lists }
            # format.json { render json: @lists }
        end
    end

    def show
        @list = List.find(params[:id])
    end

    def create
        puts "hello"
        @list = List.new(list_params)
        if @list.save
            render json: @list
        else
            puts @list.errors.full_messages
            redirect_to 'new'
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
