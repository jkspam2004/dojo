require 'test_helper'

class RpgsControllerTest < ActionController::TestCase
  test "should get farm" do
    get :farm
    assert_response :success
  end

  test "should get cave" do
    get :cave
    assert_response :success
  end

  test "should get casion" do
    get :casion
    assert_response :success
  end

  test "should get house" do
    get :house
    assert_response :success
  end

end
