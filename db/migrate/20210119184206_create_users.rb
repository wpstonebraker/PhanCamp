class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_artist?, null: false, default: true
      t.string :artist_name
      t.string :language, null: false
      t.string :location
      t.text :about
      t.string :personal_url
      t.string :email, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
