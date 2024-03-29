json.track do
    json.extract! @track, :id, :title, :user_id, :created_at
    json.audioUrl url_for(@track.audio)
    json.imageUrl url_for(@track.image) if @track.image.attached?
end

json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :username
            json.imageUrl url_for(user.image) if user.image.attached?
        end
    end
end

json.comments do
    @comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :user_id, :track_id, :body, :updated_at, :created_at
        end
    end
end