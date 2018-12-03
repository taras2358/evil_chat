require 'user'
class User::Repository
  class << self
    def all
      # Product.find_each.lazy.map &method(:map_record)
      User.find_each.lazy.map do |record|
        User::Repository.map_record(record)
      end
    end

    def create(email:, password:)
      user = User.new.tap do |r|
        r.email = email
        r.password = password
      end
      map_record(user)
    end

    def map_record(record)
      User::Entity.new(record.attributes.symbolize_keys)
    end
  end
end

