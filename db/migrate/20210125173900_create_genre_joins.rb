class CreateGenreJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_joins do |t|
      t.integer :genre_id, null: false
      t.integer :genreable_id, null: false
      t.string :genreable_type, null: false

      t.timestamps
    end

    add_index :genre_joins, :genre_id
  end
end
