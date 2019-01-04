require 'user'

class User::Login < BaseOperation
  def self.call(email, password, warden)
    new(email, password).perform
  end

  attr_reader :email, :password, :user, :form, :warden
  def initialize(email, password, warden)
    @email = email
    @password = password
    @warden = warden
  end

  def perform
    initialize_form
    validate_form

    return failure(:validation_error, form) unless valid_form?

    find_user
    unless user
      add_error(:email, 'Not found')
      return failure(:not_found, form)
    end

    unless authenticate
      add_error(:password, 'Invalid password')
      return failure(:incorrect_password, form)
    end

    success(object: user)
  end

  private

  def initialize_form
    @form = User::LoginForm.new(email: email, password: password)
  end

  def validate_form
    form.validate
  end

  def valid_form?
    form.errors.blank?
  end

  def add_error(field, error)
    form.errors.add(field, error)
  end

  def find_user
    @user = User::Repository.find_by_email(email)
  end

  def authenticate
    binding.pry
    warden.authenticate
  end
end

