json.boards do |board|
  json.extract! board, :id, :title, :user_id
end
