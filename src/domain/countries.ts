// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon
import { flag } from "country-emoji";
import i18n from "../i18n";

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  birth_year: number;
  first_line: string;
  name: string;
  oecCode?: string;
  title: string;
}

export const countries: Country[] = [
  {
    name: "Maya Angelou",
    first_line: `Leaving behind nights of terror and fear
I rise
Into a daybreak that’s wondrously clear
I rise
Bringing the gifts that my ancestors gave,
I am the dream and the hope of the slave.
I rise
I rise
I rise.`,
    latitude: 33.93911,
    longitude: 67.709953,
    title: "Still I Rise",
    birth_year: 1928,
    code: "MA",
  },
  {
    name: "W.H. Auden",
    first_line: `Stop all the clocks, cut off the telephone,
Prevent the dog from barking with a juicy bone,
Silence the pianos and with muffled drum
Bring out the coffin, let the mourners come.

Let aeroplanes circle moaning overhead
Scribbling on the sky the message He Is Dead
Put crepe bows round the white necks of the public doves,
Let the traffic policemen wear black cotton gloves.

He was my North, my South, my East and West,
My working week and my Sunday rest,
My noon, my midnight, my talk, my song;
I thought that love would last for ever: I was wrong.`,
    code: "AU",
    title: "Twelve Songs: IX",
    birth_year: 1907,
    latitude: 33.93911,
    longitude: 67.709953,
  },
  {
    code: "AF",
    latitude: 33.93911,
    longitude: 67.709953,
    birth_year: 1775,
    first_line: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.
"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"
Mr. Bennet replied that he had not.
"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."
Mr. Bennet made no answer.`,
    title: "Pride and Prejudice",
    name: "Jane Austen",
  },
  {
    name: "William Blake",
    first_line: `Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?
In what distant deeps or skies.
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?`,
    title: "The Tyger",
    birth_year: 1757,
    code: "WB",
    latitude: 33.93911,
    longitude: 67.709953,
  },
  {
    code: "EB",
    name: "Elizabeth Barrett Browning",
    title: "How Do I Love Thee? (Sonnet 43)",
    latitude: 33.93911,
    longitude: 67.709953,
    birth_year: 1806,
    first_line: `How do I love thee? Let me count the ways.
I love thee to the depth and breadth and height
My soul can reach, when feeling out of sight
For the ends of being and ideal grace.
I love thee to the level of every day’s
Most quiet need, by sun and candle-light.
I love thee freely, as men strive for right.
I love thee purely, as they turn from praise.
I love thee with the passion put to use
In my old griefs, and with my childhood’s faith.
I love thee with a love I seemed to lose
With my lost saints. I love thee with the breath,
Smiles, tears, of all my life; and, if God choose,
I shall but love thee better after death.`,
  },
  {
    code: "BC",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1941,
    first_line: `But for now I am a willing prisoner in this house,
a sympathizer with the anarchic cause of snow.
I will make a pot of tea
and listen to the plastic radio on the counter,
as glad as anyone to hear the news
that the Kiddie Corner School is closed,
the Ding-Dong School, closed.`,
    title: "Snow Day",
    name: "Billy Collins",
  },
  {
    code: "EE",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1894,
    first_line: `little tree
little silent Christmas tree
you are so little
you are more like a flower
who found you in the green forest
and were you very sorry to come away?
see          i will comfort you
because you smell so sweetly

i will kiss your cool bark
and hug you safe and tight
just as your mother would,`,
    title: "[little tree]",
    name: "E.E. Cummings",
  },
  {
    code: "DD",
    latitude: 17.060816,
    longitude: -61.796428,
    birth_year: 1936,
    first_line: `The station wagons arrived at noon, a long shining line that coursed through the west campus.
    In single file they eased around the orange I-beam sculpture and moved toward the dormitories.
    The roofs of the station wagons were loaded down with carefully secured suitcases full of light and heavy clothing;
    with boxes of blankets, boots and shoes, stationery and books, sheets, pillows, quilts; with rolled-up rugs and sleeping bags;
    with bicycles, skis, rucksacks, English and Western saddles, inflated rafts.
    As cars slowed to a crawl and stopped, students sprang out and raced to the rear doors to begin removing the objects inside; the stereo sets, radios, personal computers; small refrigerators and table ranges; the cartons of phonograph records and cassettes; the hairdryers and styling irons;
    the tennis rackets, soccer balls, hockey and lacrosse sticks, bows and arrows; the controlled substances, the birth control pills and devices; the junk food still in shopping bags--onion-and-garlic chips, nacho thins, peanut creme patties, Waffelos and Kabooms, fruit chews and toffee popcorn; the Dum-Dum pops, the Mystic mints.`,
    title: "White Noise",
    name: "Don Delillo",
  },

  {
    code: "ED",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1886,
    first_line: `I’m Nobody! Who are you?
Are you – Nobody – too?
Then there’s a pair of us!
Don't tell! they'd advertise – you know!
How dreary – to be – Somebody!
How public – like a Frog –
To tell one’s name – the livelong June –
To an admiring Bog!`,
    title: "I’m Nobody! Who are you? (260)",
    name: "Emily Dickinson",
  },
  {
    code: "JD",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1572,
    first_line: `Our two souls therefore, which are one,
   Though I must go, endure not yet
A breach, but an expansion,
   Like gold to airy thinness beat.
If they be two, they are two so
   As stiff twin compasses are two;
Thy soul, the fixed foot, makes no show
   To move, but doth, if the other do.

And though it in the center sit,
   Yet when the other far doth roam,
It leans and hearkens after it,
   And grows erect, as that comes home.

Such wilt thou be to me, who must,
   Like th' other foot, obliquely run;
Thy firmness makes my circle just,
   And makes me end where I begun.`,
    title: "A Valediction: Forbidding Mourning",
    name: "John Donne",
  },
  {
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    birth_year: 1812,
    first_line: `It was the best of times, it was the worst of times,
    it was the age of wisdom, it was the age of foolishness,
    it was the epoch of belief, it was the epoch of incredulity,
    it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair,
    we had everything before us, we had nothing before us,
    we were all going direct to Heaven, we were all going direct the other way--in short, the period was so far like the present period that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.`,
    title: "A Tale of Two Cities",
    name: "Charles Dickens",
  },
  {
    name: "T.S. Eliot",
    first_line: `I grow old ... I grow old ...
I shall wear the bottoms of my trousers rolled.
Shall I part my hair behind?   Do I dare to eat a peach?
I shall wear white flannel trousers, and walk upon the beach.
I have heard the mermaids singing, each to each.
I do not think that they will sing to me.
I have seen them riding seaward on the waves
Combing the white hair of the waves blown back
When the wind blows the water white and black.
We have lingered in the chambers of the sea
By sea-girls wreathed with seaweed red and brown
Till human voices wake us, and we drown.`,
    code: "TE",
    birth_year: 1888,
    latitude: 42.546245,
    longitude: 1.601554,
    title: "The Love Song of J. Alfred Prufrock",
  },
  {
    name: "Robert Frost",
    title: "Stopping By Woods on a Snowy Evening",
    first_line: `He gives his harness bells a shake
To ask if there is some mistake.
The only other sound's the sweep
Of easy wind and downy flake.

The woods are lovely, dark and deep.
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`,
    birth_year: 1874,
    code: "RF",
    latitude: 42.546245,
    longitude: 1.601554,
  },
  {
    code: "JM",
    latitude: 17.060816,
    longitude: -61.796428,
    birth_year: 1608,
    first_line: `This is the month, and this the happy morn,
      Wherein the Son of Heav'n's eternal King,
Of wedded Maid, and Virgin Mother born,
      Our great redemption from above did bring;
      For so the holy sages once did sing,
            That he our deadly forfeit should release,
            And with his Father work us a perpetual peace.`,
    title: "On the Morning of Christ's Nativity",
    name: "John Milton",
  },
  {
    code: "AG",
    latitude: 17.060816,
    longitude: -61.796428,
    birth_year: 1931,
    first_line: `“Your love is too thick,” he said, thinking,
    That bitch is looking at me; she is right over my head looking down through the floor at me.
    “Too thick?”she said, thinking of the Clearing where Baby Suggs’ commands knocked the pods off horse chestnuts.
    “Love is or it ain’t. Thin love ain’t love at all.”
    “Yeah. It didn’t work, did it? Did it work?” he asked.
“It worked,” she said.`,
    title: "Beloved",
    name: "Toni Morrison",
  },
  {
    name: "Alexander Pope",
    first_line: `Hope springs eternal in the human breast:
Man never is, but always to be blest:
The soul, uneasy and confin'd from home,
Rests and expatiates in a life to come.
Lo! the poor Indian, whose untutor'd mind
Sees God in clouds, or hears him in the wind;
His soul, proud science never taught to stray
Far as the solar walk, or milky way;`,
    title: "An Essay on Man: Epistle I",
    birth_year: 1688,
    code: "AP",
    latitude: 17.060816,
    longitude: -61.796428,
  },

  {
    code: "SP",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1932,
    first_line: `A cake of soap,
A wedding ring,
A gold filling.
Herr God, Herr Lucifer
Beware
Beware.
Out of the ash
I rise with my red hair
And I eat men like air.`,
    title: "Lady Lazarus",
    name: "Sylvia Plath",
  },
  {
    code: "WS",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1554,
    first_line: `How like a winter hath my absence been
From thee, the pleasure of the fleeting year!
What freezings have I felt, what dark days seen!
What old December's bareness everywhere!
And yet this time remov'd was summer's time,
The teeming autumn, big with rich increase,
Bearing the wanton burthen of the prime,
Like widow'd wombs after their lords' decease:
Yet this abundant issue seem'd to me
But hope of orphans and unfather'd fruit;
For summer and his pleasures wait on thee,
And thou away, the very birds are mute;
Or if they sing, 'tis with so dull a cheer
That leaves look pale, dreading the winter's near.`,
    title: "Sonnet 97: How like a winter hath my absence been",
    name: "William Shakespeare",
  },
  {
    name: "Gertrude Stein",
    first_line: `Color mahogany.
Color mahogany center.
Rose is a rose is a rose is a rose.
Loveliness extreme.
Extra gaiters.
Loveliness extreme.
Sweetest ice-cream.
Page ages page ages page ages.
Wiped Wiped wire wire.
Sweeter than peaches and pears and cream.`,
    code: "GS",
    birth_year: 1874,
    title: "Sacred Emily",
    latitude: 42.546245,
    longitude: 1.601554,
  },
  {
    code: "AT",
    latitude: 42.546245,
    longitude: 1.601554,
    birth_year: 1809,
    first_line: `The heart that never plighted troth
      But stagnates in the weeds of sloth,
Nor any want-begotten rest.
I hold it true, whate’er befall,
      I feel it, when I sorrow most;
      ‘Tis better to have loved and lost
Than never to have loved at all.`,
    title: "In Memoriam A.H.H. 1849",
    name: "Alfred Lord Tennyson",
  },
  {
    name: "William Butler Yeats",
    first_line: `Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere
The ceremony of innocence is drowned;
The best lack all conviction, while the worst
Are full of passionate intensity.`,
    birth_year: 1865,
    title: "The Second Coming",
    code: "WY",
    latitude: 42.546245,
    longitude: 1.601554,
  },
];

