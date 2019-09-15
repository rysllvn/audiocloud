# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    user1 = User.new
    user1.username = 'demo_user'
    user1.password = 'goodpass'
    user1.save

    track1 = Track.new
    track1.title = 'Night Owl'
    track1.user_id = user1.id
    track1.save
    track1.audio.attach(io: File.open(Rails.root.join('app','assets','audio','Broke_For_Free','Night_Owl.mp3')), filename: "Night_Owl.mp3")
end