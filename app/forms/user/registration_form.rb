class User::RegistrationForm
  include ActiveModel::Model

  attr_accessor(
    :email,
    :password,
    :password_confirmation
  )

  validates :email, presence: true#, email: true
  validates :password, presence: true
  validates :password_confirmation, presence: true
end
