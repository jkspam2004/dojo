require "rails_helper"

RSpec.describe "deleting anime" do
  it "should delete anime and redirect to animes page" do
    Animee.create(name: "Naruto")
     
    visit "/animes"
    expect(page).to have_text("Naruto")
    click_button "delete"
    expect(page).to_not have_text("Naruto") 
  end
end
