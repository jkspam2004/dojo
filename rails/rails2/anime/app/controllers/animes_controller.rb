class AnimesController < ApplicationController
  def index
    @animes = Animee.all
  end

  def new
  end

  def create
    Animee.create(name: params[:name])
    redirect_to "/animes"
  end

  def show
    @anime = Animee.find(params[:id])
  end

  def edit
    @anime = Animee.find(params[:id])
  end

  def update
    anime = Animee.find(params[:id])
    anime.name = params[:name]
    anime.save

    redirect_to "/animes"
  end

  def destroy
    anime = Animee.find(params[:id])
    anime.destroy
    redirect_to "/animes"
  end
end
