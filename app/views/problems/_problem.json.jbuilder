json.extract! problem, :name, :title, :description, :id

json.up_votes problem.votes_for.count
#
# json.up_voted @voter.voted_for? problem
