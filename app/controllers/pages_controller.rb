class PagesController < ApplicationController
  def index
    render inertia: "Index"
  end

  def features
    render inertia: "Features"
  end

  def help
    render inertia: "Help"
  end
end
