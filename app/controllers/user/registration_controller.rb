class User::RegistrationController < ApplicationController
  def new
  end

  def create
    sign_up = User::SignUp.new(params)
    result = sign_up.perform

    if result.success?
      redirect_to root_path
    else
      render json: { errors: result.object.errors.messages }, status: :bad_request
    end
  end
end
