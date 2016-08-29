class AngeloController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger" }
    puts current_user.inspect
  end
end
