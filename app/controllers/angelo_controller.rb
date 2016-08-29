class AngeloController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
  end
end
