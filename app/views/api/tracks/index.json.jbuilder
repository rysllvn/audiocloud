json.tracks do
    @tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :user_id
            json.audioUrl url_for(track.audio)
        end
    end
end

json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username
        end
    end
end