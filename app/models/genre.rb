class Genre < ApplicationRecord

    belongs_to :genreable, polymorphic: true
    has_many :genre_joins
    has_many :users, through: :genre_joins, source: :genreable, source_type: 'User'
    has_many :albums, through: :genre_joins, source: :genreable, source_type: 'Album'
    has_many :tracks, through: :genre_joins, source: :genreable, source_type: 'Track'

end
