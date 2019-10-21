class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end

    add_index :comments, :track_id
    add_foreign_key :comments, :users
    add_foreign_key :comments, :tracks
  end
end
