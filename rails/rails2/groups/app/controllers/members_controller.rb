class MembersController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  # join a group
  def create
    flash[:messages] = []

    group = Group.find(member_params[:group_id])
    if group.members.exists?(user: current_user)
      flash[:messages].push({ 'status' => 'error', 'text' => "Already part of group" })
    else
      if group.members.create(user: current_user)
        flash[:messages].push({ 'status' => 'success', 'text' => "Successfully joined group" })
      else
        flash[:messages].push({ 'status' => 'error', 'text' => "Error joining group" })
      end
    end
    redirect_to "/groups/#{member_params[:group_id]}"
  end

  # leave a group
  def destroy
    flash[:messages] = []

    group = Group.find(member_params[:group_id])

    # can only leave a group that you have joined
    if group.members.where(user: current_user).first
      if group.members.where(user: current_user).first.destroy
        flash[:messages].push({ 'status' => 'success', 'text' => "Successfully left group" })
      else # unsuccesful destroy
        flash[:messages].push({ 'status' => 'error', 'text' => "Error leaving group" })
      end
    else # group that i was not a member of
        flash[:messages].push({ 'status' => 'error', 'text' => "Error not part of group" })
    end
    redirect_to "/groups/#{member_params[:group_id]}"
  end

  private

  def member_params
    params.require(:member).permit(:group_id)
  end
end
