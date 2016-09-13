class CreateVotingSessions < ActiveRecord::Migration
  def change
    create_table :voting_sessions do |t|

      t.timestamps null: false
    end
  end
end
