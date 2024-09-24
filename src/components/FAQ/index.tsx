import { Header } from "../Header"
import { Container } from "../Container"
import { Footer } from "../Footer"
import { Title } from "../Title"

import Styles from "./styles.module.css"

const ENTRIES = [
  {
    question: "What’s this?",
    answer: (
      <p>
        EHMB (short for <span className={Styles.highlight}>E</span>ternal{" "}
        <span className={Styles.highlight}>H</span>ero{" "}
        <span className={Styles.highlight}>M</span>astery{" "}
        <span className={Styles.highlight}>B</span>uilder) is a small tool to
        explore, manage and share mastery trees for{" "}
        <a
          href="https://play.google.com/store/apps/details?id=games.rivvy.eternalherorpg&hl=en&pli=1"
          rel="noopener noreferrer"
        >
          Eternal Hero
        </a>
        . It is not directly affiliated with the game and I am not working for
        Supersonic Studios LTD. If you find a problem or want to contribute,
        reach out to kitty.sparkles on{" "}
        <a href="https://discord.gg/992Ycu6K" rel="noopener noreferrer">
          Discord
        </a>
        .
      </p>
    ),
  },
  {
    question: "How does it work?",
    answer: (
      <p>
        The mastery build is automatically saved in the page URL as you
        distribute points, so you can safely refresh the page or copy and paste
        the link to share your build.
      </p>
    ),
  },
  {
    question: "Why are descriptions different from the game?",
    answer: (
      <p>
        Descriptions in the game are quite inconsistent in terms of wording,
        capitalization, highlighting, punctuation and more. I took the liberty
        to normalize skill descriptions as much as possible to improve the
        reading experience. This is why they may differ from the game.
      </p>
    ),
  },
  {
    question: "Why are damage values marked as just “X”?",
    answer: (
      <p>
        The amount of damage skills inflict depends on the Attack Power of your
        character. For this reason, I decided to simply use{" "}
        <span className={Styles.highlight}>X</span> as a placeholder to
        represent any amount of damage — regardless of Attack Power.
      </p>
    ),
  },
]

export const FAQ = () => {
  return (
    <>
      <Title Component="h2" size={200}>
        FAQ
      </Title>
      <div className={Styles.wrapper}>
        {ENTRIES.map((entry) => (
          <div className={Styles.entry} key={entry.question}>
            <Title Component="h3" size={150} className={Styles.question}>
              {entry.question}
            </Title>
            {entry.answer}
          </div>
        ))}
      </div>
    </>
  )
}

export const FAQPage = () => (
  <>
    <Header />
    <Container>
      <FAQ />
    </Container>
    <Footer />
  </>
)
