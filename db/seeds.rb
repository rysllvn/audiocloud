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

    user2 = User.new
    user2.username = 'Broke for Free'
    user2.password = SecureRandom.base64
    user2.save

    track1 = Track.new
    track1.title = 'Night Owl'
    track1.description = 'Directionless EP'
    track1.user_id = user2.id
    track1.save

    track2 = Track.new
    track2.title = 'My Always Mood'
    track2.description = 'Directionless EP'
    track2.user_id = user2.id
    track2.save

    track3 = Track.new
    track3.title = 'Day Bird'
    track3.description = 'Directionless EP'
    track3.user_id = user2.id
    track3.save

    track4 = Track.new
    track4.title = 'My Luck'
    track4.description = 'Directionless EP'
    track4.user_id = user2.id
    track4.save

    track5 = Track.new
    track5.title = 'Mells Parade'
    track5.description = 'Directionless EP'
    track5.user_id = user2.id
    track5.save

    track6 = Track.new
    track6.title = 'Only Instrumental'
    track6.description = 'Directionless EP'
    track6.user_id = user2.id
    track6.save

end