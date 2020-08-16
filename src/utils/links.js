import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Accueil",
    url: "/",
  },
  {
    id: 2,
    text: "L'entreprise",
    url: "/about/",
  },
  {
    id: 3,
    text: "Realisations",
    url: "/showroom/",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})


export default ({ styleClass }) => {
  return (
    <ul>
      {tempLinks}
    </ul>
  )
}