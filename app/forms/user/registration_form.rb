class User::RegistrationForm
  include ActiveModel::Model
  include ActiveModel::SecurePassword

  def initialize(params)
    params.slice(:email, :password, :password_confirmation)
  end

  attr_accessor(
    :email,
    :password,
    :password_confirmation,
    :password_digest
  )

  has_secure_password

  validates :email, presence: true#, email: true
  validates :password, presence: true
  validates :password_confirmation, presence: true

  # validate :email_uniqueness

  def email_uniqueness
    User::Repository.find_by(email: email)
  end
end
