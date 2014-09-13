require 'sinatra'

class Wreqr < Sinatra::Base
  set :public_folder, File.dirname(__FILE__) + '/public'

  get '/' do
    erb :index
  end
end

Wreqr.run!
