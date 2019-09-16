class Track < ApplicationRecord
    validates :title, :user_id, presence: true
    validate :ensure_audio

    belongs_to :user
    has_one_attached :audio
    has_one_attached :image

    def ensure_audio
        unless self.audio.attached?
            errors[:audio] << "must be attached"
        end
    end
end
