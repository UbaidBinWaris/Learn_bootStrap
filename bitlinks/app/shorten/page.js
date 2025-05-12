"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Page = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [Generated, setGenerated] = useState("");

  const generate = () => {
    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShortUrl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="bg-purple-300 m-auto flex justify-center items-center">
      <div className="flex flex-col justify-center gap-7 my-10 px-5 py-10 h-[350px] w-[700px] border-2 rounded-2xl border-purple-800 ">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold">Generate your Shorten URLs</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2  bg-purple-300 ">
          <input
            className="inp"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Enter your URL here"
          />
          <input
            className="inp"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            type="text"
            placeholder="Enter your Preferred short URL text"
          />
        </div>
        <div>
          <button
            className="btn w-full text-lg bg-purple-400"
            onClick={generate}
          >
            Generate
          </button>
        </div>
        {Generated && <>
          <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold">Your Shortened URL</h1>
          <Link target="_blank" href={Generated}>
            {Generated}
          </Link>

        </div>
        </>}
      </div>
    </section>
  );
};

export default Page;
