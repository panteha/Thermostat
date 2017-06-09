require 'json'
require 'sinatra/base'
require 'sinatra/cross_origin'




class Thermostat < Sinatra::Base

     enable :sessions

   before do
     response.headers['Access-Control-Allow-Origin'] = '*'
   end

   get '/' do
    #  redirect '/temperature'
    'Welcome!'
   end

   get '/temperature' do
     23.to_json
   end

   post '/' do
     param[temp]
   end


   run! if app_file == $0
end
