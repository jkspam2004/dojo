class GroupsController < ApplicationController
  before_action :require_login, only: [:index, :create]

  def index
    @groups = Group.all
  end

  # create a new group
  # first person to create group should also be a member
  def create
    flash[:messages] = []
    @group = current_user.groups.new(group_params)

    if @group.save
      flash[:messages].push({ 'status' => 'success', 'text' => "Succcesfully created group" })
      if Member.create(user: current_user, group: @group)
        flash[:messages].push({ 'status' => 'success', 'text' => "Succcesfully joined group" })
      else
        flash[:messages].push({ 'status' => 'error', 'text' => "Error joining group" })
      end
    else
      errors = @group.errors.full_messages
      errors.each do |error|
        flash[:messages].push({ 'status' => 'error', 'text' => error })
      end
    end

    redirect_to "/groups" 
  end

  def show
    @group = Group.find(params[:id])
    
  end

  def destroy
    flash[:messages] = []
    group = Group.find(params[:id])

    if group.user == current_user
      if group.destroy
        flash[:messages].push({ 'status' => 'success', 'text' => "Successfully deleted group" })
      else
        flash[:messages].push({ 'status' => 'error', 'text' => "Error deleting group" })
      end
    end

    redirect_to "/groups"
  end

  private

  def group_params
    params.require(:group).permit(:name, :description)
  end
end
