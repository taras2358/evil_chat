class Store::RootController < ApplicationController
  def index
    @store = Store::Index.new
  end
end
