require 'user'

class User::SignUp < BaseOperation
  attr_reader :form, :params, :user
  def initialize(params)
    @params = params
  end

  def perform
    initialize_form
    validate_form

    return failure(:validation_error, form) unless valid_form?

    create_user
    success(object: user)
  end

  private

  def initialize_form
    @form = User::RegistrationForm.new(params.permit!)
  end

  def validate_form
    form.validate
  end

  def valid_form?
    form.errors.blank?
  end

  def create_user
    @user = User::Repository.create(email: @form.email, password: @form.password_digest)
  end
end
