json.problems do
  json.array! @problems.order(cached_votes_up: :desc) do |problem|
    json.partial! "problems/problem", problem: problem
  end
end