export const fictionalCountries: Country[] = [];

export function getCountryName(language: string, country: Country | undefined) {
  return country?.name;
}

export function sanitizeCountryName(countryName: string | undefined): string {
  return countryName
    ? countryName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[- '()]/g, "")
        .toLowerCase()
    : "";
}

export interface Iso {
  [id: string]: string;
}

export const countryISOMapping: Iso = {
  AF: "AFG",
  AE: "AFG",
  AX: "ALA",
  AL: "ALB",
  DZ: "DZA",
  AS: "ASM",
  AD: "AND",
  AO: "AGO",
  AI: "AIA",
  AQ: "ATA",
  AG: "ATG",
  AR: "ARG",
  AM: "ARM",
  AW: "ABW",
  DD: "DDW",
};

export function getCountryPrettyName(
  str: string | undefined,
  isAprilFools = false
): string {
  const items = isAprilFools ? fictionalCountries : countries;
  if (str) {
    const country = items.find(
      (c) => sanitizeCountryName(c.name.toLowerCase()) === str
    );
    if (country) {
      return isAprilFools
        ? `${country.name}`
        : /*  : flag(country?.code)
        ? `${flag(country?.code)} ${country.name}`*/
          `${country.name}`;
    }
  }
  return `${str}`;
}

export function getCountryByName(countryName: string): Country | undefined {
  return countries.find(
    (country) =>
      sanitizeCountryName(getCountryName(i18n.resolvedLanguage, country)) ===
      sanitizeCountryName(countryName)
  );
}

export function getBirthYearByName(countryName: string): Country | undefined {
  return countries.find(
    (country) =>
      sanitizeCountryName(getCountryName(i18n.resolvedLanguage, country)) ===
      sanitizeCountryName(countryName)
  );
}

export function getFictionalCountryByName(
  countryName: string
): Country | undefined {
  return fictionalCountries.find(
    (country) =>
      sanitizeCountryName(getCountryName(i18n.resolvedLanguage, country)) ===
      sanitizeCountryName(countryName)
  );
}
