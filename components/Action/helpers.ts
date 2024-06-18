import { ClockIcon } from "react-native-heroicons/outline";
import { CheckCircleIcon } from "react-native-heroicons/solid";
import { ActionProps } from ".";

interface ActionStyles {
  icon: React.ElementType<any> | null;
  backgroundColor: string;
  statusText: string;
  dayName: string;
  dayOfMonth: string | number;
}

export function getDayAndDate(timestamp: string) {
  const date = new Date(timestamp);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[date.getDay()].substring(0, 3).toUpperCase();
  const dayOfMonth = date.getDate();

  return { dayName, dayOfMonth };
}

export const getActionProperties = ({
  status,
  arrivalStartWindow,
  arrivalEndWindow,
  scheduledDate,
}: ActionProps): ActionStyles => {
  const { dayName, dayOfMonth } = scheduledDate
    ? getDayAndDate(scheduledDate)
    : { dayName: "", dayOfMonth: "" };

  const stylesMap: Record<string, ActionStyles> = {
    COMPLETED: {
      backgroundColor: "#00B47D",
      icon: CheckCircleIcon,
      statusText: "Completed",
      dayName,
      dayOfMonth,
    },
    SCHEDULED: {
      backgroundColor: "#006A4B",
      icon: ClockIcon,
      statusText: `Scheduled ${arrivalStartWindow} - ${arrivalEndWindow}`,
      dayName,
      dayOfMonth,
    },
    UNSCHEDULED: {
      backgroundColor: "#011638",
      icon: null,
      statusText: "Schedule date & time TBD",
      dayName: "TBD",
      dayOfMonth,
    },
  };

  return stylesMap[status.toUpperCase()];
};
