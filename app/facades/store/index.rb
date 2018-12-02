require 'product'
class Store::Index
  attr_reader :products
  def initialize(view_context)
    products = Product::List.all
    @products = ProductPresenter.collection(products, view_context)
  end

  def products
    @products.map { |p| p.to_hash }
  end
end
