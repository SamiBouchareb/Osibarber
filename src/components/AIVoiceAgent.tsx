import React, { useEffect } from 'react';

export const AIVoiceAgent: React.FC = () => {
  useEffect(() => {
    // Create and append the widget element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', 'QbgBFzDA3iG3uR3RxAJ8');
    
    // Add custom styles to position the widget
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.zIndex = '1000';
    
    document.body.appendChild(widget);

    // Cleanup function
    return () => {
      document.body.removeChild(widget);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything directly
};
