json.extract! @board, :id, :title, :user_id
json.lists @board.lists, :title
