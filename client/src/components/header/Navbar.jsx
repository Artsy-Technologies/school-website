/* eslint-disable no-unused-vars */

import Links from "./Links"


export default function Navbar() {

  const linkData = [
    {
      link: "/",
      page: "Home"
    },
    {
      link: "/about",
      page: "About"
    },
    {
      link: "/contact",
      page: "Contact"
    },
    {
      link: "/academics",
      page: "Academics"
    },
    {
     link:"/admission",
     page:"Admission"
    },
    {
      link: "/students",
      page: "Students"
    }

  ]


  return (
    <header className="bg-purple-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <h1>School Name</h1>
        </div>
        <nav className="flex space-x-4 " >
          {
            linkData.map((item, i) => (
              <Links key={i} content={item} />
            ))
          }
        </nav>
      </div>
    </header>
  )
}
