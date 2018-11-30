require 'product'
class Product::List
  def self.all
    Product::Repository.all
  end
end

