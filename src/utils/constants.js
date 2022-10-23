//you tube logo
export const logo = "../assets/images/logo.png";

//array categories for the sidebar
export const categoriesForCategoriesBar = [
  { name: "Brichka" },
  { name: "Azis" },
  { name: "Cars" },
  { name: "DIY" },
  { name: "Music" },
  { name: "Repairs" },
  { name: "ITtalents" },
  { name: "Чалга" },
  { name: "Education" },
  { name: "Валери Божинов" },
  { name: "Movies" },
  { name: "Diablo" },
  { name: "Live" },
  { name: "Sport" },
  { name: "Fashion" },
  { name: "Dr. Disrespect" },
  { name: "Comedy" },
  { name: "Gym" },
  { name: "Crypto" },
];

//за да има какво да покажем, ако не успеем да fetch-нем правилно някое видео или канал
export const demoThumbnailUrl =
  "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg";
export const demoChannelUrl = "/channel/UCBi2mrWuNuyYy4gbM6fU18Q";
export const demoVideoUrl = "/video/_3tMxunybd8";
export const demoChannelTitle = "ABC News";
export const demoVideoTitle =
  "New Russian attacks hit Zaporizhzhia and other parts of Ukraine";
export const demoProfilePicture =
  "https://yt3.ggpht.com/Iv4QbKjK63MB70UvQ22FnTWF8KN3-2qZ2FqeFDiI-HVmidR7GJKo6UrVSwR6vsyHvmdm1pfirrg=s88-c-k-c0x00ffffff-no-rj";
export const demoVideoDescription =
  "No kitchen for a week challenge! lol, that's basically what this turned into, luckily we were able to turn it into some fun!";

