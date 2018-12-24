class User::LoginForm
  include ActiveModel::Model

  def initialize(params)
    params = params.slice(:email, :password)
    super
  end

  attr_accessor(
    :email,
    :password
  )

  validates :email, presence: true
  validates :password, presence: true
end

