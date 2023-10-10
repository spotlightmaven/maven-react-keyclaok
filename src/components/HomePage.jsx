import React from 'react';
import { Link } from 'react-router-dom';

const pageInfo = [
  { title: "Page 1", description: "This is Page 1", path: "/page1" },
  { title: "Page 2", description: "This is Page 2", path: "/page2" },
  { title: "Page 3", description: "This is Page 3", path: "/page3" },
  { title: "Page 4", description: "This is Page 4", path: "/page4" }
];

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {pageInfo.map((page, index) => (
        <Link key={index} to={page.path} className="border rounded p-4 text-center shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold">{page.title}</h2>
          <p>{page.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
