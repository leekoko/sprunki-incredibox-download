import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from '../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const location = useLocation();

  useEffect(() => {
    // 当路由变化时发送页面浏览事件
    analytics.pageview(location.pathname + location.search);
  }, [location]);

  return <>{children}</>;
}
