class HellosController < ApplicationController
  def index
    #render html: "<h1>Hello</h1>".html_safe
    render text: "Hello CodingDojo"
  end

end


# rails g controller Hellos
