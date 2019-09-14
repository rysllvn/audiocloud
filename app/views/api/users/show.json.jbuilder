json.id @user.id
json.username @user.username

json.tracks do
    @user.tracks.each do |track|
        json.set! track.id do
            json.extract! track, :id, :title, :description
        end
    end
end