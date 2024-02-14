import React from 'react';

const DeliveryDateEstimate = () => {
  const today = new Date();
  
  const deliveryStartDate = new Date(today.setDate(today.getDate() + 14))
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const deliveryEndDate = new Date(today.setDate(today.getDate() + 7))
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      <p>Estimated delivery: {`${deliveryStartDate} - ${deliveryEndDate}`}</p>
    </div>
  );
}

export default DeliveryDateEstimate;
