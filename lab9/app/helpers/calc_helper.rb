module CalcHelper

  def processing(v)
    result = v.split(' ').map(&:to_i)
        .split{|el| Math::log(el,5).modulo(1).nonzero?}
        .reject(&:empty?)
    @kolvo_posl = result.size
    return unless @kolvo_posl.nonzero?
    @inputed = params[:v2].split(' ')
    @max_posl = result.max_by(&:size).join(', ')
    @all = result.map(&:to_s).join(', ')
  end

end