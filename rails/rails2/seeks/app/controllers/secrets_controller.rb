class SecretsController < ApplicationController
  before_action :require_login, only: [:index, :create, :destroy]

  def index
    @secrets = Secret.all    
  end

  def create
    flash[:messages] = []
    @secret = current_user.secrets.new(secret_params)
  
    if @secret.save
      flash[:messages].push({ 'status' => 'success', 'text' => "Succcesfully added secret" })
    else
      errors = @secret.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => 'error', 'text' => error })
      end
    end

    redirect_to "/users/#{current_user.id}"

  end

  def destroy
    flash[:messages] = []
    secret = Secret.find(params[:id])

    if secret.user == current_user
      secret.destroy
      flash[:messages].push({ 'status' => 'success', 'text' => "Succcesfully deleted secret" })
    end
    redirect_to "/users/#{current_user.id}"  
  end

  private
  def secret_params
    params.require(:secret).permit(:content)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
