import Head from "next/head";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FFXIV Party Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Pick your available time slots</h1>

      <form action="https://formspree.io/f/mwkaqlqd" method="POST">
        <div className="calendar">
          <div className="days">
            <h2>Monday</h2>
            <Checkbox id="mon-3pm">Mon 03:00 PM</Checkbox>
            <Checkbox id="mon-4pm">Mon 04:00 PM</Checkbox>
            <Checkbox id="mon-5pm">Mon 05:00 PM</Checkbox>
            <Checkbox id="mon-6pm">Mon 06:00 PM</Checkbox>
            <Checkbox id="mon-7pm">Mon 07:00 PM</Checkbox>
            <Checkbox id="mon-8pm">Mon 08:00 PM</Checkbox>
            <Checkbox id="mon-9pm">Mon 09:00 PM</Checkbox>
            <Checkbox id="mon-10pm">Mon 10:00 PM</Checkbox>
            <Checkbox id="mon-11pm">Mon 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Tuesday</h2>
            <Checkbox id="tus-3pm">Tus 03:00 PM</Checkbox>
            <Checkbox id="tus-4pm">Tus 04:00 PM</Checkbox>
            <Checkbox id="tus-5pm">Tus 05:00 PM</Checkbox>
            <Checkbox id="tus-6pm">Tus 06:00 PM</Checkbox>
            <Checkbox id="tus-7pm">Tus 07:00 PM</Checkbox>
            <Checkbox id="tus-8pm">Tus 08:00 PM</Checkbox>
            <Checkbox id="tus-9pm">Tus 09:00 PM</Checkbox>
            <Checkbox id="tus-10pm">Tus 10:00 PM</Checkbox>
            <Checkbox id="tus-11pm">Tus 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Wednesday</h2>
            <Checkbox id="wed-3pm">Wed 03:00 PM</Checkbox>
            <Checkbox id="wed-4pm">Wed 04:00 PM</Checkbox>
            <Checkbox id="wed-5pm">Wed 05:00 PM</Checkbox>
            <Checkbox id="wed-6pm">Wed 06:00 PM</Checkbox>
            <Checkbox id="wed-7pm">Wed 07:00 PM</Checkbox>
            <Checkbox id="wed-8pm">Wed 08:00 PM</Checkbox>
            <Checkbox id="wed-9pm">Wed 09:00 PM</Checkbox>
            <Checkbox id="wed-10pm">Wed 10:00 PM</Checkbox>
            <Checkbox id="wed-11pm">Wed 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Thursday</h2>
            <Checkbox id="thu-3pm">Thu 03:00 PM</Checkbox>
            <Checkbox id="thu-4pm">Thu 04:00 PM</Checkbox>
            <Checkbox id="thu-5pm">Thu 05:00 PM</Checkbox>
            <Checkbox id="thu-6pm">Thu 06:00 PM</Checkbox>
            <Checkbox id="thu-7pm">Thu 07:00 PM</Checkbox>
            <Checkbox id="thu-8pm">Thu 08:00 PM</Checkbox>
            <Checkbox id="thu-9pm">Thu 09:00 PM</Checkbox>
            <Checkbox id="thu-10pm">Thu 10:00 PM</Checkbox>
            <Checkbox id="thu-11pm">Thu 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Friday</h2>
            <Checkbox id="fri-3pm">Fri 03:00 PM</Checkbox>
            <Checkbox id="fri-4pm">Fri 04:00 PM</Checkbox>
            <Checkbox id="fri-5pm">Fri 05:00 PM</Checkbox>
            <Checkbox id="fri-6pm">Fri 06:00 PM</Checkbox>
            <Checkbox id="fri-7pm">Fri 07:00 PM</Checkbox>
            <Checkbox id="fri-8pm">Fri 08:00 PM</Checkbox>
            <Checkbox id="fri-9pm">Fri 09:00 PM</Checkbox>
            <Checkbox id="fri-10pm">Fri 10:00 PM</Checkbox>
            <Checkbox id="fri-11pm">Fri 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Saturday</h2>
            <Checkbox id="sat-3pm">Sat 03:00 PM</Checkbox>
            <Checkbox id="sat-4pm">Sat 04:00 PM</Checkbox>
            <Checkbox id="sat-5pm">Sat 05:00 PM</Checkbox>
            <Checkbox id="sat-6pm">Sat 06:00 PM</Checkbox>
            <Checkbox id="sat-7pm">Sat 07:00 PM</Checkbox>
            <Checkbox id="sat-8pm">Sat 08:00 PM</Checkbox>
            <Checkbox id="sat-9pm">Sat 09:00 PM</Checkbox>
            <Checkbox id="sat-10pm">Sat 10:00 PM</Checkbox>
            <Checkbox id="sat-11pm">Sat 11:00 PM</Checkbox>
          </div>
          <div className="days">
            <h2>Sunday</h2>
            <Checkbox id="sun-3pm">Sun 03:00 PM</Checkbox>
            <Checkbox id="sun-4pm">Sun 04:00 PM</Checkbox>
            <Checkbox id="sun-5pm">Sun 05:00 PM</Checkbox>
            <Checkbox id="sun-6pm">Sun 06:00 PM</Checkbox>
            <Checkbox id="sun-7pm">Sun 07:00 PM</Checkbox>
            <Checkbox id="sun-8pm">Sun 08:00 PM</Checkbox>
            <Checkbox id="sun-9pm">Sun 09:00 PM</Checkbox>
            <Checkbox id="sun-10pm">Sun 10:00 PM</Checkbox>
            <Checkbox id="sun-11pm">Sun 11:00 PM</Checkbox>
          </div>
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
    </div>
  );
}

function Checkbox(props: { id: string; children: ReactNode }) {
  const { id, children } = props;
  return (
    <label className="checkbox-container" htmlFor={id}>
      <input type="checkbox" id={id} name={id} />
      <div className="checkbox-contents">{children}</div>
    </label>
  );
}
