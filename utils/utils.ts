export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export type Days = typeof days[number];

const hours = [15, 16, 17, 18, 19, 20, 21, 22, 23];

const defaultOffset = 4;

export type Timeslot = {
  name: string;
  label: string;
  normal: {
    day: typeof days[number];
    hour: number;
  };
  offsetted: {
    day: typeof days[number];
    hour: number;
  };
};

export function getTimeslots(): Timeslot[][] {
  const getDayAtIndex = (index: number) => {
    const nextIndex = index % days.length;
    return nextIndex < 0 ? days[days.length - 1] : days[nextIndex];
  };

  const userOffset = new Date().getTimezoneOffset() / 60;

  const timeslots = days.map((day, dayIndex) => {
    const dayString = day.substr(0, 3).toLowerCase();

    const timeslot = hours.map((hour) => {
      const hourString = hour > 12 ? `${hour - 12}pm` : `${hour}am`;
      const name = `${dayString}-${hourString}`;

      const offset = defaultOffset - userOffset;

      const overflowedOffsetedHours = hour + offset;
      const offsetDay =
        overflowedOffsetedHours < 0
          ? getDayAtIndex(dayIndex - 1)
          : overflowedOffsetedHours > 23
          ? getDayAtIndex(dayIndex + 1)
          : day;

      const offsetHours = overflowedOffsetedHours % 24;

      const label = getLabel(offsetDay, offsetHours);

      return {
        name,
        label,
        normal: {
          day,
          hour,
        },
        offsetted: {
          day: offsetDay,
          hour: offsetHours,
        },
      };
    });

    return timeslot;
  });

  return timeslots;
}

function getLabel(offsetDay: Days, offsetHour: number): string {
  const day = `${offsetDay.substr(0, 3)}`;
  const hour = offsetHour % 12;
  const hourString =
    hour.toString().padStart(2, "0") + (offsetHour > 12 ? ":00 PM" : ":00 AM");
  const label = `${day} ${hourString}`;
  return label;
}
