class Task < ApplicationRecord
  belongs_to :list

  validates :desc, presence: true

  def initialize(*)
    super
    self.completed ||= false
  end
end
