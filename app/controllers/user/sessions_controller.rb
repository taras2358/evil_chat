class User::SessionsController < ApplicationController
  def new
  end

  def create
    login = User::Login.new(params[:email], params[:password], request.env['warden'])
    result = login.perform

    if result.success?
      head :created
    else
      render json: { errors: result.object.errors.messages }, status: :bad_request
    end
  end
end
