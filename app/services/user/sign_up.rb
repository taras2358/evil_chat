require 'user'

class User::SignUp
  def initialize
    @user = User.new
  end

  def perform(params)
    @form = User::RegistrationForm.new(params)
    form.validate
    form.errors
    # save
    # return
  end
end
