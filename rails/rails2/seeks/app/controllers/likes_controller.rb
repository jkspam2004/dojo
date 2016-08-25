class LikesController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  # like a secret
  def create
    secret = Secret.find(like_params[:secret_id])
    if secret.likes.exists?(user: current_user)
      redirect_to "/users/#{current_user.id}"
    else
      if secret.likes.create(user: current_user)
        redirect_to "/secrets"
      else
        redirect_to "/users/#{current_user.id}"
      end
    end
  end

  # unlike a secret
  def destroy
    secret = Secret.find(params[:id])

    # can only unlike a secret that you have liked
    if secret.likes.where(user: current_user).first
      if secret.likes.where(user: current_user).first.destroy
        redirect_to "/secrets"
      else # unsuccesful destroy
        redirect_to "/users/#{current_user.id}"
      end
    else # secret not liked by me
      redirect_to "/users/#{current_user.id}"
    end
  end

  private

  def like_params
    params.require(:like).permit(:secret_id)
  end

end
