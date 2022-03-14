import React, { useState, useContext, useEffect, useRef } from 'react';
import { OptimizelyContext } from '@optimizely/react-sdk';
import { RequestContext } from '#contexts/RequestContext';
import useOptimizelyVariation from '#hooks/useOptimizelyVariation';
import OPTIMIZELY_CONFIG from '#lib/config/optimizely';

const OptimizelyArticleCompleteTracking = () => {
  const ref = useRef();
  const observer = useRef();
  const { isAmp } = useContext(RequestContext);
  const { optimizely } = useContext(OptimizelyContext);
  const [pageCompleteSent, setPageCompleteSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const variation = useOptimizelyVariation(OPTIMIZELY_CONFIG.featureId);

  const sendPageCompleteEvent =
    variation && !isAmp && !pageCompleteSent && isVisible;

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIsVisible(entry.isIntersecting),
    );

    observer.current.observe(ref.current);
    return () => {
      observer.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (sendPageCompleteEvent) {
      optimizely.onReady().then(() => {
        optimizely.track('article_completes');
        setPageCompleteSent(true);
      });
    }
  }, [sendPageCompleteEvent, optimizely]);

  return <div ref={ref} aria-hidden="true" />;
};

export default OptimizelyArticleCompleteTracking;
