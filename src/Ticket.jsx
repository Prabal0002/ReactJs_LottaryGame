import TicketNum from "./TicketNum.jsx";

import "./Ticket.css";

export default function Ticket({ ticket }) {

return (

<div className="Ticket"> I

<p>Ticket</p>

{ticket.map((num, idx) =>(

<TicketNum num={num} key={idx} />

))}

</div>
  );
}
