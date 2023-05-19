import React from "react";
import axios from "axios";
import paylogo from "../../../images/payment/payment_icon_yellow_small.png";
import "../../../css/payment.css";
// import Ticket_Modal from "../user/Payment/Payment_Ticket_Modal";

class Payment extends React.Component {
  state = {
    // 응답에서 가져올 값들
    next_redirect_pc_url: "",
    tid: "",
    // 요청에 넘겨줄 매개변수들
    params: {
      cid: "TC0ONETIME",
      partner_order_id: "partner_order_id",
      partner_user_id: "partner_user_id",
      item_name: "{goods_name}",
      quantity: 1,
      total_amount: 2000,
      vat_amount: 200,
      tax_free_amount: 0,
      approval_url: "http://localhost:3000/PayResult",
      fail_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    },
  };

  componentDidMount() {
    const { params } = this.state;
    axios({
      // 프록시에 카카오 도메인을 설정했으므로 결제 준비 url만 주자
      url: "https://kapi.kakao.com/v1/payment/ready",
      // 결제 준비 API는 POST 메소드라고 한다.
      method: "POST",
      headers: {
        // 카카오 developers에 등록한 admin키를 헤더에 줘야 한다.
        Authorization: "KakaoAK 1461caa3c830eaa73cdd9c85314a314e",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      // 설정한 매개변수들
      params,
    }).then((response) => {
      // 응답에서 필요한 data만 뽑는다.
      const {
        data: { next_redirect_pc_url, tid },
      } = response;

      console.log(next_redirect_pc_url);
      console.log(tid);
      // 응답 data로 state 갱신
      this.setState({ next_redirect_pc_url, tid });
    });
  }

  render() {
    const { next_redirect_pc_url } = this.state;
    return (
      <div class="payment_ticketing">
        <h1>예매 확인</h1>
        <div className="payment_calendar">
          <table className="payment_table">
            <tr className="payment_tr">
              <th className="payment_th">예매하신게 맞나요?</th>
            </tr>
            <tr className="payment_tr">
              <td>경기 날짜</td>
            </tr>
            <tr className="payment_tr">
              <td>인원</td>
            </tr>
            <tr className="payment_tr">
              <td>예매한 좌석</td>
            </tr>
            <tr className="payment_tr">
              <td>총 금액</td>
            </tr>
          </table>
        </div>

        <button>
          <a href={next_redirect_pc_url}>
            <img src={paylogo} />
          </a>
        </button>
      </div>
    );
  }
}
export default Payment;
