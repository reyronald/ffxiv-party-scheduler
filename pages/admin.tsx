import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import { useState } from "react";

type Object = { [key: string]: string };

type Submission = {
  _date: string;
  _id: string;
  _status: unknown;
  username: string;
} & Object;

export default function Admin() {
  const [value, setValue] = useState("");

  const submissions = tryJSONParse<Submission[]>(value);
  const submittedHours = getSubmittedHours(submissions);
  const submittedHoursCommon = findCommon(submittedHours);

  return (
    <div className="container">
      <textarea
        name="data"
        id="data"
        cols={60}
        rows={10}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      ></textarea>

      <br />

      <ul>
        {submittedHoursCommon?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function getSubmittedHours(submissions: Submission[] | null) {
  if (submissions == null) return null;

  const valuePairs = submissions.map((s) => {
    const { _date, _id, _status, username, ...rest } = s;
    return rest;
  });

  const submittedHours = valuePairs.map((valuePair) =>
    Object.entries(valuePair)
      .filter(([, value]) => value === "on")
      .map(([key]) => key)
  );

  return submittedHours;
}

function tryJSONParse<T>(value: string): T | null {
  try {
    const parsed = JSON.parse(value) as T;
    return parsed;
  } catch (error) {
    return null;
  }
}

function findCommon(values: string[][] | null): string[] | null {
  if (values == null) return null;

  const [ref, ...rest] = values;
  const restSet = new Set(rest.flat());
  const common = ref.filter((i) => restSet.has(i));
  return common;
}