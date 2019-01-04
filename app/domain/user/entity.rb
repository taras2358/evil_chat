require 'user'
class User::Entity
  attr_reader :email, :password, :id
  def initialize(attrs)
    @email = attrs[:email]
    @password = attrs[:password]
    @id = attrs[:id]
  end
end
