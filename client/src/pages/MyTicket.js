import React from "react";
import "../css/MyTicket.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MyTicket({ user_id }) {
  const [myTicket] = useFetch(
    "http://localhost:5000/api/myTicketInfo/" + user_id
  );

  return (
    <div className="myticket">
      <div className="myticket_box">
        <div className="myticket_form">
          <h2 className="myticket_title">나의 예매내역 </h2>
          <span className="myticket_span">예매내역&nbsp;&nbsp;&nbsp;</span>
          <span className="myticket_span">|</span>
          <span className="myticket_span">사용완료&nbsp;&nbsp;&nbsp;</span>
          <hr className="myticket_hr1" />
          <table className="myticket_table">
            <tbody>
              <tr className="myticket_table_th">
                <th>예매번호</th>
                <th>예매내역</th>
                <th>관람일시</th>
                <th>사용여부</th>
              </tr>
              {myTicket &&
                myTicket.map(item => {
                  return (
                    <React.Fragment key={item.id}>
                      <tr className="myticket_table_td">
                        <td>{item.id}</td>
                        <td>
                          <Link to={`/mypage/myticketing/${item.id}`}>
                            파이어폭스 VS SSG (장소: {item.ticketground})
                          </Link>
                        </td>
                        <td>
                          {new Date(item.ticketdate).toLocaleDateString()}
                          <br />
                          {item.ticketTime}
                        </td>
                        <td
                          style={{
                            color:
                              item.ticketdate > Date.now().toLocaleString()
                                ? "red"
                                : "rgb(255,192,0)",
                          }}
                        >
                          {new Date(item.ticketdate) < Date.now()
                            ? "완료"
                            : "미사용"}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>

          <hr className="myticket_hr2" />
        </div>
      </div>
    </div>
  );
}

export default MyTicket;
