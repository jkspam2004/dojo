require "rails_helper"

RSpec.describe "anime show page" do
  it "displays information about anime" do
    anime = Animee.create(name: "Naruto")

    visit "/animes/#{anime.id}"
    expect(page).to have_text(anime.name)
  end
end
