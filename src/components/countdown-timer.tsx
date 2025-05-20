"use client";

import React, { useState, useEffect } from 'react';
import { differenceInSeconds, intervalToDuration } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CountdownTimerProps {
  launchDate: Date;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const secondsRemaining = differenceInSeconds(launchDate, now);

      if (secondsRemaining <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const duration = intervalToDuration({ start: now, end: launchDate });
      setTimeLeft({
        days: duration.days,
        hours: duration.hours,
        minutes: duration.minutes,
        seconds: duration.seconds,
      });
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [launchDate, isClient]);

  if (!isClient) {
    // Render placeholder or skeleton on the server
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-muted p-4 rounded-lg shadow">
            <div className="text-3xl font-bold animate-pulse">--</div>
            <div className="text-sm text-muted-foreground animate-pulse">----</div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-semibold text-center text-primary">Launching In</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="bg-background/70 dark:bg-secondary/30 p-4 rounded-lg shadow-md backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary">
                {String(unit.value ?? 0).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{unit.label}</div>
            </div>
          ))}
        </div>
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
          <p className="mt-4 text-center text-xl font-semibold text-green-500">We've Launched!</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
