import clsx from "clsx";
import { ReactNode } from "react";
import { Days, days, Timeslot } from "../utils/utils";
import { submissions } from "./submissions";

type Props = {
  timeslots: Timeslot[][];
};

export default function CalendarForm({ timeslots }: Props) {
  const timeslotMap = timeslots
    .flat()
    .reduce<Partial<Record<Days, Timeslot[]>>>((prev, current) => {
      if (prev[current.offsetted.day]) {
        prev[current.offsetted.day]!.push(current);
      } else {
        prev[current.offsetted.day] = [current];
      }

      return prev;
    }, {});

  return (
    <form action="https://formspree.io/f/mwkaqlqd" method="POST">
      <div className="calendar">
        {days.map((day) => (
          <div key={day} className="days">
            <h2>{day}</h2>

            {timeslotMap[day]?.map((timeslot) => (
              <Checkbox key={timeslot.name} id={timeslot.name}>
                {timeslot.label}
              </Checkbox>
            ))}
          </div>
        ))}
      </div>

      <div className="input-container">
        <div className="input">
          <label>
            <span>Discord username</span>
            <input type="text" id="username" name="username" required />
          </label>
        </div>
      </div>

      <div className="btn-container">
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}

function Checkbox(props: { id: string; children: ReactNode }) {
  const { id, children } = props;

  const matchSubmissions = submissions.filter((sub) => sub[id] === "on");

  const classesMap = {
    5: "checkbox-container__yellow-dashed",
    6: "checkbox-container__yellow",
    7: "checkbox-container__green-dashed",
    8: "checkbox-container__green",
  };

  const containerClassName =
    classesMap[matchSubmissions.length as keyof typeof classesMap];

  return (
    <label
      className={clsx("checkbox-container", containerClassName)}
      htmlFor={id}
    >
      <input type="checkbox" id={id} name={id} />
      <div className="checkbox-contents">
        <strong>{children}</strong>

        {matchSubmissions.map((ms) => (
          <div key={ms.username} className="checkbox-names">
            {ms.username}
          </div>
        ))}
      </div>
    </label>
  );
}
