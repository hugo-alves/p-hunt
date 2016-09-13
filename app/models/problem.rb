class Problem < ActiveRecord::Base
  validates_presence_of :title
  validates_presence_of :description
  acts_as_votable
end
