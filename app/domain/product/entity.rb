require 'product'
class Product::Entity
  attr_reader :name, :description
  def initialize(attrs)
    @name = attrs[:name]
    @description = attrs[:description]
  end
end

