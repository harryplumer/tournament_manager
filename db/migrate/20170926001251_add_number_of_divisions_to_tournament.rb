class AddNumberOfDivisionsToTournament < ActiveRecord::Migration[5.1]
  def change
    add_column :tournaments, :number_of_divisions, :integer
  end
end
