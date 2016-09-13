class AddIpToVotingSession < ActiveRecord::Migration
  def change
    add_column :voting_sessions, :ip, :string
  end
end
