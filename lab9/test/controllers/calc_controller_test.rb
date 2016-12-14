require 'test_helper'

class CalcControllerTest < ActionDispatch::IntegrationTest
  test "should get input" do
    get calc_input_url
    assert_response :success
  end

  test "should get 2" do
    get calc_view_url('v2' => '1 3 4 5 6'), xhr: true
    assert_equal assigns[:kolvo_posl], 2
  end

end
