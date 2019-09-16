# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

ActiveRecord::Base.transaction do
    User.destroy_all
    user1 = User.create(username: 'ryan', password: 'qwerty')
    user2 = User.create(username: 'Broke for Free', password: SecureRandom::base64)

    Track.destroy_all
end