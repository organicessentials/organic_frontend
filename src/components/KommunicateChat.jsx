import React, { useEffect } from 'react';

const KommunicateChat = () => {
  useEffect(() => {
    // Your Kommunicate settings
    const kommunicateSettings = {
      "appId": "3f151fe29198b38ae291f19f7b2dc72bc",
      "popupWidget": true,
      "automaticChatOpenOnNavigation": true
    };

    // Create the Kommunicate script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.kommunicate.io/v2/kommunicate.app";

    // Append the script to the head of the document
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(script);

    // Set Kommunicate global settings
    window.kommunicate = window.kommunicate || {};
    window.kommunicate._globals = kommunicateSettings;

    // Clean up the script element when the component unmounts
    return () => {
      head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      {/* Add any additional content or styling for the chat widget container */}
    </div>
  );
};

export default KommunicateChat;
