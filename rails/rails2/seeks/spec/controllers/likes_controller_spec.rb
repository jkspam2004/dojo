require 'rails_helper'

RSpec.describe LikesController, type: :controller do
  before do
    @user = create_user
    @wrong_user = create_user("julius", "julius@lakers.com")
    @secret1 = @wrong_user.secrets.create(content: 'Oops')
    @secret2 = @user.secrets.create(content: 'I did it again')
    @like = @user.likes.create(user: @user, secret: @secret1)
    @like2 = @wrong_user.likes.create(user: @wrong_user, secret: @secret2)
  end
  describe "when not logged in" do
    before do
    end
    it "cannot like a secret" do
      post :create
      expect(response).to redirect_to('/sessions/new')
    end
    it "cannot unlike a secret" do
      delete :destroy, id: @like
      expect(response).to redirect_to('/sessions/new')
    end
  end

  describe "when signed in as the wrong user" do
    before do
      session[:user_id] = @wrong_user.id
    end
    it "cannot unlike someone else's liked secret" do
      delete :destroy, id: @secret1
      expect(response).to redirect_to("/users/#{session[:user_id]}")
    end
    it "cannot like someone else's unliked secret" do
      # this is how you pass over nested parameters...
      # the view template has this set up: <input name="like[secret_id]" type="hidden" .. >
      # the controller is requiring strong parameters: params.require(:like).permit(:secret_id)
      post :create, secret_id: @secret2.id, like: { secret_id: @secret2.id } 
      expect(response).to redirect_to("/users/#{session[:user_id]}")
    end
  end
end
