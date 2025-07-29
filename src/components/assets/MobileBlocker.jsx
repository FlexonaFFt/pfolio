import React from "react";
import "../../assets/components/MobileBlocker.css";

export default function MobileBlocker() {
  return (
    <div className="mobile-blocker">
      <div className="mobile-blocker-content">
        <h2>Мобильная версия недоступна</h2>
        <p>
          Пожалуйста, зайдите на сайт с компьютера или планшета.<br />
          Thank you for your understanding!
        </p>
      </div>
    </div>
  );
}