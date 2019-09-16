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
    Track.destroy_all
    User.destroy_all
    user1 = User.create(username: 'ryan', password: 'qwerty')
    user2 = User.create(username: 'radiofoot', password: 'asdfgh')
    user3 = User.create(username: 'nerdvana', password: 'wtfwtf2')

    t1 = Track.new(title: 'track1', user_id: user1.id)
    t1.audio.attach(io: File.open(Rails.root.join('app','assets','audio','1.mp3')), filename: '1.mp3')
    t1.save

    t2 = Track.new(title: 'track2', user_id: user1.id)
    t2.audio.attach(io: File.open(Rails.root.join('app','assets','audio','2.mp3')), filename: '2.mp3')
    t2.save

    t3 = Track.new(title: 'track3', user_id: user1.id)
    t3.audio.attach(io: File.open(Rails.root.join('app','assets','audio','3.mp3')), filename: '3.mp3')
    t3.save

    t4 = Track.new(title: 'track4', user_id: user1.id)
    t4.audio.attach(io: File.open(Rails.root.join('app','assets','audio','4.mp3')), filename: '4.mp3')
    t4.save

    t5 = Track.new(title: 'track5', user_id: user1.id)
    t5.audio.attach(io: File.open(Rails.root.join('app','assets','audio','5.mp3')), filename: '5.mp3')
    t5.save

    t6 = Track.new(title: 'track6', user_id: user2.id)
    t6.audio.attach(io: File.open(Rails.root.join('app','assets','audio','6.mp3')), filename: '6.mp3')
    t6.save

    t7 = Track.new(title: 'track7', user_id: user2.id)
    t7.audio.attach(io: File.open(Rails.root.join('app','assets','audio','7.mp3')), filename: '7.mp3')
    t7.save

    t8 = Track.new(title: 'track8', user_id: user2.id)
    t8.audio.attach(io: File.open(Rails.root.join('app','assets','audio','8.mp3')), filename: '8.mp3')
    t8.save

    t9 = Track.new(title: 'track9', user_id: user2.id)
    t9.audio.attach(io: File.open(Rails.root.join('app','assets','audio','9.mp3')), filename: '9.mp3')
    t9.save

    t10 = Track.new(title: 'track10', user_id: user2.id)
    t10.audio.attach(io: File.open(Rails.root.join('app','assets','audio','10.mp3')), filename: '10.mp3')
    t10.save

    t11 = Track.new(title: 'track11', user_id: user2.id)
    t11.audio.attach(io: File.open(Rails.root.join('app','assets','audio','11.mp3')), filename: '11.mp3')
    t11.save

    t12 = Track.new(title: 'track12', user_id: user3.id)
    t12.audio.attach(io: File.open(Rails.root.join('app','assets','audio','12.mp3')), filename: '12.mp3')
    t12.save

    t13 = Track.new(title: 'track13', user_id: user3.id)
    t13.audio.attach(io: File.open(Rails.root.join('app','assets','audio','13.mp3')), filename: '13.mp3')
    t13.save

    t14 = Track.new(title: 'track14', user_id: user3.id)
    t14.audio.attach(io: File.open(Rails.root.join('app','assets','audio','14.mp3')), filename: '14.mp3')
    t14.save

end