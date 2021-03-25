class PagesController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end