//demo response with 20 videos, за да не изхабим дневните заявки към API-то - трябва да се закоментира първия useEffect() във feed компонента, и да се откоментира втория useEffect()
export const demoVideosResponse = [
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "oMR0E1Yijvs",
    },
    snippet: {
      publishedAt: "2022-10-13T12:03:48Z",
      channelId: "UCupvZG-5ko_eiXAupbDfxWw",
      title: "Video reveals a major problem for new Russian soldiers",
      description:
        "In a new video posted to social media, newly mobilized Russian soldiers are complaining about their lack of training before being ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oMR0E1Yijvs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CNN",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T12:03:48Z",
    },
  },

  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },

  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "zmeRiOBmpok",
    },
    snippet: {
      publishedAt: "2022-10-13T13:00:42Z",
      channelId: "UCvSXMi2LebwJEM1s4bz5IBA",
      title:
        "Michael Burry&#39;s Worrying Recession Warning (The White-Collar Crisis Begins)",
      description:
        "We all know that Michael Burry (of The Big Short) has been predicting a big stock market crash and high inflation in 2022. And so ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/zmeRiOBmpok/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "New Money",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T13:00:42Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "3bas9gmZgps",
    },
    snippet: {
      publishedAt: "2022-10-13T08:06:43Z",
      channelId: "UCorruoVYwGGyND4SZVtrVDQ",
      title:
        "Flood Warnings: New South Wales, Victoria And Tasmania Brace For More Wild Weather",
      description:
        "Emergency warnings have been issued across New South Wales, Victoria and Tasmania, with thousands ordered to leave their ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3bas9gmZgps/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "The Project",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:06:43Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "HZsSt_-EzvA",
    },
    snippet: {
      publishedAt: "2022-10-12T23:41:05Z",
      channelId: "UC9qr4fem8L5HEx0IDoktEpw",
      title:
        "2022 New Songs ( Latest English Songs 2022 ) 🥒 Pop Music 2022 New Song 🥒 New Popular Songs 2022",
      description:
        "2022 New Songs ( Latest English Songs 2022 ) Pop Music 2022 New Song New Popular Songs 2022 Welcome to Pop ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/HZsSt_-EzvA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Pop Internacionais",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T23:41:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "fyFz2BNtm-Q",
    },
    snippet: {
      publishedAt: "2022-10-12T07:05:45Z",
      channelId: "UCUhFaUpnq31m6TNX2VKVSVA",
      title: "New BMW M2: The greatest BMW?!",
      description:
        "Say hello to the all-new BMW M2! This is our first look at BMW's new mini M4, and it's time to find out if it was worth the wait!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fyFz2BNtm-Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "carwow",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T07:05:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "M_fxrnIKdaU",
    },
    snippet: {
      publishedAt: "2022-10-13T04:30:05Z",
      channelId: "UCod_t2sXD_gRI11yFFGkoXg",
      title:
        "New Funny Videos 2022 😂 Cutest People Doing Funny Things 😺😍 #29",
      description:
        "Hi my friends, please check our new compilation. Here is moments people funny videos and we hope that this video make your ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/M_fxrnIKdaU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Vines best fun",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T04:30:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Sq_2TxQ8zLQ",
    },
    snippet: {
      publishedAt: "2022-10-13T08:02:00Z",
      channelId: "UCt3mMVAyGhwQb_ZBGp_p85g",
      title:
        "GTA 5 : Franklin Gifting New Super RC Toy Cars To Shinchan Pinchan &amp; Chop In GTA 5 ! (GTA 5 Mods)",
      description:
        "YOU ARE WATCHING FLIGHT GAMER GTA 5 : Franklin Gifting New Super RC Toy Cars To Shinchan Pinchan & Chop In GTA 5 !",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Sq_2TxQ8zLQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Flight Gamer",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:02:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "a9-7uJWlE-o",
    },
    snippet: {
      publishedAt: "2022-10-13T08:53:48Z",
      channelId: "UCUPD0jQo-EP0B1Nf4uzeIMA",
      title: "Ep 578 | Marimayam | Is the new generation addicted to drugs . ?",
      description:
        "MazhavilManorama #Marimayam #manoramaMAX ▻ Subscribe Now: https://bit.ly/2UsOmyA Are the police or parents ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/a9-7uJWlE-o/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Mazhavil Manorama",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T08:53:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "LgZSMPr5T-c",
    },
    snippet: {
      publishedAt: "2022-10-13T10:47:14Z",
      channelId: "UCbB2OesCr2zlYfr4ijv0zBQ",
      title:
        "hindi new song 💖 latest bollywood songs 💖arijit singh,atif aslam,jubin nautiyal,neha kakkar 💖",
      description:
        "hindi new song latest bollywood songs arijit singh,atif aslam,jubin nautiyal,neha kakkar #bollywoodsongs ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LgZSMPr5T-c/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Hindi Romantic Songs",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T10:47:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "J5KhGJ7qxow",
    },
    snippet: {
      publishedAt: "2022-10-13T02:59:29Z",
      channelId: "UC9lRfGMLA8tmoczC4jHaSNw",
      title:
        "I Return To This Anime Game&#39;s NEW UPDATE EVENT To Obtain The Most Ridiculous STRAW HAT LUFFY Power!",
      description:
        "Game: https://www.roblox.com/games/6938803436/Anime-Dimensions-Simulator Video: WTHHHHHHH? Social Media ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/J5KhGJ7qxow/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Kelvingts",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T02:59:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "7FExLWI7fmQ",
    },
    snippet: {
      publishedAt: "2022-10-12T12:00:06Z",
      channelId: "UCGHNgq4Wg8jP61T_WHUIAlw",
      title: "CLOSE LOOK – The New M 1000 R",
      description:
        "Enjoy every detail of living in the fast lane with the new BMW M R. Exceeding any expectations, it stands for M perfection.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7FExLWI7fmQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BMW Motorrad",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T12:00:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "hFRiK2PN9js",
    },
    snippet: {
      publishedAt: "2022-10-12T09:13:01Z",
      channelId: "UCe9lO5FQR2lLNBtzU0Swgvg",
      title:
        "New Entertainment Top Funny Video Best Comedy in 2022 Episode 99 By Fun Tv 24",
      description:
        "New Entertainment Top Funny Video Best Comedy in 2022 Episode 99 By Fun Tv 24 Must Watch Very Special Funny Video 2022 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hFRiK2PN9js/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Fun Tv 24",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T09:13:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "b0zIM_rc1Lc",
    },
    snippet: {
      publishedAt: "2022-10-12T22:00:13Z",
      channelId: "UCDjQjx4wkGv7aVWIxzl_D5w",
      title:
        "[MAHIKA] - Adie - New OPM Song 2022 Love 💦Top 1 chill OPM Trend -Zack Tabudlo,Moira ,Flow G,Janine",
      description:
        "[MAHIKA] - Adie - New OPM Song 2022 Love Top 1 chill OPM Trend -Zack Tabudlo,Moira ,Flow G,Janine Welcome To MuSic ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/b0zIM_rc1Lc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "MuSic Hits",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T22:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "6hQ2F640jhQ",
    },
    snippet: {
      publishedAt: "2022-10-12T20:20:35Z",
      channelId: "UCOa14ep8GUxOkt89ZE_jDow",
      title: "ROBLOX *NEW* ESCAPE BACKROOMS MORPHS! (ALL NEW MORPHS UNLOCKED!)",
      description:
        'ROBLOX *NEW* ESCAPE BACKROOMS MORPHS! (ALL NEW MORPHS UNLOCKED!) ⭐ Use Star Code: "TUSSY" when ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6hQ2F640jhQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "TussyGames",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T20:20:35Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "mfcOf3Bc108",
    },
    snippet: {
      publishedAt: "2022-10-11T18:22:36Z",
      channelId: "UCNvzD7Z-g64bPXxGzaQaa4g",
      title: "10 Brand NEW Multiplayer Games Trying Something NEW",
      description:
        "Looking for an upcoming multiplayer game that feels a bit different? Here are some new games with different spins on familiar ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mfcOf3Bc108/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "gameranx",
      liveBroadcastContent: "none",
      publishTime: "2022-10-11T18:22:36Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "3xREJvKzFkE",
    },
    snippet: {
      publishedAt: "2022-10-12T17:11:55Z",
      channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
      title: "Cincinnati Bengals vs. New Orleans Saints | 2022 Week 6 Preview",
      description:
        "Check out our other channels: NFL Tuesday Night Gaming https://www.youtube.com/c/NFLTNG NFL Mundo ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3xREJvKzFkE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "NFL",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T17:11:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "6p7Y5z93EA4",
    },
    snippet: {
      publishedAt: "2022-10-13T09:00:13Z",
      channelId: "UCqle5cwtPckB2N8sSQoynwg",
      title:
        "New Bangla Natok 2022 | Bhuture Prem | ভূতুড়ে প্রেম | Niloy Alamgir, Heme | Global TV Online",
      description:
        "You are watching New Bangla Natok: Bhuture Prem | ভূতুড়ে প্রেম Come & join Global TV Online channel to watch ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6p7Y5z93EA4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Global TV Online",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T09:00:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "cKqTy4VzW3A",
    },
    snippet: {
      publishedAt: "2022-10-13T13:40:23Z",
      channelId: "UCgz7Jeier5nCoHN9PpZjKXw",
      title:
        "Dua Zehra new updates | Zehra Kazmi | Arrest Zaheer | Mehdi Kazmi | Zehra Latest",
      description:
        "Breaking News: Dua Zehra new updates | Zehra Kazmi | Arrest Zaheer | Mehdi Kazmi | Zehra Latest Zehra Kazmi | Arrest Zaheer ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/cKqTy4VzW3A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "MARIA ALI",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T13:40:23Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_AtSzR_9hwc",
    },
    snippet: {
      publishedAt: "2022-10-12T21:00:12Z",
      channelId: "UCzORJV8l3FWY4cFO8ot-F2w",
      title: "[Vinesauce] Vinny - New York Comic Con 2022",
      description:
        "Check out my other youtube channel for full streams ▻ http://bit.ly/vinefullsauce Twitch ▻ http://twitch.tv/vinesauce Want a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_AtSzR_9hwc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "vinesauce",
      liveBroadcastContent: "none",
      publishTime: "2022-10-12T21:00:12Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "_3tMxunybd8",
    },
    snippet: {
      publishedAt: "2022-10-13T01:03:04Z",
      channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
      title: "New Russian attacks hit Zaporizhzhia and other parts of Ukraine",
      description:
        "New Russian attacks hit Ukraine, with the U.S. State Department confirming another American citizen has been killed fighting for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_3tMxunybd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ABC News",
      liveBroadcastContent: "none",
      publishTime: "2022-10-13T01:03:04Z",
    },
  },
];

