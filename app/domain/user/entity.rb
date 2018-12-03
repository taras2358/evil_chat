require 'user'
class User::Entity
  attr_reader :email
  def initialize(attrs)
    @email = attrs[:email]
  end
end
