require 'bcrypt'

Rails.application.config.middleware.insert_after ActionDispatch::Session::CookieStore, Warden::Manager do |manager|
  manager.default_strategies :password
  manager.failure_app = ->(env) { User::SessionController.action(:new).call(env) }
end

Warden::Manager.serialize_into_session do |user|
  user.id
end

Warden::Manager.serialize_from_session do |id|
  User::Repository.find(id)
end

Warden::Strategies.add(:password) do
  def valid?
    @env["action_dispatch.request.parameters"]
    params['email'] && params['password']
  end

  def authenticate!
    user = User::Repository.find_by_email(params[:email])
    if user && authenticate(user, params['password'])
      success!(user)
    else
      fail 'Invalid email or password'
    end
  end

  def authenticate(user, password)
    BCrypt::Password.new(user.password).is_password?(password) && self
  end
end
