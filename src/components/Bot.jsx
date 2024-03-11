import React, { useEffect } from 'react';

const Bot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'aichatbot';
    document.body.appendChild(script);

    window.chatbotConfig = [
      'FB56ECB6-538B-455D-ADBD-E18C28183EF3',
      'onboarding_bot'
    ];

    script.defer = true;
    script.type = 'module';
    script.src = 'https://aichatbot.sendbird.com/index.js';

    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default Bot;
