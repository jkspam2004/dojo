gem_group :development, :test do
  gem "hirb"
  gem 'rails-footnotes', '>= 4.0.0', '<5'
  gem 'quiet_assets'
  gem 'rspec'
  gem 'rspec-rails'#, :require => false 
  # add require false to fix "irb: warn: can't alias context irb_context"
  # with require false, however, spec/models dir does not get created
  # if rspec:install stalls, run `spring stop`
  gem 'capybara'
  gem 'byebug' # call anywhere in code to stop execution with debugger console
  gem 'selenium-webdriver', '~> 2.40.0'
  gem 'database_cleaner'
end
gem 'bcrypt', '~> 3.1.7'
