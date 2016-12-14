include CalcHelper
class CalcController < ApplicationController
  def input
  end

  def view
    processing(params[:v2])
        render json: {
            all: @all,
            kolvo_posl: @kolvo_posl,
            inputed: @inputed,
            max_posl: @max_posl
        }
  end
end
