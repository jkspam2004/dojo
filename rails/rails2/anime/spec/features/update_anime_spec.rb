require "rails_helper"

RSpec.describe "updating anime" do
  it "should update anime and redirect to animes page" do
    anime = Animee.create(name: "Naruto")
     
    visit "/animes/#{anime.id}/edit"
    fill_in "Name", with: "Naruta"
    click_button "Update Anime"
    expect(current_path).to eq("/animes") 
    expect(page).to have_text("Naruta")
  end
end
