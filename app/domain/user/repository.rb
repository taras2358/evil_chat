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
      user.save
      map_record(user)
    end

    def find_by_email(email)
      record = User.find_by_email(email)
      map_record(record) if record
    end

    def find(id)
      record = User.find_by(id: id)
      map_record(record) if record
    end

    private

    def map_record(record)
      User::Entity.new(record.attributes.symbolize_keys)
    end
  end
end

