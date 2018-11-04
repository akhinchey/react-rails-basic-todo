class Task < ApplicationRecord
  belongs_to :list

  validates :desc, presence: true
end