export const demoSearchResultsResponse = [
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "OjJpUVct5fA",
    },
    snippet: {
      publishedAt: "2022-03-31T09:59:51Z",
      channelId: "UC_vH8DvvkrMB3D69NBdjLnQ",
      title: "SEVERINA X AZIS - ‘FALIŠ MI’",
      description:
        "Subscribe Severina YouTube channel ▻ https://goo.gl/QNLWsB ↩︎ ☆ Severina x @Azis Online - 'Fališ mi' ➤ Instagram: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OjJpUVct5fA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/OjJpUVct5fA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/OjJpUVct5fA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Severina",
      liveBroadcastContent: "none",
      publishTime: "2022-03-31T09:59:51Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "H7CVEzMzRd8",
    },
    snippet: {
      publishedAt: "2022-09-23T12:59:41Z",
      channelId: "UC7jQEL7g4i8BM5dLsgcidcw",
      title:
        "DESI SLAVA x AZIS - BRUTALEN | Деси Слава x Азис - Брутален (Official Video 2022)",
      description:
        "Brutalen” Official Music Video by Desi Slava x @Azis Online Stream & Download: https://lnk.to/DesiSlava_Azis_Brutalen Booking ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/H7CVEzMzRd8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/H7CVEzMzRd8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/H7CVEzMzRd8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Desi Slava Official / DESS",
      liveBroadcastContent: "none",
      publishTime: "2022-09-23T12:59:41Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "uwPReKYKZJ0",
    },
    snippet: {
      publishedAt: "2015-06-06T05:03:56Z",
      channelId: "UCqOJkxs6F2gkvi-Drn8DMCw",
      title: "IpMg / AZIS   SAINT TROPEZ",
      description:
        "GRUPUL SI PAGINA..IMI PLACE Muzica Greceasca VA OFERA CEA MAI BUNA MUZICA GRECEASCA SI VA UREAZA TOATE ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uwPReKYKZJ0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/uwPReKYKZJ0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/uwPReKYKZJ0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Seara lui Zorba",
      liveBroadcastContent: "none",
      publishTime: "2015-06-06T05:03:56Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "HYkHob9r6Ls",
    },
    snippet: {
      publishedAt: "2012-11-21T16:09:58Z",
      channelId: "UCYu23Gtbu6saD1mWnOQajdQ",
      title: "Azis - Sen trope Video clip",
      description:
        "Super abonati - samo tarikati, Laskavi magnati... Ooo... Super abonati - samo tarikati, Laskavi magnati... Ooo... Aleley.. pak.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HYkHob9r6Ls/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/HYkHob9r6Ls/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/HYkHob9r6Ls/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Margarita Vlachou",
      liveBroadcastContent: "none",
      publishTime: "2012-11-21T16:09:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "DtoM41TH7HM",
    },
    snippet: {
      publishedAt: "2015-11-03T11:08:19Z",
      channelId: "UCxeMrViqXdLty51nKv3x-bQ",
      title: "AZIS - Habibi / АЗИС - Хабиби",
      description:
        "Търсете албумите ми в: https://bgmusicshop.bg/ Booking / За участия: + 359888233898 Available on iTunes: http://ow.ly/VtI6H ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/DtoM41TH7HM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/DtoM41TH7HM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/DtoM41TH7HM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "FEN TV",
      liveBroadcastContent: "none",
      publishTime: "2015-11-03T11:08:19Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "v_ici9SWJ-Y",
    },
    snippet: {
      publishedAt: "2017-06-26T09:25:51Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "AZIS - MOTEL / Азис - Мотел (Official video)",
      description:
        "https://www.instagram.com/azis_online_new/ https://www.facebook.com/AzisOfficial/ Official merch https://tarikuti.com/ Listen and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/v_ici9SWJ-Y/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/v_ici9SWJ-Y/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/v_ici9SWJ-Y/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2017-06-26T09:25:51Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "LnQHO-JHRLI",
    },
    snippet: {
      publishedAt: "2021-12-09T13:59:34Z",
      channelId: "UCpDazS4et8CYGPOf7ErkTLw",
      title: "GALENA x AZIS - A+G=VNL | Галена x Азис - А+Г=ВНЛ",
      description:
        "All rights reserved | © & ℗ Galena Download & Stream: https://lnk.to/vnl ▻Follow Galena You Tube: https://youtube.com/galena1​ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LnQHO-JHRLI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LnQHO-JHRLI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LnQHO-JHRLI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "GALENA",
      liveBroadcastContent: "none",
      publishTime: "2021-12-09T13:59:34Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "O_LIlve2zHQ",
    },
    snippet: {
      publishedAt: "2022-07-19T14:53:27Z",
      channelId: "UCKEHQbfuXZp_4Z3i4mnGNcA",
      title: "Medi x Azis - Pistolet | Меди х Азис - Пистолет",
      description:
        "Medi x @Azis Online - Pistolet | Меди х Азис - Пистолет Download & Stream ➡️ https://lnk.to/pistolet All rights reserved ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/O_LIlve2zHQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/O_LIlve2zHQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/O_LIlve2zHQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Medi",
      liveBroadcastContent: "none",
      publishTime: "2022-07-19T14:53:27Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "385k7GE-e20",
    },
    snippet: {
      publishedAt: "2013-03-22T12:15:13Z",
      channelId: "UCmostlNXUKB9BwWKuWpOaCQ",
      title: "AZIS - Evala / АЗИС - Евала",
      description:
        "Търсете албумите ми в: https://bgmusicshop.bg/ (P) & (C) 2013 Diapason Records Download it on iTunes: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/385k7GE-e20/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/385k7GE-e20/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/385k7GE-e20/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "DIAPASON RECORDS",
      liveBroadcastContent: "none",
      publishTime: "2013-03-22T12:15:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#channel",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
    },
    snippet: {
      publishedAt: "2015-11-14T16:51:08Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "Azis",
      description:
        "THE OFFICIAL CHANNEL OF AZIS ОФИЦИАЛНИЯТ КАНАЛ НА АЗИС Vasil Troyanov Boyanov, professionally known as AZIS, ...",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s88-c-k-c0xffffffff-no-rj-mo",
        },
        medium: {
          url: "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s240-c-k-c0xffffffff-no-rj-mo",
        },
        high: {
          url: "https://yt3.ggpht.com/-NpfuvdUBiR0wJBiUTfAkUORNxhBPOZInJLWPbqhUfuIUH-NxW5u196bOjamxkFOuwlsN9Vy7A=s800-c-k-c0xffffffff-no-rj-mo",
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2015-11-14T16:51:08Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Nob6yp2gY2Y",
    },
    snippet: {
      publishedAt: "2015-01-08T15:58:09Z",
      channelId: "UCmostlNXUKB9BwWKuWpOaCQ",
      title: "AZIS – MMA (TV version) / АЗИС – ММА (ТВ версия)",
      description:
        "Търсете албумите ми в: https://bgmusicshop.bg/ Booking / За участия: + 359888233898 Download it on iTunes: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Nob6yp2gY2Y/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Nob6yp2gY2Y/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Nob6yp2gY2Y/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "DIAPASON RECORDS",
      liveBroadcastContent: "none",
      publishTime: "2015-01-08T15:58:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "j2IVk3SG7l8",
    },
    snippet: {
      publishedAt: "2021-05-13T15:00:11Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "AZIS - TOCHNO V TRI (OFFICIAL VIDEO 2021)",
      description:
        "Azis - Tochno v tri / Азис - Точно в три (Official video 2021) Download & Stream: Spotify: https://spoti.fi/3hBHYUc Apple Music: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/j2IVk3SG7l8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/j2IVk3SG7l8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/j2IVk3SG7l8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2021-05-13T15:00:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Zo7Ui0CjPpI",
    },
    snippet: {
      publishedAt: "2017-10-25T18:03:34Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "Azis-Isplaci se ,bice ti lakse (cover)",
      description:
        "https://www.facebook.com/AzisOfficial/ https://www.instagram.com/azis_online_new/ Music: Miodrag M. Ilic Lyrics: Danka ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Zo7Ui0CjPpI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Zo7Ui0CjPpI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Zo7Ui0CjPpI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2017-10-25T18:03:34Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "P9sQZLtsfp8",
    },
    snippet: {
      publishedAt: "2011-10-07T12:42:13Z",
      channelId: "UCmostlNXUKB9BwWKuWpOaCQ",
      title: "AZIS - Hop / АЗИС - Хоп",
      description:
        "Търсете албумите ми в: https://bgmusicshop.bg/ (P) & (C) 2011 Diapason Records Download it on iTunes: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/P9sQZLtsfp8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/P9sQZLtsfp8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/P9sQZLtsfp8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "DIAPASON RECORDS",
      liveBroadcastContent: "none",
      publishTime: "2011-10-07T12:42:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "i_mPzU2_72E",
    },
    snippet: {
      publishedAt: "2019-06-07T16:27:45Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "AZIS - Ciganche / АЗИС - Циганче (Official video)",
      description:
        "https://www.facebook.com/AzisOfficial/ https://www.instagram.com/azis_online_new/ https://ruthkoleva.com/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/i_mPzU2_72E/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/i_mPzU2_72E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/i_mPzU2_72E/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2019-06-07T16:27:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "ezp4MRw4x1w",
    },
    snippet: {
      publishedAt: "2015-05-16T17:41:22Z",
      channelId: "UC-G5Ah2c9hJywhur962Ebrw",
      title: "AZIS   Sen Trope   АЗИС   Сен Тропе Official Video",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ezp4MRw4x1w/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ezp4MRw4x1w/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ezp4MRw4x1w/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "HABER",
      liveBroadcastContent: "none",
      publishTime: "2015-05-16T17:41:22Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "7TnRfWSiL6Q",
    },
    snippet: {
      publishedAt: "2013-11-03T15:19:32Z",
      channelId: "UCGBb7INrnahD0eFdfB9Y_DA",
      title: "Azis - Sen Trope (Grecia)",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7TnRfWSiL6Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7TnRfWSiL6Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7TnRfWSiL6Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ACS Real",
      liveBroadcastContent: "none",
      publishTime: "2013-11-03T15:19:32Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "bnMN7jzLkMg",
    },
    snippet: {
      publishedAt: "2019-02-22T17:17:51Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "Azis feat Azis Group  - Jeno Biagai",
      description:
        "Това не е един от моите сериозни проекти, които те карат да се замислиш и носят послание.Това е парче,което носи ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/bnMN7jzLkMg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/bnMN7jzLkMg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/bnMN7jzLkMg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2019-02-22T17:17:51Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Q3OEbzaHOh8",
    },
    snippet: {
      publishedAt: "2012-04-25T12:45:48Z",
      channelId: "UCxeMrViqXdLty51nKv3x-bQ",
      title: "Azis - MMA [HD]",
      description:
        'Търсете албумите ми в: https://bgmusicshop.bg/ Azis "MMA" directed by Azis, music and arrangement by Martin Biolchev, lyrics ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Q3OEbzaHOh8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Q3OEbzaHOh8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Q3OEbzaHOh8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "FEN TV",
      liveBroadcastContent: "none",
      publishTime: "2012-04-25T12:45:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    id: {
      kind: "youtube#video",
      videoId: "Hy-C4YvECMk",
    },
    snippet: {
      publishedAt: "2020-02-06T18:00:12Z",
      channelId: "UCDqzpUGQd60gTvEIeFknLzQ",
      title: "AZIS - Who Cares (Official Video, 2020)",
      description:
        "Music - Azis Аrrangement - Iskrata Lyrics - Ruth Koleva & Rachel Row Mixing and mastering: Peter Kostov (Bate Pesho) Director ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Hy-C4YvECMk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Hy-C4YvECMk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Hy-C4YvECMk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Azis",
      liveBroadcastContent: "none",
      publishTime: "2020-02-06T18:00:12Z",
    },
  },
];

