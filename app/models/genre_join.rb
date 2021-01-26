class GenreJoin < ApplicationRecord

    belongs_to :genreable, polymorphic: true
    belongs_to :genre
    
end
