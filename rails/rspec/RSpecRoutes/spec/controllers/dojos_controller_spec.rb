require 'rails_helper'

RSpec.describe DojosController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #world" do
    it "returns http success" do
      get :world
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #ninjas" do
    it "returns http success" do
      get :ninjas
      expect(response).to have_http_status(:success)
    end
  end

  describe "routing" do 
    it "routes / to the dojos controller" do
      expect(:get => "/").to route_to("dojos#index")
    end

    it "routes /hello to #world" do
      expect(:get => "/hello").to route_to("dojos#world")
    end 

    it "routes /ninjas to #ninjas" do
      expect(:get => "/ninjas").to route_to(:controller => "dojos", :action => "ninjas")
    end 
  end
   
end
