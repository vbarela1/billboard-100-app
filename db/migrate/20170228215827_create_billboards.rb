class CreateBillboards < ActiveRecord::Migration[5.0]
  def change
    create_table :billboards do |t|
      t.string :song

      t.timestamps
    end
  end
end
