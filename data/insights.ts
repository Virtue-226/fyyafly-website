export type Insight = {
  slug: string;
  title: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "culture-is-distribution",
    title: "Culture is a distribution strategy",
    body: [
      "A campaign can be beautifully made and still disappear if it is not speaking the language of the people it wants. Culture is not a coat of paint at the end. It is how the idea travels.",
      "Fyyafly treats strategy, creative and distribution as one job: make work that people recognise, repeat and pass on.",
    ],
  },
  {
    slug: "original-stories",
    title: "Original stories build the audience",
    body: [
      "Social posts can introduce a brand. Original shows, documentaries and creator stories give people a reason to stay. The media and the advertising should feel like they come from the same place.",
      "That is the point of Fyyafly Media: stories with a point of view, made to be watched more than once.",
    ],
  },
  {
    slug: "real-people",
    title: "Real people outperform polish",
    body: [
      "Audiences can tell when a brand is performing at them. The work that lasts usually has a person in it who is actually in the story, not posed next to it.",
      "Real people, bold ideas and a bigger impact is not a slogan we hang on finished work. It is the filter for what gets made.",
    ],
  },
];
