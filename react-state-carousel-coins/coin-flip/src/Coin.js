import React from "react";
import "./Coin.css";
import img_head from "./head.png";
import img_tail from "./tail.png";

const IMG_SRCS = [{src:img_head, alt:"head of penny"}, {src:img_tail, alt:"tail of penny"}];

const Coin = ({side})=> <img  className="Coin" src={IMG_SRCS[side].src} alt={IMG_SRCS[side].alt} />;

export default Coin;

