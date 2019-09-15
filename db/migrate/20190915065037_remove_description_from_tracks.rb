class RemoveDescriptionFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :description, :string
  end
end
