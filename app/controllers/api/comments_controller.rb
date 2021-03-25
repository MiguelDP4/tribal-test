class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @comments = Restaurant.find(params[:restaurant_id]).comments
  end

  def create
    @new_comment = Comment.new(comment_params)
    @new_comment.restaurant_id = params[:restaurant_id]
    if @new_comment.save
      @new_comment
    else
      @new_comment.errors
      # render json: {status: 'ERROR', message: 'Comment not saved', data: new_comment.errors}, status: :unprocessable_entry
    end
  end

  def comment_params
    params.require(:comment).permit(:name, :content, :restaurant_id)
  end
end
