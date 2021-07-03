import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getTimeslots, Timeslot } from "../utils/utils";

const CalendarForm = dynamic(() => import("../components/CalendarForm"));

export default function Home() {
  const [timeslots, setTimelots] = useState<Timeslot[][] | null>(null);

  useEffect(() => {
    const _timeslots = getTimeslots();
    setTimelots(_timeslots);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>FFXIV Party Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Pick your available time slots</h1>

      {timeslots ? <CalendarForm timeslots={timeslots} /> : "Loading..."}
    </div>
  );
}
