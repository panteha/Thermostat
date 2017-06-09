require 'json'
require 'sinatra/base'
require 'sinatra/cross_origin'




class Thermostat < Sinatra::Base

     enable :sessions

     result = []

   before do
     response.headers['Access-Control-Allow-Origin'] = '*'
   end

   get '/' do
    #  redirect '/temperature'
    'Welcome!'
    # p '1', session[:temp]
    #  session[:temp] = 23.to_json

   end

   get '/temperature' do
    #   p '2', session[:temp]
    #  session[:temp]
    23.to_json
   end

   post '/temperature' do
      result << JSON.parse(params[:saved_temperature])
      # p session[:temp]
      p result
      redirect 'temperature'
   end


   run! if app_file == $0
end
