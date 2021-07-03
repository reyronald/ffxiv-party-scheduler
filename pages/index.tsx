import Head from "next/head";
import dynamic from "next/dynamic";

const CalendarForm = dynamic(() => import("../components/CalendarForm"));

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FFXIV Party Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Pick your available time slots</h1>

      <CalendarForm />
    </div>
  );
}
