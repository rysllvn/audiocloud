class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :tracks, :title
    add_index :tracks, [:title, :user_id], unique: true
    add_foreign_key :tracks, :users
  end
end