export const demoPlaylistIds = [
  // /*videoId:*/ "oMR0E1Yijvs",
  // /*videoId:*/ "_3tMxunybd8",
  /*videoId:*/ "zmeRiOBmpok",
  // /*videoId:*/ "3bas9gmZgps",
  // /*videoId:*/ "HZsSt_-EzvA",
  // /*videoId:*/ "fyFz2BNtm-Q",
  // /*videoId:*/ "M_fxrnIKdaU",
  // /*videoId:*/ "Sq_2TxQ8zLQ",
  // /*videoId:*/ "a9-7uJWlE-o",
  // /*videoId:*/ "LgZSMPr5T-c",
  // /*videoId:*/ "J5KhGJ7qxow",
  // /*videoId:*/ "7FExLWI7fmQ",
  // /*videoId:*/ "hFRiK2PN9js",
  // /*videoId:*/ "b0zIM_rc1Lc",
  // /*videoId:*/ "6hQ2F640jhQ",
  // /*videoId:*/ "mfcOf3Bc108",
  // /*videoId:*/ "3xREJvKzFkE",
  // /*videoId:*/ "6p7Y5z93EA4",
  // /*videoId:*/ "cKqTy4VzW3A",
  // /*videoId:*/ "_AtSzR_9hwc",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "_3tMxunybd8",
  // /*videoId:*/ "OjJpUVct5fA",
  // /*videoId:*/ "H7CVEzMzRd8",
  // /*videoId:*/ "uwPReKYKZJ0",
  // /*videoId:*/ "HYkHob9r6Ls",
  // /*videoId:*/ "DtoM41TH7HM",
  // /*videoId:*/ "v_ici9SWJ-Y",
  // /*videoId:*/ "LnQHO-JHRLI",
  // /*videoId:*/ "O_LIlve2zHQ",
  // /*videoId:*/ "385k7GE-e20",
  // /*videoId:*/ "Nob6yp2gY2Y",
  // /*videoId:*/ "j2IVk3SG7l8",
  // /*videoId:*/ "Zo7Ui0CjPpI",
  // /*videoId:*/ "P9sQZLtsfp8",
  // /*videoId:*/ "i_mPzU2_72E",
  // /*videoId:*/ "ezp4MRw4x1w",
  // /*videoId:*/ "7TnRfWSiL6Q",
  // /*videoId:*/ "bnMN7jzLkMg",
  // /*videoId:*/ "Q3OEbzaHOh8",
  // /*videoId:*/ "Hy-C4YvECMk",
];
