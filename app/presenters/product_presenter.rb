class ProductPresenter < BasePresenter
  def self.collection(products, view_context)
    products.lazy.map { |product| map_record(product, view_context) }
  end

  def self.map_record(product, view_context)
    self.new(product, view_context)
  end

  def to_hash
    { name: name, description: description }
  end
end
