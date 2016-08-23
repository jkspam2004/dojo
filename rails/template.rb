gem_group :development, :test do
  gem "hirb"
  gem 'rails-footnotes', '>= 4.0.0', '<5'
  gem 'quiet_assets'
  gem 'rspec'
  gem 'rspec-rails', :require => false
  # add require false to fix "irb: warn: can't alias context irb_context"
  gem 'capybara'
end
