class PagesController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end
end
