class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.integer :year, null: false
      t.integer :price, null: false, default: 0
      t.text :description
      t.text :credits, null: false
      

      t.timestamps
    end
    add_index :albums, [:title, :artist_id], unique: true
  end
end
