json.track do
    json.extract! @track, :id, :title, :user_id
    json.audioUrl url_for(@track.audio)
    json.imageUrl url_for(@track.image) if @track.image.attached?
end

json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :user_id, :track_id, :body
        end
    end
end