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
    user = User.create(username: 'ryan', password: 'qwerty')
    user1 = User.create(username: 'alpha hydrae', password: 'testerfy')
    user2 = User.create(username: 'broke for free', password: 'asdfgh')
    user3 = User.create(username: 'huma huma', password: 'badpassword')
    user4 = User.create(username: 'soft and furious', password: 'poiuyqw2')
    user5 = User.create(username: 'komiku', password: 'goodpassword')

    #User 1#########################################################################################
    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/alpha+hydrae/Alpha_Hydrae_-_02_-_Burnt_steak.mp3'
    afilename = 'Alpha_Hydrae_-_02_-_Burnt_steak.mp3'
    ipath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/images/Beck-Odelay.jpg'
    iname = 'Beck-Odelay.jpg'
    t1 = Track.new(title: 'Burnt Steak', user_id: user1.id)
    t1.audio.attach(io: open(apath), filename: afilename)
    t1.image.attach(io: open(ipath), filename: iname)
    t1.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/alpha+hydrae/Alpha_Hydrae_-_08_-_Puzzle.mp3'
    afilename = 'Alpha_Hydrae_-_08_-_Puzzle.mp3'

    t2 = Track.new(title: 'Puzzle', user_id: user1.id)
    t2.image.attach(io: open(ipath), filename: iname)
    t2.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/alpha+hydrae/Alpha_Hydrae_-_05_-_Friends_and_Apples.mp3'
    afilename = 'Alpha_Hydrae_-_05_-_Friends_and_Apples.mp3'
    t3 = Track.new(title: 'Friends and Apples', user_id: user1.id)
    t3.audio.attach(io: open(apath), filename: afilename)
    t3.image.attach(io: open(ipath), filename: iname)
    t3.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/alpha+hydrae/Alpha_Hydrae_-_07_-_Pool.mp3'
    afilename = 'Alpha_Hydrae_-_07_-_Pool.mp3'
    t4 = Track.new(title: 'Pool', user_id: user1.id)
    t4.audio.attach(io: open(apath), filename: afilename)
    t4.image.attach(io: open(ipath), filename: iname)
    t4.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/alpha+hydrae/Alpha_Hydrae_-_09_-_Tired_to_be_wild.mp3'
    afilename = 'Alpha_Hydrae_-_09_-_Tired_to_be_wild.mp3'
    t5 = Track.new(title: 'Tired to be Wild')
    t5.audio.attach(io: open(apath), filename: afilename)
    t5.image.attach(io: open(ipath), filename: iname)
    t5.save

    # #User 2#########################################################################################
    ipath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/images/The-Smashing-Pumpkins-Mellon-Collie-and-the-Infinite-Sadness.jpg'
    iname = 'The-Smashing-Pumpkins-Mellon-Collie-and-the-Infinite-Sadness.jpg'

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/Broke_For_Free_-_03_-_Day_Bird.mp3'
    aname = 'Broke_For_Free_-_03_-_Day_Bird.mp3'
    t6 = Track.new(title: 'Day Bird', user_id: user2.id)
    t6.audio.attach(io: open(apath), filename: afilename)
    t6.image.attach(io: open(ipath), filename: iname)
    t6.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/Mells_Parade.mp3'
    aname = 'Mells_Parade.mp3'
    t7 = Track.new(title: 'Mells Parade', user_id: user2.id)
    t7.audio.attach(io: open(apath), filename: afilename)
    t7.image.attach(io: open(ipath), filename: iname)
    t7.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/My_Always_Mood.mp3'
    aname = 'My_Always_Mood.mp3'
    t8 = Track.new(title: 'My Always Mood', user_id: user2.id)
    t8.audio.attach(io: open(apath), filename: afilename)
    t8.image.attach(io: open(ipath), filename: iname)
    t8.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/My_Luck.mp3'
    aname = 'My_Luck.mp3'
    t9 = Track.new(title: 'My Luck', user_id: user2.id)
    t9.audio.attach(io: open(apath), filename: afilename)
    t9.image.attach(io: open(ipath), filename: iname)
    t9.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/Night_Owl.mp3'
    aname = 'Night_Owl.mp3'
    t10 = Track.new(title: 'Night Owl', user_id: user2.id)
    t10.audio.attach(io: open(apath), filename: afilename)
    t10.image.attach(io: open(ipath), filename: iname)
    t10.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/Broke_For_Free/Only_Instrumental.mp3'
    aname = 'Only_Instrumental.mp3'
    t11 = Track.new(title: 'Only Instrumental', user_id: user2.id)
    t11.audio.attach(io: open(apath), filename: afilename)
    t11.image.attach(io: open(ipath), filename: iname)
    t11.save

    #User 3################################################################################################
    ipath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/images/A-Tribe-Called-Quest-The-Low-End-Theory.jpg'
    iname = 'A-Tribe-Called-Quest-The-Low-End-Theory.jpg'

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/huma_huma/Grassy_Hill.mp3'
    afilename = 'Grassy_Hill.mp3'
    t12 = Track.new(title: 'track12', user_id: user3.id)
    t12.audio.attach(io: open(apath), filename: afilename)
    t12.image.attach(io: open(ipath), filename: iname)
    t12.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/huma_huma/Half_Pipe.mp3'
    afilename = 'Half_Pipe.mp3'
    t13 = Track.new(title: 'track13', user_id: user3.id)
    t13.audio.attach(io: open(apath), filename: afilename)
    t13.image.attach(io: open(ipath), filename: iname)
    t13.save

    apath = 'https://audiocloud-seeds.s3-us-west-1.amazonaws.com/audio/huma_huma/It_s_All_Happening.mp3'
    afilename = 'It_s_All_Happening.mp3'
    t14 = Track.new(title: 'track14', user_id: user3.id)
    t14.audio.attach(io: open(apath), filename: afilename)
    t14.image.attach(io: open(ipath), filename: iname)
    t14.save

end