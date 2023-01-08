import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import Card from "./Card";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const objs = [
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "21",
    title: "",
    textclass: "card__text v3",
    text: "Teaching is “a kind of broad way of gaining information,” he says, explaining that learning is a two-way street between pupil and professor. Every autumn (with the exception of 2020, given the pandemic), Karel usually journeys to New York to lecture at Yale School of Art. He notes the multiculturalism of the student population – people from all over the world, from differing cultures and backgrounds too. And when such a wide-ranging group gathers together in one place, “you can learn a lot.” It goes back to his quintessential view that curiosity is key, as now, for a man who has done so many wonderful things and inspired so many people, he concludes: “I’m regretting more of the things that I didn’t do in my life than the things that I did.”"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "20",
    title: "",
    textclass: "card__text",
    text: "He’s just as much a teacher as he is a designer in the field. And this is where his remarkable breadth of knowledge comes in handy. Confident in his own opinions and values, as a teacher, Karel prefers to guide students rather than “teach them things” in the definitive sense. It’s a philosophy Werkplaats Typografie was founded on: to guide. If he sees a student who is always making the same kind of thing, perhaps avoiding a certain element of their practice, Karel will say “why not, that’s one of the qualities of your voice. Nice voices don’t necessarily have to be perfect.”"
  },
  {
    pics: [
      "9",
      "10"
    ],
    imgclass: [
      "vertical p9",
      "vertical p10"
    ],
    id: "19",
    title: "",
    textclass: "card__text v1",
    text: "He takes the example of the colour black; an undying staple in design. In terms of Eurocentric design history, however, the colour black, in principle, originates from the bible. It was used as a representation of the human voice where there was no reason to give it a colour. Today, “it’s important to have that knowledge in history, so some people can form an argument to change it.” All that being said, as he pointed out later on in a conversation about how designers often play with distinctions, “When all the world is in colour, a black-and-white movie is a relief.”"
  },
  {
    pics: [
      "7",
      "8"
    ],
    imgclass: [
      "vertical p7",
      "vertical p8"
    ],
    id: "18",
    title: "",
    textclass: "card__text v4",
    text: "While Karel duly acknowledges that tradition is important, he also points out the necessity of criticality. A designer can still be part of a long tradition while questioning their purpose or process at the same time. Why should something change? If a laborious, drawn-out process no longer offers benefits in its efficiency, economy or concept, then what is it a stylistic expression of? “For me,” says Karel, “that’s the starting point or a kind of measurement.”"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "17",
    title: "",
    textclass: "card__text v5",
    text: "In this way, says Karel, “it’s surprising that people are still making classical typefaces.” It would go against his belief in modernism to say otherwise; a school of thought he is famous for and which, above all, embraces the new. Though he makes astute comparisons on how different the industry’s processes are today, he does not claim a preference for one over the other, and respects the creative values of the time. Instead, he merely offers his observations in relation to his own experiences. Like this one: “It’s stupid to make a book in a way that nobody can make anymore. It’s passé, it may be beautiful and it’s still beautiful if it’s repeated. But after the second or third time, I believe you should start something new.”"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "16",
    title: "",
    textclass: "card__text v4",
    text: "Arguably, what Karel is describing is the result of our Instagram-centric design scene today, a medium which calls for instant gratification as you scroll through your feed. In turn, this can lead to an overload of visual stimuli where all the answers are seemingly in one place. By comparison, when Karel started out his career in what he calls “the classical time”, design called for, literally, a more measured approach. To create a beautiful piece of work, the designer had to centre the text, align the capitals, space each glyph perfectly and so on, all by hand. Of course, doing this on the computer also requires a lot of creative expression and aesthetic sensibility, but it’s a different set of skills. Some could say that modern technology has made the designer “lazier”, but on the other hand, for Karel, it doesn’t make sense to go back to analogue methods. What we have today works for a reason. The past has been done."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "15",
    title: "",
    textclass: "card__text",
    text: "With so many options readily available nowadays at the click of a button, in Karel’s opinions, a design can feel “too complete”. After all, the computer is mimicking something that was first crafted by the human hand. He expands on this notion of over-completeness: “Too many colours, too many shapes, too many ideas. It is harder but more important to take a small part of [a design] and make it clear as a kind of hesitation, or suggestion.”"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "14",
    title: "",
    textclass: "card__text v3",
    text: "In some ways, the aim is to engage them and make them feel part of a story mid-climax. As Karel puts it more broadly: “Curiosity is a very important thing for a human being. If you see a book on the shelf, you should become curious. Absence in design is very important, the things you don’t see. But designers can offer a set of ingredients and allude to certain things.”"
  },
  {
    pics: [
      "5",
      "6"
    ],
    imgclass: [
      "vertical p5",
      "vertical p6"
    ],
    id: "13",
    title: "",
    textclass: "card__text v6",
    text: "The story doesn’t have to be 100 per cent accurate, though. The designer can “lie a bit” or cut corners in the information they hold back from the viewer. That’s also part of the script – don’t tell the total story so the viewer can hook onto the missing details. In graphic design, the work is outward-facing, for the public"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "12",
    title: "",
    textclass: "card__text",
    text: "Present technology erases many of the limitations that were present in the pre-Adobe design era. But for Karel, it’s imperative to remember that graphic design was born out of restriction; restriction of what the hands can do with print. So the fundamentals of the art remain much the same for this new era. The process of graphic design can be boiled down to this question posed by Karel: “How many different elements do you need to tell the story?”"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "11",
    title: "",
    textclass: "card__text v4",
    text: "For Karel, however, the latter process is more difficult. “I discovered everything through reflecting. There can be a lot of rules in the game,” he says on the act of designing, “but you have to order them and kind of sort them out. I think limitation is an important thing."
  },
  {
    pics: [
      "4"
    ],
    imgclass: [
      "horizontal p4",
      ""
    ],
    id: "10",
    title: "",
    textclass: "card__text v3",
    text:
      "Karel isn’t afraid of stepping out his comfort zone, no matter what stage of life. His ability to introduce a new medium by looking at an image from a different angle is just one of the many reasons why his portfolio to date is so diverse. When Karel first launched his career after studying fine art at the Arnhem Academy of Art and Industrial Arts in 1961, the industry was completely different to the screenbased discipline it is today. Back then, he would hand draw type as small as point sizes eight or nine. A far cry from the technological simplicity of today, when you hit a button and a letter appears before you."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "9",
    title: "",
    textclass: "card__text v1",
    text: "“So I started making scans of the slides and it ended up being the wrong resolution, the wrong cropping,” he says. When those first attempts at scans landed on Karel’s computer’s desktop, it was “a mess” – as he puts it, “full of shit, full of the wrong things”. With help from a technician at the computer lab, hundreds of Karel’s scans suddenly came to life as they were organised in a folder. “Let me make a movie out of it,” he thought, as he imagined the scans as frames, edited together in an ordered sequence. “It was exciting. And it was also done with new technology.”"
  },
  {
    pics: [
      "",
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "8",
    title: "",
    textclass: "card__text v5",
    text:
      "“I am from the generation where the computer came to us later in life, even though it’s not that long ago in historical terms. But I am thinking it’s not for me, it’s for the new generations. There is a lot of knowledge that I don’t understand,” he says. To process this, he made a movie, a way for him to do something with the experience. At the time, he was working on a university lecture and as he always does, he pinned reference images on the wall as an “extension of memory”, an archive of sorts. Karel’s daughter – who incidentally is also a graphic designer – took pictures of the wall, every ten centimetres to make into presentation slides. And after the lecture, a pupil asked to have a copy of the slides, which for Karel, meant using a scanner for the first time."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "7",
    title: "",
    textclass: "card__text v4",
    text:
      "The list of Karel’s defining projects could go on for a while, and after all, it’s why the monogram exists in multiple iterations. But it’s his lesser-known works that are potentially the most interesting, as they show a different side to the accomplished designer. His experimental film Not For Resale, for instance, shows exactly how a blunder can propel one’s creativity forward. The conversation around the film began as we discussed the development of technology. “How relevant is the latest technology to your work and teachings?” I asked him. “It’s always relevant,” he replied, and hinted to the inundation of new techniques influencing the design canon, adding to the process of experimentation."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "6",
    title: "",
    textclass: "card__text v2",
    text: "Famous for his sense of experimentation, there are countless projects we could cite now to demonstrate the Dutch master’s way of thinking. We’ll just mention a few that helped cement his reputation for type and print: the design of OASE Journal for Architecture, where Karel explores the relationship between graphic design and architecture, a role he took up in 1990; his well-known symbol generated cloud images, formed by the tight repetition of intricately designed rosettes; and perhaps most infamously, his ongoing work with the Stedelijk’s print collection where he repurposes old archive cards to become diplomas for Werkplaats Typografie graduates."
  },
  {
    pics: [
      "3",
      ""
    ],
    imgclass: [
      "horizontal p3",
      ""
    ],
    id: "5",
    title: "",
    textclass: "card__text v3",
    text:
      "There is nothing negative associated with the mistake for Karel. It may be a cliché, but the proof is in the pudding. He’s someone who views no difference between artist and designer (just the label) and through his unique way of seeing, creativity is “all about the person”. By this, he means that creativity is the antithesis of dogma. Making work is “all about trying and discovering” and in his opinion, “there are no truths.” He uses the example of a garden. When creating a garden, the common law dictates that the big plants go at the end and the small ones in front. But what if the other way around is more interesting?"
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "4",
    title: "",
    textclass: "card__text v6",
    text: "Karel could have easily developed an ego, so it’s refreshing to hear someone of his stature freely admit that “sometimes you still make the same old stupid mistakes.” It’s this criticality that drives him to keep making work, but that also on the flip side prevents him from looking back at old projects with nostalgia. For him, mistakes give rise to unexpected surprises, especially those made on the computer, a technology established decades into his career. “It can be a nice surprise or not so nice a surprise,” he says, “but by making mistakes, sometimes you feel like, wow, where did that come from?”"
  },
  {
    pics: [
      "1",
      "2"
    ],
    imgclass: [
      "vertical p1",
      "vertical p2"
    ],
    id: "3",
    title: "",
    textclass: "card__text v2",
    text:
      "Flicking through his monographs provides a tireless flow of inspiration, including most recently the one published on the cusp of 2020 by Roma Publications. Featuring an open Japanese bind and double-sheeted spreads, this most recent monograph is different to its predecessors for its play with borders, as Karel puts it, an interesting area “where two worlds meet”. A philosophical interpretation for someone more renowned for their technical, more specifically typographic precision. Beyond this distinction with borders, however, which Karel has designed “as close to the edge as possible”, and beyond the visual impressiveness of each comprehensive spread, Re-Printed Matter remains resolute in its detail and beauty. It’s also a testament to Karel Martens’ unyielding and ever-curious approach to creativity."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "2",
    title: "",
    textclass: "card__text v1",
    text: "He may be 81 years old, with a career spanning 60 years and counting, but Karel Martens is still of the mindset that his work can always be better. It’s what drives the self-professed workaholic, he tells us over a video call, and it’s the reason he’s updated his historic monograph several times. Originally published back in 1996, the monograph was an instant classic in its extensive survey of the prolific graphic designer’s career. As well as co-founding the two-year master’s programme at Werkplaats Typografie, with Wigger Bierma in Arnhem, Karel, a central figure in the Dutch modernist movement, seems to have designed it all. Throughout his impressive career he has turned his hand to stamps, coins and films – not to mention every other graphic design staple, from books to corporate identities."
  },
  {
    pics: [
      ""
    ],
    imgclass: [
      "",
      ""
    ],
    id: "1",
    title: "“Absence in design is very important”: Karel Martens on paying attention to the things we don’t see",
    textclass: "card__text--intro",
    text: "One of the best-known names in graphic design, the Dutch modernist master and teacher reflects on his work and career to date."
  }
];

const to = i => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 0, y: 0 });

const trans = (r, s) =>
  `perspective(1500px) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      key={i}
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
    />
  ));
}

export default Deck;
