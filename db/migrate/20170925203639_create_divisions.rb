class CreateDivisions < ActiveRecord::Migration[5.1]
  def change
    create_table :divisions do |t|
      t.string :name
      t.string :competition_type
      t.integer :number_of_teams
      t.belongs_to :tournament, foreign_key: true

      t.timestamps
    end
  end
end
