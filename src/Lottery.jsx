import { useState } from "react";
import "./Lottery.css";
import  {genTicket , sum} from "./helper.js";
import"./Lottery.css";
import Ticket from "./Ticket.jsx";



export default function Lottery({num, WinningSum}) {
let [ticket, setTicket] =useState (genTicket(num));
  
let isWinning = sum(ticket) === WinningSum;
  
let buyTicket = () => {
  setTicket (genTicket(num));
};


return(
<div>
<h1>Lottery Game!</h1>
  <Ticket ticket={ticket}/>

<button onClick={buyTicket}> Buy New Ticket</button>

<h3>-{isWinning && "Congratulations, you won!"}</h3>  
</div>

);

}
