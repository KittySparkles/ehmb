import { Container } from "../Container"

import Styles from "./styles.module.css"

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Container className={Styles.inner}>
        <p>&copy;&nbsp;2024</p>
        <p>Made with ♡ by Kitty ✨</p>
      </Container>
    </footer>
  )
}
