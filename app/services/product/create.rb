require 'product'
class Product::Create
  def self.call(attrs)
    entity = Product::Entity.new(attrs)
    Product::Repository.create(entity)
  end
end
