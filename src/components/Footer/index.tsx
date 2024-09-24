import { Link } from "react-router-dom"

import { Container } from "../Container"

import Styles from "./styles.module.css"

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Container className={Styles.inner}>
        <p>&copy;&nbsp;2024 — Kitty ✨</p>
        <p>
          <Link to="/faq">FAQ</Link>
        </p>
      </Container>
    </footer>
  )
}
