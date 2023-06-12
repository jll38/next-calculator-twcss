import Image from "next/image";
import { Inter } from "next/font/google";
import fonts from "../styles/fonts.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [input, setInput] = useState(0);
  return (
    <main
      className={`flex justify-center items-center ${fonts.className} h-screen bg-gradient-to-bl from-yellow-500 to-cyan-400`}
    >
      <div className="calcWrapper flex flex-col items-center">
        <div className="calc-screen bg-gradient-to-t from-gray-300/50 to-white/50 flex justify-end items-end pb-4 px-4">
          <div className="text-[2em] font-bold">{input}</div>
        </div>
        <div id="button-section" className="text-[1.2em] bg-white/75 text-gray-75">
          <div className="flex">
            <button className="calc-button text-yellow-500">C</button>
            <button className="calc-button">()</button>
            <button className="calc-button">%</button>
            <button className="calc-button">÷</button>
          </div>
          <div className="flex">
            <button className="calc-button">1</button>
            <button className="calc-button">2</button>
            <button className="calc-button">3</button>
            <button className="calc-button">x</button>
          </div>
          <div className="flex">
            <button className="calc-button">4</button>
            <button className="calc-button">5</button>
            <button className="calc-button">6</button>
            <button className="calc-button">+</button>
          </div>
          <div className="flex">
            <button className="calc-button">7</button>
            <button className="calc-button">8</button>
            <button className="calc-button">9</button>
            <button className="calc-button">-</button>
          </div>
          <div className="flex">
            <button className="calc-button">.</button>
            <button className="calc-button">0</button>
            <div className="calc-button"></div>
            <button className="calc-button">=</button>
          </div>
        </div>
      </div>
    </main>
  );
}
