class Api::CommentsController < ApplicationController
  def index
    @comments = Restaurant.find(params[:restaurant_id]).comments
  end
end
