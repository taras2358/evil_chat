require 'product'
class Store::Index
  attr_reader :products
  def initialize
    @products = Product::List.all
  end
end
