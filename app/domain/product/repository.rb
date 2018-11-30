require 'product'
class Product::Repository
  class << self
    def all
      # Product.find_each.lazy.map &method(:map_record)
      Product.find_each.lazy.map do |record|
        Product::Repository.map_record(record)
      end
    end

    def create(entity)
      Product.new.tap do |p|
        p.name = entity.name
        p.description = entity.description
      end.save
    end

    def map_record(record)
      Product::Entity.new(record.attributes.symbolize_keys)
    end
  end
end
