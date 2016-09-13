json.extract! problem, :name, :title, :description

json.up_votes problem.votes_for.count
#
# json.up_voted current_user.voted_for? product
