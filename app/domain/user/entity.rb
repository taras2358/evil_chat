require 'user'
class User::Entity
  attr_reader :email, :password
  def initialize(attrs)
    @email = attrs[:email]
    @password = attrs[:password]
  end
end
