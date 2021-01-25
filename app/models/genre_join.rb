class GenreJoin < ApplicationRecord

    belongs_to :genreable, polymorphic: true
    
end
