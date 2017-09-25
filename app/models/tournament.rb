class Tournament < ApplicationRecord
  has_many :divisions, dependent: :destroy
end
