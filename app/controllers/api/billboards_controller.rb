class Api::BillboardsController < ApplicationController

  def index
    render json: Billboard.all
  end

  def create
    billboard = Billboard.new(billboard_params)
    if billboard.save
      render json: billboard
    else
      render json: {errors: billboard.errors, status: 422 }
    end
  end

  def update
    Billboard.find(params[:id]).update
    render json: billboard
  end

  def destroy
    Billboard.find(params[:id]).destroy
    head :no_content
  end

private
  def billboard_params
    params.require(:billboard).permit(:song)
  end

end
