json.problems do
  json.array! @problems do |problem|
    json.partial! "problems/problem", problem: problem
  end
end
