class PagesController < ApplicationController
  def index
    render inertia: "Index"
  end
end
