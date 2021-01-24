class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :track_name, null: false
      t.integer :track_num, null: false
      t.integer :price, null: false, default: 0
      t.integer :album_id, null: false

      t.timestamps
    end

    add_index :tracks, :album_id
  end
end
