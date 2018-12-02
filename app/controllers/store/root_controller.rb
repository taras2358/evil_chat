class Store::RootController < ApplicationController
  def index
    @store = Store::Index.new(view_context)
    @products = @store.products
  end
end
